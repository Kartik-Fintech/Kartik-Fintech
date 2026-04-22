export default function Logo({ size = "md" }) {
  const s = size === "lg" ? "text-2xl" : "text-xl";
  return (
    <div className="flex items-center gap-2" data-testid="brand-logo">
      <div className="relative w-8 h-8 flex items-center justify-center">
        <div className="absolute inset-0 rounded-lg bg-[#0047FF] rotate-45" />
        <div className="absolute inset-[3px] rounded-md bg-black flex items-center justify-center">
          <span className="font-display font-black text-[#39FF14] text-sm leading-none">P</span>
        </div>
      </div>
      <span className={`font-display font-black uppercase tracking-tight ${s}`}>
        Play<span className="text-[#0047FF]">Foliyo</span>
      </span>
    </div>
  );
}
