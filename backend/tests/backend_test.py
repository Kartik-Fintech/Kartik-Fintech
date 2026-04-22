"""Backend API tests for PlayFoliyo waitlist + status endpoints."""
import os
import uuid
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://foliyo-launch.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


# ---------- Root ----------
def test_root_alive():
    r = requests.get(f"{API}/")
    assert r.status_code == 200
    assert "live" in r.json().get("message", "").lower()


# ---------- Waitlist ----------
def _email():
    return f"test+{uuid.uuid4().hex[:10]}@playfoliyo.com"


def test_waitlist_create_201_and_lowercases_email():
    email = _email().upper()
    payload = {"name": "Test User", "email": email, "role": "athlete", "sport": "Cricket", "city": "Mumbai"}
    r = requests.post(f"{API}/waitlist", json=payload)
    assert r.status_code == 201, r.text
    data = r.json()
    assert "id" in data and isinstance(data["id"], str)
    assert data["email"] == email.lower()
    assert data["role"] == "athlete"
    assert data["name"] == "Test User"
    assert data["sport"] == "Cricket"


def test_waitlist_duplicate_returns_409():
    email = _email()
    payload = {"name": "Dup User", "email": email, "role": "recruiter"}
    r1 = requests.post(f"{API}/waitlist", json=payload)
    assert r1.status_code == 201
    r2 = requests.post(f"{API}/waitlist", json=payload)
    assert r2.status_code == 409
    assert "waitlist" in r2.json().get("detail", "").lower()


def test_waitlist_same_email_different_role_allowed():
    email = _email()
    r1 = requests.post(f"{API}/waitlist", json={"name": "X", "email": email, "role": "athlete"})
    r2 = requests.post(f"{API}/waitlist", json={"name": "X", "email": email, "role": "coach"})
    assert r1.status_code == 201
    assert r2.status_code == 201


def test_waitlist_invalid_email_422():
    r = requests.post(f"{API}/waitlist", json={"name": "Bad", "email": "not-an-email", "role": "athlete"})
    assert r.status_code == 422


def test_waitlist_invalid_role_422():
    r = requests.post(f"{API}/waitlist", json={"name": "Bad", "email": _email(), "role": "wizard"})
    assert r.status_code == 422


@pytest.mark.parametrize("role", ["athlete", "recruiter", "coach", "scout", "academy", "sponsor"])
def test_waitlist_all_roles_accepted(role):
    r = requests.post(f"{API}/waitlist", json={"name": f"R-{role}", "email": _email(), "role": role})
    assert r.status_code == 201, r.text


def test_waitlist_stats_shape_and_increments():
    s1 = requests.get(f"{API}/waitlist/stats")
    assert s1.status_code == 200
    d1 = s1.json()
    for k in ("total", "athletes", "recruiters"):
        assert k in d1 and isinstance(d1[k], int)

    requests.post(f"{API}/waitlist", json={"name": "A", "email": _email(), "role": "athlete"})
    requests.post(f"{API}/waitlist", json={"name": "S", "email": _email(), "role": "scout"})

    d2 = requests.get(f"{API}/waitlist/stats").json()
    assert d2["total"] >= d1["total"] + 2
    assert d2["athletes"] >= d1["athletes"] + 1
    assert d2["recruiters"] >= d1["recruiters"] + 1  # scout counted under recruiters


# ---------- Status (regression) ----------
def test_status_post_and_get():
    name = f"TEST_{uuid.uuid4().hex[:6]}"
    r = requests.post(f"{API}/status", json={"client_name": name})
    assert r.status_code == 200
    assert r.json()["client_name"] == name
    g = requests.get(f"{API}/status")
    assert g.status_code == 200
    assert any(x.get("client_name") == name for x in g.json())
