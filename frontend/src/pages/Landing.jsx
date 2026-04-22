import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import WhyPlayFoliyo from "@/components/WhyPlayFoliyo";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

export default function Landing() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [defaultRole, setDefaultRole] = useState("athlete");

  const openWaitlist = (role = "athlete") => {
    setDefaultRole(role);
    setWaitlistOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden" data-testid="landing-page">
      <Navbar onJoin={() => openWaitlist("athlete")} />
      <main>
        <Hero onAthlete={() => openWaitlist("athlete")} onRecruiter={() => openWaitlist("recruiter")} />
        <HowItWorks />
        <Features />
        <WhyPlayFoliyo />
        <Testimonials />
        <FinalCTA onJoin={() => openWaitlist("athlete")} />
      </main>
      <Footer />
      <WaitlistModal
        open={waitlistOpen}
        onOpenChange={setWaitlistOpen}
        defaultRole={defaultRole}
      />
    </div>
  );
}
