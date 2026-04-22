import { Check, X } from "lucide-react";

const ROWS = [
  { label: "Verified athlete identity", pf: true, social: false },
  { label: "Performance-first profile", pf: true, social: false },
  { label: "Direct coach & scout access", pf: true, social: false },
  { label: "Discovery by sport / city / stats", pf: true, social: false },
  { label: "Highlight reels as first-class content", pf: true, social: "partial" },
  { label: "Sports sponsorship pipeline", pf: true, social: false },
  { label: "Algorithm rewards vanity likes", pf: false, social: true },
];

export default function WhyPlayFoliyo() {
  return (
    <section id="why" data-testid="why-section" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="text-[11px] font-body font-bold uppercase tracking-[0.3em] text-[#39FF14] mb-4">
              · Why PlayFoliyo
            </div>
            <h2 className="font-display font-black uppercase tracking-tighter text-4xl sm:text-5xl lg:text-6xl text-balance">
              Beyond social media.<br />
              <span className="text-[#0047FF]">Built for real athletes.</span>
            </h2>
            <p className="mt-6 text-white/70 font-body leading-relaxed max-w-lg">
              Instagram rewards aesthetics. LinkedIn rewards desk jobs. PlayFoliyo rewards
              performance — and turns it into career opportunities for Indian athletes at every level.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 max-w-md">
              <Pill dot="#39FF14" label="Verified talent" />
              <Pill dot="#0047FF" label="Performance focused" />
              <Pill dot="#39FF14" label="Career opportunities" />
              <Pill dot="#0047FF" label="Sports ecosystem" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 overflow-hidden bg-white/[0.02]" data-testid="compare-table">
              <div className="grid grid-cols-3 text-xs font-body uppercase tracking-[0.2em] font-bold border-b border-white/10">
                <div className="p-5 text-white/50">Capability</div>
                <div className="p-5 text-center bg-[#0047FF]/10 text-white">PlayFoliyo</div>
                <div className="p-5 text-center text-white/50">Instagram / LinkedIn</div>
              </div>
              {ROWS.map((r, i) => (
                <div key={i} className="grid grid-cols-3 border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors">
                  <div className="p-5 text-sm text-white/85 font-body">{r.label}</div>
                  <div className="p-5 flex justify-center items-center bg-[#0047FF]/5">
                    {renderMark(r.pf, "pf")}
                  </div>
                  <div className="p-5 flex justify-center items-center">
                    {renderMark(r.social, "social")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderMark(value, side) {
  if (value === true) {
    return (
      <span className={`inline-flex w-7 h-7 rounded-full items-center justify-center ${side === "pf" ? "bg-[#39FF14]/15 text-[#39FF14] border border-[#39FF14]/40" : "bg-white/10 text-white/70 border border-white/15"}`}>
        <Check className="w-4 h-4" />
      </span>
    );
  }
  if (value === "partial") {
    return <span className="text-[11px] font-body font-bold uppercase tracking-wider text-white/50">Partial</span>;
  }
  return (
    <span className="inline-flex w-7 h-7 rounded-full items-center justify-center bg-white/5 text-white/40 border border-white/10">
      <X className="w-4 h-4" />
    </span>
  );
}

function Pill({ dot, label }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-full border border-white/10 bg-white/[0.03]">
      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: dot }} />
      <span className="text-xs font-body font-semibold text-white/85">{label}</span>
    </div>
  );
}
