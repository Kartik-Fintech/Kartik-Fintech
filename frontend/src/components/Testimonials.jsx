import { Star } from "lucide-react";

const STORIES = [
  {
    name: "Ishita Patel",
    role: "State-level Sprinter",
    city: "Ahmedabad",
    quote: "Two weeks after uploading my 100m footage, I was on a call with a national-level coach. PlayFoliyo made me visible.",
    initials: "IP",
  },
  {
    name: "Coach Rohan Mehta",
    role: "Cricket Academy Head",
    city: "Pune",
    quote: "I shortlisted 12 U-19 bowlers in an afternoon using the filters. That would've taken me a whole season of travel.",
    initials: "RM",
  },
  {
    name: "Kabir Ahuja",
    role: "Football Scout",
    city: "Bengaluru",
    quote: "Verified stats changed the game. No more fake CVs — I see a real athlete, real records, real highlight reels.",
    initials: "KA",
  },
  {
    name: "Neha Iyer",
    role: "Tennis Player · U-21",
    city: "Chennai",
    quote: "I landed my first sponsorship through PlayFoliyo's brand directory. It felt like LinkedIn, but for my forehand.",
    initials: "NI",
  },
];

export default function Testimonials() {
  return (
    <section id="stories" data-testid="testimonials-section" className="relative py-24 sm:py-32 bg-[#070707]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-[11px] font-body font-bold uppercase tracking-[0.3em] text-[#39FF14] mb-4">· Stories</div>
            <h2 className="font-display font-black uppercase tracking-tighter text-4xl sm:text-5xl lg:text-6xl text-balance">
              Real athletes.<br />Real opportunities.
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {[0,1,2,3,4].map(i => <Star key={i} className="w-4 h-4 fill-[#39FF14] text-[#39FF14]" />)}
            <span className="text-sm font-body text-white/70 ml-2">4.9 · Early users</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STORIES.map((s, i) => (
            <figure
              key={s.name}
              data-testid={`story-card-${i}`}
              className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 hover:border-[#0047FF]/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-5">
                {[0,1,2,3,4].map(k => <Star key={k} className="w-3 h-3 fill-[#39FF14] text-[#39FF14]" />)}
              </div>
              <blockquote className="font-display font-semibold text-white text-lg leading-snug tracking-tight">
                "{s.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0047FF] to-[#39FF14] flex items-center justify-center font-display font-black text-sm text-black">
                  {s.initials}
                </div>
                <div>
                  <div className="font-body font-bold text-sm text-white">{s.name}</div>
                  <div className="text-[11px] text-white/50 font-body uppercase tracking-wider">
                    {s.role} · {s.city}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
