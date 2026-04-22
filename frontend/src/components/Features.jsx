import { useState } from "react";
import {
  FileText, ShieldCheck, Video, LineChart, Handshake,
  Search, SlidersHorizontal, MessageSquare, ListChecks,
} from "lucide-react";

const ATHLETE_FEATURES = [
  { icon: FileText, title: "Sports Resume", desc: "A polished digital CV — sport, positions, stats, clubs, records.", big: true },
  { icon: ShieldCheck, title: "Verified Achievements", desc: "Upload certificates and event results; we badge them verified." },
  { icon: Video, title: "Highlight Videos", desc: "Showcase your best plays in a dedicated reel." },
  { icon: LineChart, title: "Performance Analytics", desc: "Track progress over time with charts scouts love." },
  { icon: Handshake, title: "Sponsorship Opportunities", desc: "Get discovered by brands matching your story." },
];

const RECRUITER_FEATURES = [
  { icon: Search, title: "Search Talent", desc: "Query a nationwide pool of verified athletes in seconds.", big: true },
  { icon: SlidersHorizontal, title: "Advanced Filters", desc: "Filter by sport, city, age, and live performance metrics." },
  { icon: MessageSquare, title: "Direct Messaging", desc: "Connect with athletes and their coaches — no middlemen." },
  { icon: ListChecks, title: "Shortlist Players", desc: "Build squads and share shortlists with your team." },
];

const ANALYTICS_IMG = "https://static.prod-images.emergentagent.com/jobs/8fc113ad-8636-4d32-bc41-f7459b3c7438/images/8ceab0dbe8352853adf4f03c3418b2f77601de2f3e1721149028bfa02d1ab7a5.png";

export default function Features() {
  const [tab, setTab] = useState("athletes");
  const list = tab === "athletes" ? ATHLETE_FEATURES : RECRUITER_FEATURES;

  return (
    <section id="features" data-testid="features-section" className="relative py-24 sm:py-32 bg-[#070707]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="text-[11px] font-body font-bold uppercase tracking-[0.3em] text-[#39FF14] mb-4">· Features</div>
            <h2 className="font-display font-black uppercase tracking-tighter text-4xl sm:text-5xl lg:text-6xl">
              Built for both sides<br />of the field.
            </h2>
          </div>

          <div className="inline-flex glass rounded-full p-1.5 border border-white/10" data-testid="features-toggle">
            <button
              onClick={() => setTab("athletes")}
              data-testid="features-tab-athletes"
              className={`px-5 sm:px-7 h-11 rounded-full text-sm font-body font-bold uppercase tracking-wider transition-all ${
                tab === "athletes" ? "bg-[#0047FF] text-white shadow-[0_0_20px_rgba(0,71,255,0.5)]" : "text-white/70 hover:text-white"
              }`}
            >
              For Athletes
            </button>
            <button
              onClick={() => setTab("recruiters")}
              data-testid="features-tab-recruiters"
              className={`px-5 sm:px-7 h-11 rounded-full text-sm font-body font-bold uppercase tracking-wider transition-all ${
                tab === "recruiters" ? "bg-[#39FF14] text-black" : "text-white/70 hover:text-white"
              }`}
            >
              For Recruiters
            </button>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 auto-rows-fr">
          {list.map((f, i) => (
            <FeatureCard
              key={`${tab}-${f.title}`}
              feature={f}
              index={i}
              tab={tab}
              isFirst={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );

  function FeatureCard({ feature, index, tab, isFirst }) {
    const big = isFirst;
    const span = big ? "md:col-span-4 md:row-span-2" : "md:col-span-2";
    const accent = tab === "athletes" ? "#0047FF" : "#39FF14";
    return (
      <div
        data-testid={`feature-card-${tab}-${index}`}
        className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 hover:border-[${accent}]/50 hover:bg-white/[0.04] transition-all duration-300 ${span}`}
      >
        {big && (
          <div className="absolute inset-0 pointer-events-none">
            <img src={ANALYTICS_IMG} alt="" className="w-full h-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />
          </div>
        )}
        <div className="relative z-10 flex flex-col h-full min-h-[180px]">
          <div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-5"
            style={{ borderColor: `${accent}55`, backgroundColor: `${accent}15` }}>
            <feature.icon className="w-5 h-5" style={{ color: accent }} />
          </div>
          <h3 className={`font-display font-bold uppercase tracking-tight mb-2 ${big ? "text-3xl sm:text-4xl" : "text-xl"}`}>
            {feature.title}
          </h3>
          <p className={`text-white/65 font-body leading-relaxed ${big ? "text-base max-w-md" : "text-sm"}`}>
            {feature.desc}
          </p>
          {big && (
            <div className="mt-auto pt-6 flex items-center gap-6 text-xs font-body text-white/70">
              <Metric label="Profile views" value="12.4K" />
              <Metric label="Scout interest" value="+38%" neon />
              <Metric label="Shortlisted" value="09" />
            </div>
          )}
        </div>
      </div>
    );
  }

  function Metric({ label, value, neon }) {
    return (
      <div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">{label}</div>
        <div className={`font-display text-2xl font-black ${neon ? "text-[#39FF14]" : "text-white"}`}>{value}</div>
      </div>
    );
  }
}
