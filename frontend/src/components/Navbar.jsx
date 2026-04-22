import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

export default function Navbar({ onJoin }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { label: "How it works", href: "#how" },
    { label: "Features", href: "#features" },
    { label: "Why us", href: "#why" },
    { label: "Stories", href: "#stories" },
  ];

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-black/60 border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2" data-testid="nav-logo">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-white transition-colors font-body"
              data-testid={`nav-link-${l.href.slice(1)}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            onClick={onJoin}
            data-testid="nav-join-btn"
            className="bg-[#0047FF] hover:bg-[#0038cc] text-white font-bold rounded-full px-6 h-10 transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,71,255,0.5)]"
          >
            Join Waitlist
          </Button>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-white p-2"
          data-testid="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/5" data-testid="nav-mobile-menu">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/80 font-body"
              >
                {l.label}
              </a>
            ))}
            <Button
              onClick={() => { setOpen(false); onJoin(); }}
              className="bg-[#0047FF] hover:bg-[#0038cc] text-white font-bold rounded-full"
              data-testid="nav-mobile-join-btn"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
