import { useEffect, useState } from "react";
import axios from "axios";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { CheckCircle2, Loader2 } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const ROLES = [
  { id: "athlete", label: "Athlete" },
  { id: "recruiter", label: "Recruiter" },
  { id: "coach", label: "Coach" },
  { id: "scout", label: "Scout" },
  { id: "academy", label: "Academy" },
  { id: "sponsor", label: "Sponsor" },
];

export default function WaitlistModal({ open, onOpenChange, defaultRole = "athlete" }) {
  const [form, setForm] = useState({ name: "", email: "", role: defaultRole, sport: "", city: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (open) {
      setForm((f) => ({ ...f, role: defaultRole }));
      setSuccess(false);
    }
  }, [open, defaultRole]);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please enter your name and email.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/waitlist`, {
        name: form.name.trim(),
        email: form.email.trim(),
        role: form.role,
        sport: form.sport.trim() || null,
        city: form.city.trim() || null,
      });
      setSuccess(true);
      toast.success("You're on the waitlist!", { description: "We'll reach out when early access opens." });
      setForm({ name: "", email: "", role: defaultRole, sport: "", city: "" });
    } catch (err) {
      const msg = err?.response?.data?.detail || "Something went wrong. Try again.";
      toast.error(typeof msg === "string" ? msg : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-testid="waitlist-modal"
        className="sm:max-w-md bg-[#0A0A0A] border border-white/10 text-white rounded-3xl p-0 overflow-hidden"
      >
        <div className="relative p-7">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#0047FF] opacity-20 blur-[90px] rounded-full pointer-events-none" />
          <DialogHeader className="relative">
            <DialogTitle className="font-display font-black uppercase tracking-tight text-3xl text-balance">
              {success ? "You're in." : "Join the waitlist"}
            </DialogTitle>
            <DialogDescription className="text-white/60 font-body text-sm">
              {success
                ? "Thanks for joining PlayFoliyo. We'll be in touch when early access opens."
                : "Get early access to India's sports talent network."}
            </DialogDescription>
          </DialogHeader>

          {success ? (
            <div className="relative mt-6 flex flex-col items-center text-center py-6">
              <div className="w-14 h-14 rounded-full bg-[#39FF14]/15 border border-[#39FF14]/40 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-7 h-7 text-[#39FF14]" />
              </div>
              <Button
                onClick={() => onOpenChange(false)}
                className="mt-2 bg-white text-black hover:bg-white/90 font-bold rounded-full px-6 h-11"
                data-testid="waitlist-close-btn"
              >
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={submit} className="relative mt-6 space-y-4" data-testid="waitlist-form">
              <div>
                <Label className="text-xs uppercase tracking-[0.2em] font-bold text-white/60 font-body">I am a</Label>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {ROLES.map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => update("role", r.id)}
                      data-testid={`waitlist-role-${r.id}`}
                      className={`text-xs font-body font-bold uppercase tracking-wider h-10 rounded-full border transition-all ${
                        form.role === r.id
                          ? "bg-[#0047FF] border-[#0047FF] text-white"
                          : "bg-white/5 border-white/10 text-white/70 hover:border-white/30"
                      }`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>

              <FormField label="Full name" htmlFor="wl-name">
                <Input
                  id="wl-name"
                  data-testid="waitlist-name"
                  placeholder="Aarav Rathod"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl h-11 focus-visible:ring-[#0047FF] focus-visible:border-[#0047FF]"
                  required
                />
              </FormField>

              <FormField label="Email" htmlFor="wl-email">
                <Input
                  id="wl-email"
                  type="email"
                  data-testid="waitlist-email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl h-11 focus-visible:ring-[#0047FF] focus-visible:border-[#0047FF]"
                  required
                />
              </FormField>

              <div className="grid grid-cols-2 gap-3">
                <FormField label="Sport (optional)" htmlFor="wl-sport">
                  <Input
                    id="wl-sport"
                    data-testid="waitlist-sport"
                    placeholder="Cricket"
                    value={form.sport}
                    onChange={(e) => update("sport", e.target.value)}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl h-11 focus-visible:ring-[#0047FF] focus-visible:border-[#0047FF]"
                  />
                </FormField>
                <FormField label="City (optional)" htmlFor="wl-city">
                  <Input
                    id="wl-city"
                    data-testid="waitlist-city"
                    placeholder="Mumbai"
                    value={form.city}
                    onChange={(e) => update("city", e.target.value)}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl h-11 focus-visible:ring-[#0047FF] focus-visible:border-[#0047FF]"
                  />
                </FormField>
              </div>

              <Button
                type="submit"
                data-testid="waitlist-submit"
                disabled={loading}
                className="w-full bg-[#0047FF] hover:bg-[#0038cc] text-white font-bold rounded-full h-12 mt-2 transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
              >
                {loading ? (
                  <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting…</>
                ) : (
                  "Join Waitlist"
                )}
              </Button>
              <p className="text-[11px] text-white/40 text-center font-body">
                By joining, you agree to our Terms & Privacy Policy.
              </p>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function FormField({ label, htmlFor, children }) {
  return (
    <div>
      <Label htmlFor={htmlFor} className="text-xs uppercase tracking-[0.2em] font-bold text-white/60 font-body">{label}</Label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}
