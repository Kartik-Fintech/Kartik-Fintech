# PlayFoliyo — PRD

## Original problem statement
Modern startup landing page for PlayFoliyo (Play + Portfolio) — a LinkedIn-style networking and discovery platform for athletes, coaches, scouts, academies, sponsors, and sports professionals. Style: Nike + LinkedIn + Hudl. Dark theme, electric blue + neon green accents, glassmorphism, premium animations, mobile responsive.

## Architecture
- **Backend**: FastAPI (Python) + MongoDB (Motor). Router prefixed `/api`.
- **Frontend**: React 19 + Tailwind + shadcn/ui + lucide-react + sonner. Barlow Condensed (display) + Manrope (body).
- **Data**: `waitlist` collection stores signup entries. `status_checks` retained.

## User personas
- **Athletes** — showcase stats, highlight videos, achievements; get discovered.
- **Recruiters / Scouts / Coaches / Academies / Sponsors** — search, filter, shortlist, message talent.

## Core requirements (static)
- Landing page with Hero, How It Works, Features (Athletes/Recruiters tabs), Why PlayFoliyo comparison, Testimonials, Final CTA, Footer.
- Waitlist modal collecting name, email, role, optional sport + city.
- Role selector: athlete / recruiter / coach / scout / academy / sponsor.
- Dark aesthetic; `#050505` base, `#0047FF` electric blue, `#39FF14` neon green accent.

## Implemented (2025-12)
- ✅ Backend: `POST /api/waitlist` (dedupe on email+role → 409), `GET /api/waitlist/stats`, `GET /api/` health.
- ✅ Full landing page with all 7 sections and floating glassmorphism profile card in hero.
- ✅ Animated CTAs, staggered entrance, grain texture, grid lines, glow orbs.
- ✅ Navbar (sticky, mobile menu), Footer (huge stroke wordmark, social links).
- ✅ Waitlist modal (shadcn Dialog) with sonner toast feedback + success state.
- ✅ All interactive elements have `data-testid`.
- ✅ Tested: 100% backend + frontend pass (iteration_1.json).

## Backlog (prioritized)
### P0 (blockers for launch)
- None — landing is launch-ready.

### P1 (next)
- Waitlist admin view (export CSV, basic auth).
- Unique compound index on `waitlist.(email, role)` to guard race conditions.
- Analytics: page view + CTA click tracking (Plausible / Umami).
- Migrate FastAPI shutdown event to lifespan handler.

### P2 (future features)
- Athlete profile signup flow + dashboard.
- Recruiter search UI with filters.
- Highlight video upload (S3 / Cloudflare R2).
- Verified achievement badges (coach confirmation flow).
- Direct messaging between athletes and recruiters.
- Sponsorship directory.
- Email notifications via Resend/SendGrid on waitlist join.

## Next tasks
- Decide: build MVP (auth + profiles) or ship landing + collect waitlist first.
- Connect a real domain + add social sharing meta tags (OG image).
