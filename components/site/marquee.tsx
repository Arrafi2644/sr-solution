import { services } from "@/lib/site";

export function Marquee() {
  const items = [...services, ...services];
  return (
    <div className="overflow-hidden border-y border-line bg-navy-2/60 py-5" aria-hidden>
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap font-display text-lg text-mute">
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-12"><span>{s.title}</span><span className="size-1.5 rotate-45 bg-cyan" /></span>
        ))}
      </div>
    </div>
  );
}
