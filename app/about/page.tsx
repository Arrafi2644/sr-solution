// import type { Metadata } from "next";
// import { Cta } from "@/components/site/cta";
// import { Reveal } from "@/components/site/reveal";

// export const metadata: Metadata = {
//   title: "About",
//   description: "SR Digital Solutions is a digital agency working with international clients and businesses in Bangladesh.",
//   alternates: { canonical: "/about" },
// };

// const principles = [
//   { t: "One team", d: "Web, search, content, research, operations and automation under one roof, so work fits together." },
//   { t: "Plain communication", d: "Clear scope, straightforward language and honest answers about what we can and cannot do." },
//   { t: "Built to last", d: "Clean, maintainable work that your business can keep building on." },
// ];

// export default function About() {
//   return (
//     <>
//       <section className="mx-auto max-w-6xl px-5 pb-16 pt-24">
//         <h1 className="max-w-4xl text-4xl font-bold sm:text-6xl">A digital agency built around one idea: one team, every digital solution.</h1>
//         <p className="mt-6 max-w-2xl text-lg text-mute">SR Digital Solutions serves international clients and businesses in Bangladesh. We cover six areas of digital work so you do not have to piece together a different provider for each.</p>
//       </section>
//       <section className="mx-auto max-w-6xl px-5 py-12">
//         <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
//           {principles.map((p, i) => (
//             <Reveal key={p.t} delay={i * 0.08} className="bg-navy-2 p-8">
//               <h2 className="text-xl font-semibold text-cyan">{p.t}</h2>
//               <p className="mt-3 text-mute">{p.d}</p>
//             </Reveal>
//           ))}
//         </div>
//       </section>
//       <Cta />
//     </>
//   );
// }




import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Globe2, Layers, MessageSquareText, Wrench } from "lucide-react";
import { Cta } from "@/components/site/cta";
import { Reveal } from "@/components/site/reveal";
import { Audience, Process } from "@/components/site/sections";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "SR Digital Solutions is a digital agency working with international clients and businesses in Bangladesh.",
  alternates: { canonical: "/about" },
};

const principles = [
  { icon: Layers, t: "One team", d: "Web, search, content, research, operations and automation under one roof, so work fits together." },
  { icon: MessageSquareText, t: "Plain communication", d: "Clear scope, straightforward language and honest answers about what we can and cannot do." },
  { icon: Wrench, t: "Built to last", d: "Clean, maintainable work that your business can keep building on." },
  { icon: Globe2, t: "Remote-friendly", d: "Smooth collaboration with clients abroad and with businesses here in Bangladesh." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-[52rem] -translate-x-1/2 rounded-full bg-electric/20 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-24 sm:pb-28 sm:pt-32">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-navy-2/60 px-3.5 py-1.5 text-xs text-mute backdrop-blur">
            <span className="size-1.5 rounded-full bg-cyan" aria-hidden />
            Digital agency for global and Bangladeshi businesses
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] sm:text-6xl">
            A digital agency built around one idea: one team, every digital solution.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-mute">
            {site.name} serves international clients and businesses in Bangladesh. We cover six areas of digital work so you do not have to piece together a different provider for each.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/services" className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-electric to-cyan px-6 py-3 text-sm font-medium text-white shadow-[0_8px_30px_-8px_rgb(27_107_255/.9)] transition-all hover:-translate-y-0.5">
              Explore services
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </Link>
            <Link href={site.cta.href} className="inline-flex items-center rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-cyan/50 hover:text-cyan">
              {site.cta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* Six areas */}
      <section className="border-y border-line bg-navy-2/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">Six areas of digital work, coordinated as one.</h2>
            <p className="mt-4 max-w-md text-mute">Use one service or several. Because the same team plans them together, nothing gets lost between vendors.</p>
          </Reveal>
          <ul className="grid gap-3 sm:grid-cols-2">
            {services.map((s, i) => (
              <li key={s.id}>
                <Reveal delay={(i % 2) * 0.06}>
                  <Link href={`/services#${s.id}`} className="card-surface group flex items-center gap-4 rounded-2xl border border-line p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/50">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-electric to-cyan text-white"><s.icon size={20} aria-hidden /></span>
                    <span className="flex-1 text-sm font-medium leading-snug">{s.title}</span>
                    <ArrowUpRight size={16} className="shrink-0 text-mute transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan" aria-hidden />
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">How we work</h2>
          <p className="mt-4 max-w-xl text-lg text-mute">A few principles that shape every project.</p>
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {principles.map((p, i) => (
            <li key={p.t} className="flex">
              <Reveal delay={(i % 2) * 0.08} className="flex-1">
                <div className="card-surface group relative h-full overflow-hidden rounded-3xl border border-line p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-[0_20px_60px_-20px_rgb(27_107_255/.6)]">
                  <div className="absolute -right-14 -top-14 size-44 rounded-full bg-electric/20 blur-3xl transition-colors group-hover:bg-cyan/30" aria-hidden />
                  <span className="relative grid size-12 place-items-center rounded-2xl border border-line bg-navy-3 text-cyan"><p.icon size={22} aria-hidden /></span>
                  <h3 className="relative mt-6 text-xl font-semibold sm:text-2xl">{p.t}</h3>
                  <p className="relative mt-3 max-w-md text-mute">{p.d}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <Process />
      <Audience />
      <Cta />
    </>
  );
}