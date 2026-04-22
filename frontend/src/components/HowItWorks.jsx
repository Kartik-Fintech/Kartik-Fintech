import { UserPlus, Upload, Radar } from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: UserPlus,
    title: "Create your profile",
    desc: "Build a sports resume in minutes — sport, position, age, stats, achievements, and a clean athlete profile page.",
  },
  {
    n: "02",
    icon: Upload,
    title: "Upload stats, videos & achievements",
    desc: "Add highlight reels, match clips and verified records. Our engine turns them into a searchable performance profile.",
  },
  {
    n: "03",
    icon: Radar,
    title: "Get discovered & connect",
    desc: "Coaches, scouts, academies and sponsors find you by sport, city, and performance. Message directly — no gatekeepers.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" data-testid="how-it-works" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="text-[11px] font-body font-bold uppercase tracking-[0.3em] text-[#39FF14] mb-4" data-testid="how-label">
            · How it works
          </div>
          <h2 className="font-display font-black uppercase tracking-tighter text-4xl sm:text-5xl lg:text-6xl">
            From unknown athlete<br />
            to <span className="text-[#0047FF]">scouted talent</span> — in 3 steps.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              data-testid={`how-step-${i + 1}`}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:border-[#0047FF]/50 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#0047FF]/10 border border-[#0047FF]/30 flex items-center justify-center group-hover:bg-[#0047FF]/20 transition-colors">
                  <s.icon className="w-6 h-6 text-[#0047FF]" />
                </div>
                <div className="font-display font-black text-5xl stroke-text">{s.n}</div>
              </div>
              <h3 className="font-display font-bold uppercase tracking-tight text-2xl mb-3 text-balance">
                {s.title}
              </h3>
              <p className="text-sm text-white/65 font-body leading-relaxed">{s.desc}</p>

              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-px bg-white/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
