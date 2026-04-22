import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FinalCTA({ onJoin }) {
  return (
    <section data-testid="final-cta" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#0047FF] opacity-15 blur-[200px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse-dot" />
          <span className="text-xs font-body text-white/80 tracking-[0.2em] uppercase font-semibold">
            Early access open
          </span>
        </div>
        <h2 className="font-display font-black uppercase tracking-tighter text-5xl sm:text-7xl lg:text-8xl leading-[0.92] text-balance">
          India's next<br />
          <span className="text-[#0047FF]">sports stars</span> start here.
        </h2>
        <p className="mt-8 max-w-2xl mx-auto text-white/70 font-body text-base sm:text-lg">
          Join thousands of athletes, coaches, scouts, and brands already building the
          future of sports talent discovery.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            onClick={onJoin}
            data-testid="final-cta-join-btn"
            className="bg-[#0047FF] hover:bg-[#0038cc] text-white font-bold rounded-full px-10 h-14 text-base transition-transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,71,255,0.6)] group"
          >
            Join PlayFoliyo Today
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <div className="text-xs text-white/50 font-body">
            Free during beta · No credit card required
          </div>
        </div>
      </div>
    </section>
  );
}
