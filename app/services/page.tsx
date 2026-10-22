// import type { Metadata } from "next";
// import { Cta } from "@/components/site/cta";
// import { Reveal } from "@/components/site/reveal";
// import { services } from "@/lib/site";

// export const metadata: Metadata = {
//   title: "Services",
//   description: "Web development and design, SEO and digital marketing, content writing, product research and listing, e-commerce and inventory management, automation and virtual assistance.",
//   alternates: { canonical: "/services" },
// };

// export default function Services() {
//   return (
//     <>
//       <section className="mx-auto max-w-6xl px-5 pb-12 pt-24">
//         <h1 className="max-w-4xl text-4xl font-bold sm:text-6xl">Everything digital, from one team.</h1>
//         <p className="mt-6 max-w-2xl text-lg text-mute">Six service areas. Use one or combine several.</p>
//       </section>
//       <section className="mx-auto max-w-6xl px-5">
//         {services.map((s) => (
//           <Reveal key={s.id} className="scroll-mt-24 border-t border-line py-12">
//             <div id={s.id} className="grid scroll-mt-24 gap-8 md:grid-cols-[1fr_1.2fr]">
//               <div>
//                 <s.icon className="text-cyan" size={32} aria-hidden />
//                 <h2 className="mt-4 text-2xl font-semibold md:text-3xl">{s.title}</h2>
//                 <p className="mt-3 text-mute">{s.summary}</p>
//               </div>
//               <ul className="grid gap-3 sm:grid-cols-2">
//                 {s.scope.map((x) => <li key={x} className="rounded-2xl border border-line bg-navy-2 p-5 text-sm">{x}</li>)}
//               </ul>
//             </div>
//           </Reveal>
//         ))}
//       </section>
//       <Cta />
//     </>
//   );
// }





import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Cta } from "@/components/site/cta";
import { Reveal } from "@/components/site/reveal";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Web development and design, SEO and digital marketing, content writing, product research and listing, e-commerce and inventory management, automation and virtual assistance.",
  alternates: { canonical: "/services" },
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-[52rem] -translate-x-1/2 rounded-full bg-electric/20 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 pb-12 pt-24 sm:pt-32">
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] sm:text-6xl">Everything digital, from one team.</h1>
          <p className="mt-6 max-w-2xl text-lg text-mute">Six service areas. Use one or combine several, and we coordinate them together.</p>
        </div>
      </section>

      {/* Quick jump */}
      <div className="sticky top-16 z-30 border-y border-line bg-navy/80 backdrop-blur-xl">
        <nav aria-label="Services" className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none]">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="group flex shrink-0 items-center gap-2 rounded-full border border-line bg-navy-2/60 px-4 py-2 text-sm text-mute transition-colors hover:border-cyan/50 hover:text-ink">
              <s.icon size={15} className="text-cyan" aria-hidden />
              {s.title}
            </a>
          ))}
        </nav>
      </div>

      {/* Services */}
      <section className="mx-auto max-w-6xl space-y-6 px-5 py-16 sm:py-24">
        {services.map((s) => (
          <article key={s.id} id={s.id} className="scroll-mt-40">
            <Reveal>
              <div className="card-surface group relative overflow-hidden rounded-3xl border border-line p-8 transition-colors duration-300 hover:border-cyan/40 sm:p-10">
                <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-electric/20 blur-3xl transition-colors group-hover:bg-cyan/25" aria-hidden />
                <div className="relative grid gap-10 lg:grid-cols-[1fr_1.3fr]">
                  <div className="flex flex-col items-start">
                    <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-electric to-cyan text-white shadow-lg"><s.icon size={26} aria-hidden /></span>
                    <h2 className="mt-6 text-2xl font-semibold sm:text-3xl">{s.title}</h2>
                    <p className="mt-3 max-w-md text-mute">{s.summary}</p>
                    <Link href={site.cta.href} className="group/link mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-cyan">
                      Discuss this service
                      <ArrowUpRight size={16} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" aria-hidden />
                    </Link>
                  </div>
                  <ul className="grid content-start gap-3 sm:grid-cols-2">
                    {s.scope.map((x) => (
                      <li key={x} className="flex items-start gap-3 rounded-2xl border border-line bg-navy-2/70 p-5 text-sm transition-colors hover:border-cyan/40">
                        <Check size={18} className="mt-0.5 shrink-0 text-cyan" aria-hidden />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </article>
        ))}
      </section>

      <Cta />
    </>
  );
}