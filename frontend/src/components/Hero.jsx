import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Activity, Trophy, Users } from "lucide-react";

const HERO_IMG = "https://static.prod-images.emergentagent.com/jobs/8fc113ad-8636-4d32-bc41-f7459b3c7438/images/7c7779afde5c0aba46a4d1fa110af3af29df7a0e588cd4ff3cd65d5a1c23029c.png";

export default function Hero({ onAthlete, onRecruiter }) {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-[100vh] pt-24 pb-20 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMG}
          alt="Athlete in motion"
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />
        <div className="absolute inset-0 grid-lines opacity-50" />
      </div>

      {/* Glow orbs */}
      <div className="absolute -top-24 -left-24 w-[520px] h-[520px] bg-[#0047FF] opacity-20 blur-[160px] rounded-full z-0" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#39FF14] opacity-10 blur-[180px] rounded-full z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center min-h-[80vh]">
          <div className="lg:col-span-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8" data-testid="hero-badge">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-[#39FF14]" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]" />
              </span>
              <span className="text-xs font-body text-white/80 tracking-[0.2em] uppercase font-semibold">
                India's sports talent network · Launching soon
              </span>
            </div>

            <h1 className="font-display font-black uppercase tracking-tighter text-balance text-[44px] leading-[0.92] sm:text-6xl lg:text-[96px]" data-testid="hero-heading">
              Build Your<br />
              Athletic Career{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-white">Digitally</span>
                <span className="absolute left-0 right-0 bottom-1 h-3 bg-[#0047FF] -z-0 skew-x-[-12deg]" />
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/75 font-body leading-relaxed" data-testid="hero-sub">
              Create your sports portfolio, showcase stats, upload highlight videos, and get
              discovered by coaches, scouts & brands — all on one verified platform built for
              real athletes.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                onClick={onAthlete}
                data-testid="hero-join-athlete-btn"
                className="bg-[#0047FF] hover:bg-[#0038cc] text-white font-bold rounded-full px-8 h-14 text-base transition-transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,71,255,0.6)] group"
              >
                Join as Athlete
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={onRecruiter}
                variant="outline"
                data-testid="hero-join-recruiter-btn"
                className="bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40 font-bold rounded-full px-8 h-14 text-base"
              >
                Join as Recruiter
              </Button>
              <a
                href="#how"
                className="ml-1 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors font-body"
                data-testid="hero-how-link"
              >
                <PlayCircle className="w-5 h-5" />
                See how it works
              </a>
            </div>

            {/* Stat strip */}
            <div className="mt-14 grid grid-cols-3 max-w-xl gap-8 border-t border-white/10 pt-8">
              <Stat icon={Users} value="12K+" label="Waitlist" />
              <Stat icon={Activity} value="38" label="Sports covered" />
              <Stat icon={Trophy} value="220+" label="Verified coaches" />
            </div>
          </div>

          {/* Floating profile card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative animate-float">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#0047FF] to-[#39FF14] opacity-30 blur-2xl rounded-3xl" />
              <div className="relative glass rounded-3xl p-6 border-white/10" data-testid="hero-profile-card">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0047FF] to-[#39FF14] flex items-center justify-center font-display font-black text-lg">
                    AR
                  </div>
                  <div>
                    <div className="font-display font-bold tracking-tight text-lg leading-none">Aarav Rathod</div>
                    <div className="text-xs text-white/60 font-body mt-1">Sprinter · Mumbai · 21</div>
                  </div>
                  <div className="ml-auto px-2 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30">
                    <span className="text-[10px] font-body font-bold uppercase tracking-wider text-[#39FF14]">Verified</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  <MiniStat label="100m" value="10.42s" />
                  <MiniStat label="VO2 max" value="61" />
                  <MiniStat label="Record" value="State" />
                </div>

                <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-video bg-black">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0047FF]/30 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <PlayCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 text-[10px] font-body text-white/80 bg-black/60 px-2 py-1 rounded">
                    Highlight · 0:42
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs font-body">
                  <span className="text-white/60">Scouted by</span>
                  <span className="text-white font-semibold">3 coaches · 2 academies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grain" />
    </section>
  );
}

function Stat({ icon: Icon, value, label }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-white/50 mb-1">
        <Icon className="w-4 h-4" />
        <span className="text-[10px] font-body uppercase tracking-[0.2em]">{label}</span>
      </div>
      <div className="font-display text-3xl font-black tracking-tight">{value}</div>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 px-3 py-2">
      <div className="text-[9px] uppercase tracking-wider text-white/50 font-body">{label}</div>
      <div className="font-display text-base font-bold text-white leading-tight">{value}</div>
    </div>
  );
}
