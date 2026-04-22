import Logo from "@/components/Logo";
import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const cols = [
    { title: "Company", links: ["About", "Contact", "Careers", "Press"] },
    { title: "Platform", links: ["For Athletes", "For Recruiters", "For Academies", "Sponsors"] },
    { title: "Resources", links: ["Blog", "Help Center", "Community", "Changelog"] },
    { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
  ];

  return (
    <footer data-testid="footer" className="relative border-t border-white/10 bg-[#030303]">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Logo size="lg" />
            <p className="mt-5 text-sm text-white/60 font-body leading-relaxed max-w-sm">
              The sports talent network for athletes, coaches, scouts, academies and brands.
              Built in India. Built for the world.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  data-testid={`footer-social-${i}`}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#0047FF]/60 hover:bg-[#0047FF]/10 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-[11px] font-body font-bold uppercase tracking-[0.2em] text-white/50 mb-4">
                  {c.title}
                </div>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-white/75 hover:text-white font-body transition-colors">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs text-white/40 font-body">
            © {new Date().getFullYear()} PlayFoliyo. All rights reserved.
          </div>
          <div className="text-xs text-white/40 font-body flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse-dot" />
            All systems operational
          </div>
        </div>
      </div>

      {/* Massive stroke wordmark */}
      <div className="overflow-hidden select-none">
        <div className="font-display font-black uppercase tracking-tighter text-[22vw] leading-[0.85] text-center stroke-text -mb-4 px-4">
          PlayFoliyo
        </div>
      </div>
    </footer>
  );
}
