// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { site } from "@/lib/site";
// import { cn } from "@/lib/utils";

// export function Header() {
//   const path = usePathname();
//   const [open, setOpen] = useState(false);
//   return (
//     <header className="sticky top-0 z-50 border-b border-line bg-navy/80 backdrop-blur-md">
//       <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
//         <Link href="/" className="flex items-center gap-3 font-display font-semibold" onClick={() => setOpen(false)}>
//           <Image src="/mark.png" alt="" width={44} height={22} className="h-6 w-auto" />
//           <span>{site.name}</span>
//         </Link>
//         <nav aria-label="Main" className="hidden gap-1 md:flex">
//           {site.nav.map((n) => (
//             <Link key={n.href} href={n.href} aria-current={path === n.href ? "page" : undefined}
//               className={cn("rounded-full px-4 py-2 text-sm text-mute transition-colors hover:text-ink", path === n.href && "bg-navy-3 text-ink")}>
//               {n.label}
//             </Link>
//           ))}
//         </nav>
//         <button className="md:hidden rounded-md p-2" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
//           {open ? <X /> : <Menu />}
//         </button>
//       </div>
//       {open && (
//         <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-navy px-5 py-4 md:hidden">
//           {site.nav.map((n) => (
//             <Link key={n.href} href={n.href} onClick={() => setOpen(false)} aria-current={path === n.href ? "page" : undefined}
//               className={cn("block py-3 font-display text-xl", path === n.href ? "text-cyan" : "text-ink")}>{n.label}</Link>
//           ))}
//         </nav>
//       )}
//     </header>
//   );
// }




"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu on navigation
  useEffect(() => setOpen(false), [path]);

  // lock body scroll + Escape to close
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled || open
          ? "border-line bg-navy/80 shadow-[0_10px_40px_-20px_rgb(0_0_0/.8)] backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center px-5 transition-all duration-300 md:grid-cols-[1fr_auto_1fr]",
          scrolled ? "h-16" : "h-20",
        )}
      >
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-3 justify-self-start font-display font-semibold" aria-label={`${site.name} home`}>
          <span className="relative grid place-items-center rounded-xl border border-line bg-navy-2/70 px-2.5 py-1.5 transition-colors group-hover:border-cyan/50">
            <span className="absolute inset-0 rounded-xl bg-cyan/20 opacity-0 blur-md transition-opacity group-hover:opacity-100" aria-hidden />
            <Image src="/mark.png" alt="" width={44} height={22} className="relative h-5 w-auto" priority />
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>

        {/* Desktop nav: centred pill */}
        <nav aria-label="Main" className="hidden items-center gap-1 rounded-full border border-line bg-navy-2/60 p-1 backdrop-blur md:flex">
          {site.nav.map((n) => {
            const active = path === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-5 py-2 text-sm transition-colors",
                  active
                    ? "bg-gradient-to-b from-navy-3 to-navy-2 text-ink shadow-[inset_0_0_0_1px_rgb(25_193_255/.35),0_0_20px_-6px_rgb(25_193_255/.6)]"
                    : "text-mute hover:bg-navy-3/60 hover:text-ink",
                )}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA + burger */}
        <div className="flex items-center gap-2 justify-self-end">
          <Link
            href={site?.cta?.href}
            className="group hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-electric to-cyan px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_30px_-8px_rgb(27_107_255/.9)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_rgb(25_193_255/.8)] md:inline-flex"
          >
            {site?.cta?.label}
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
          </Link>
          <button
            className="grid size-10 place-items-center rounded-full border border-line bg-navy-2/70 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* subtle glow line under the header once scrolled */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent transition-opacity duration-300",
          scrolled ? "opacity-100" : "opacity-0",
        )}
        aria-hidden
      />

      {/* Mobile full-screen menu */}
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="fixed inset-x-0 top-16 bottom-0 flex flex-col overflow-y-auto bg-navy/95 px-5 pb-8 pt-4 backdrop-blur-xl md:hidden">
          <ul className="divide-y divide-line border-y border-line">
            {site.nav.map((n) => {
              const active = path === n.href;
              return (
                <li key={n.href}>
                  <Link href={n.href} aria-current={active ? "page" : undefined} className="flex items-center justify-between gap-4 py-5">
                    <span>
                      <span className={cn("block font-display text-2xl font-semibold", active ? "text-cyan" : "text-ink")}>{n.label}</span>
                      <span className="mt-1 block text-sm text-mute">{n.desc}</span>
                    </span>
                    <ArrowUpRight className={active ? "text-cyan" : "text-mute"} aria-hidden />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-auto space-y-4 pt-8">
            <Link href={site.cta.href} className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-cyan px-6 py-4 font-medium text-white shadow-[0_8px_30px_-8px_rgb(27_107_255/.9)]">
              {site.cta.label} <ArrowUpRight size={18} aria-hidden />
            </Link>
            {site.contact.email && (
              <a href={`mailto:${site.contact.email}`} className="block text-center text-sm text-mute hover:text-cyan">{site.contact.email}</a>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}