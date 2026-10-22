// import Link from "next/link";
// import { ArrowUpRight, Globe2, Layers, MapPin, MessageSquareText, Plus, Wrench, Check } from "lucide-react";
// import { services } from "@/lib/site";
// import { Reveal } from "./reveal";
// import { cn } from "@/lib/utils";

// function Heading({ title, text }: { title: string; text?: string }) {
//   return (
//     <Reveal>
//       <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">{title}</h2>
//       {text && <p className="mt-4 max-w-xl text-lg text-mute">{text}</p>}
//     </Reveal>
//   );
// }

// const spans = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-6"];

// export function Bento() {
//   return (
//     <section className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
//       <Heading title="Six services. One team accountable for the result." text="Use a single service or combine several. Everything is coordinated in one place." />
//       <div className="mt-14 grid gap-4 lg:grid-cols-6">
//         {services.map((s, i) => (
//           <Reveal key={s.id} delay={(i % 3) * 0.07} className={spans[i]}>
//             <Link href={`/services#${s.id}`} className="card-surface group relative flex h-full min-h-64 flex-col overflow-hidden rounded-3xl border border-line p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-[0_20px_60px_-20px_rgb(27_107_255/.6)]">
//               <div className="absolute -right-16 -top-16 size-48 rounded-full bg-electric/20 blur-3xl transition-opacity group-hover:bg-cyan/30" aria-hidden />
//               <div className="relative flex items-start justify-between">
//                 <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-electric to-cyan text-white shadow-lg"><s.icon size={22} aria-hidden /></span>
//                 <ArrowUpRight className="text-mute transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan" aria-hidden />
//               </div>
//               <h3 className="relative mt-8 text-xl font-semibold sm:text-2xl">{s.title}</h3>
//               <p className="relative mt-2 max-w-md text-mute">{s.summary}</p>
//               <ul className="relative mt-auto flex flex-wrap gap-2 pt-6">
//                 {s.scope.slice(0, i === 0 || i === 5 ? 4 : 2).map((x) => <li key={x} className="rounded-full border border-line px-3 py-1 text-xs text-mute">{x}</li>)}
//               </ul>
//             </Link>
//           </Reveal>
//         ))}
//       </div>
//     </section>
//   );
// }

// const why = [
//   { icon: Layers, t: "One team, six disciplines", d: "Design, search, content, research, operations and automation planned together instead of handed between vendors." },
//   { icon: Globe2, t: "Built for two markets", d: "We work with international clients and with businesses in Bangladesh." },
//   { icon: MessageSquareText, t: "Plain communication", d: "Clear scope and straightforward answers about what we can and cannot do." },
//   { icon: Wrench, t: "Maintainable work", d: "Clean, well-structured output that your business can keep building on." },
// ];

// export function Why() {
//   return (
//     <section className="border-y border-line bg-navy-2/50">
//       <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:py-32 lg:grid-cols-[1fr_1.3fr]">
//         <div className="lg:sticky lg:top-28 lg:self-start"><Heading title="Why work with SR Digital Solutions" text="A simpler way to run the digital side of your business." /></div>
//         <ul className="divide-y divide-line">
//           {why.map((w, i) => (
//             <Reveal key={w.t} delay={i * 0.06}>
//               <li className="flex gap-5 py-7 first:pt-0">
//                 <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-line bg-navy-3 text-cyan"><w.icon size={22} aria-hidden /></span>
//                 <div><h3 className="text-xl font-semibold">{w.t}</h3><p className="mt-2 text-mute">{w.d}</p></div>
//               </li>
//             </Reveal>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

// const steps = [
//   { t: "Discuss", d: "We learn your goals, audience and what you need done." },
//   { t: "Plan", d: "We agree the scope and what will be delivered." },
//   { t: "Deliver", d: "We do the work and share it for your review." },
//   { t: "Refine", d: "We adjust based on your feedback and finish the job." },
// ];

// export function Process() {
//   return (
//     <section className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
//       <Heading title="How a project runs" text="A simple, predictable path from first conversation to finished work." />
//       <ol className="relative mt-14 grid gap-6 md:grid-cols-4">
//         <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-electric via-cyan to-transparent md:block" aria-hidden />
//         {steps.map((s, i) => (
//           <Reveal key={s.t} delay={i * 0.1}>
//             <li className="relative">
//               <span className="relative grid size-12 place-items-center rounded-full border border-cyan/60 bg-navy font-display font-semibold text-cyan shadow-[0_0_24px_-4px_var(--color-cyan)]">{i + 1}</span>
//               <h3 className="mt-5 text-xl font-semibold">{s.t}</h3>
//               <p className="mt-2 text-mute">{s.d}</p>
//             </li>
//           </Reveal>
//         ))}
//       </ol>
//     </section>
//   );
// }

// const audiences = [
//   { icon: Globe2, t: "International clients", d: "Remote-friendly delivery for businesses abroad that need dependable digital work.", pts: ["Websites and web design", "SEO and content", "Research, listing and store support", "Virtual assistance and automation"] },
//   { icon: MapPin, t: "Businesses in Bangladesh", d: "A modern online presence and the day-to-day operations to support it.", pts: ["Business websites", "Search and digital marketing", "E-commerce and inventory management", "Workflow automation"] },
// ];

// export function Audience() {
//   return (
//     <section className="mx-auto max-w-6xl px-5 pb-24 sm:pb-32">
//       <div className="grid gap-4 md:grid-cols-2">
//         {audiences.map((a, i) => (
//           <Reveal key={a.t} delay={i * 0.1}>
//             <div className={cn("card-surface h-full rounded-3xl border border-line p-8 sm:p-10", i === 1 && "bg-[radial-gradient(120%_100%_at_100%_0%,rgb(25_193_255/.16),transparent_55%)]")}>
//               <a.icon className="text-cyan" size={30} aria-hidden />
//               <h3 className="mt-6 text-2xl font-semibold sm:text-3xl">{a.t}</h3>
//               <p className="mt-3 text-mute">{a.d}</p>
//               <ul className="mt-6 space-y-2.5">{a.pts.map((p) => <li key={p} className="flex gap-3 text-sm"><Check size={18} className="shrink-0 text-cyan" aria-hidden />{p}</li>)}</ul>
//             </div>
//           </Reveal>
//         ))}
//       </div>
//     </section>
//   );
// }

// const faqs = [
//   { q: "Can I use just one service?", a: "Yes. You can hire us for a single service or combine several, and we coordinate them as one team." },
//   { q: "Do you work with clients outside Bangladesh?", a: "Yes. We serve international clients as well as businesses in Bangladesh." },
//   { q: "Which services do you offer?", a: "Web development and design, SEO and digital marketing, content and blog writing, product research and listing, e-commerce and inventory management, and automation and virtual assistance." },
//   { q: "How do I get started?", a: "Reach out with a short description of what you need. We will discuss scope and confirm whether we are the right fit." },
// ];

// export function Faq() {
//   return (
//     <section className="mx-auto max-w-4xl px-5 pb-8">
//       <Heading title="Frequently asked questions" />
//       <div className="mt-10 divide-y divide-line border-y border-line">
//         {faqs.map((f) => (
//           <details key={f.q} className="group py-5">
//             <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-medium">
//               {f.q}<Plus className="faq-icon shrink-0 text-cyan transition-transform" aria-hidden />
//             </summary>
//             <p className="mt-3 max-w-2xl text-mute">{f.a}</p>
//           </details>
//         ))}
//       </div>
//     </section>
//   );
// }




import Link from "next/link";
import { ArrowUpRight, Globe2, Layers, MapPin, MessageSquareText, Plus, Wrench, Check, MessagesSquare, ClipboardList, Rocket, RefreshCcw } from "lucide-react";
import { services, site } from "@/lib/site";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

function Heading({ title, text }: { title: string; text?: string }) {
  return (
    <Reveal>
      <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">{title}</h2>
      {text && <p className="mt-4 max-w-xl text-lg text-mute">{text}</p>}
    </Reveal>
  );
}

const spans = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-6"];

export function Bento() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <Heading title="Six services. One team accountable for the result." text="Use a single service or combine several. Everything is coordinated in one place." />
      <div className="mt-14 grid gap-4 lg:grid-cols-6">
        {services.map((s, i) => (
          <Reveal key={s.id} delay={(i % 3) * 0.07} className={spans[i]}>
            <Link href={`/services#${s.id}`} className="card-surface group relative flex h-full min-h-64 flex-col overflow-hidden rounded-3xl border border-line p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-[0_20px_60px_-20px_rgb(27_107_255/.6)]">
              <div className="absolute -right-16 -top-16 size-48 rounded-full bg-electric/20 blur-3xl transition-opacity group-hover:bg-cyan/30" aria-hidden />
              <div className="relative flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-electric to-cyan text-white shadow-lg"><s.icon size={22} aria-hidden /></span>
                <ArrowUpRight className="text-mute transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan" aria-hidden />
              </div>
              <h3 className="relative mt-8 text-xl font-semibold sm:text-2xl">{s.title}</h3>
              <p className="relative mt-2 max-w-md text-mute">{s.summary}</p>
              <ul className="relative mt-auto flex flex-wrap gap-2 pt-6">
                {s.scope.slice(0, i === 0 || i === 5 ? 4 : 2).map((x) => <li key={x} className="rounded-full border border-line px-3 py-1 text-xs text-mute">{x}</li>)}
              </ul>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const why = [
  { icon: Layers, t: "One team, six disciplines", d: "Design, search, content, research, operations and automation planned together instead of handed between vendors." },
  { icon: Globe2, t: "Built for two markets", d: "We work with international clients and with businesses in Bangladesh." },
  { icon: MessageSquareText, t: "Plain communication", d: "Clear scope and straightforward answers about what we can and cannot do." },
  { icon: Wrench, t: "Maintainable work", d: "Clean, well-structured output that your business can keep building on." },
];

export function Why() {
  return (
    <section className="border-y border-line bg-navy-2/50">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:py-32 lg:grid-cols-[1fr_1.3fr]">
        <div className="lg:sticky lg:top-28 lg:self-start"><Heading title="Why work with SR Digital Solutions" text="A simpler way to run the digital side of your business." /></div>
        <ul className="divide-y divide-line border-b border-line">
          {why.map((w, i) => (
            <li key={w.t} className="py-8 first:pt-0">
              <Reveal delay={i * 0.06}>
                <div className="group flex gap-5">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-line bg-navy-3 text-cyan transition-colors group-hover:border-cyan/50"><w.icon size={22} aria-hidden /></span>
                  <div className="pt-0.5"><h3 className="text-xl font-semibold leading-snug">{w.t}</h3><p className="mt-2 max-w-lg text-mute">{w.d}</p></div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const steps = [
  { icon: MessagesSquare, t: "Discuss", d: "We learn your goals, audience and what you need done.", out: "A shared, clear brief" },
  { icon: ClipboardList, t: "Plan", d: "We agree the scope and what will be delivered.", out: "Written scope and deliverables" },
  { icon: Rocket, t: "Deliver", d: "We do the work and share it for your review.", out: "Finished work to review" },
  { icon: RefreshCcw, t: "Refine", d: "We adjust based on your feedback and finish the job.", out: "Final, approved delivery" },
];

export function Process() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-navy-2/40">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-electric/15 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <Heading title="How a project runs" text="A simple, predictable path from first conversation to finished work." />

        <ol className="relative mt-16 grid gap-6 md:grid-cols-4 md:gap-5">
          {/* desktop: horizontal glowing rail */}
          <div className="absolute left-6 right-6 top-6 hidden h-px bg-gradient-to-r from-electric via-cyan to-electric/10 md:block" aria-hidden />
          <div className="absolute left-6 right-6 top-6 hidden h-px bg-gradient-to-r from-electric via-cyan to-transparent blur-sm md:block" aria-hidden />
          {/* mobile: vertical rail */}
          <div className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-electric via-cyan to-electric/10 md:hidden" aria-hidden />

          {steps.map((s, i) => (
            <li key={s.t} className="relative flex flex-col pl-16 md:pl-0">
              <span className="absolute left-0 top-0 z-10 grid size-12 place-items-center rounded-full border border-cyan/60 bg-navy text-cyan shadow-[0_0_28px_-4px_var(--color-cyan)] md:static">
                <s.icon size={20} aria-hidden />
              </span>

              <Reveal delay={i * 0.1} className="flex-1 md:mt-6">
                <div className="card-surface group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-[0_20px_60px_-20px_rgb(27_107_255/.6)]">
                  <div className="absolute -right-12 -top-12 size-36 rounded-full bg-electric/20 blur-3xl transition-colors group-hover:bg-cyan/30" aria-hidden />
                  <span className="pointer-events-none absolute right-5 top-4 select-none font-display text-6xl font-bold leading-none text-ink/10" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <p className="relative text-xs font-medium text-cyan">Step {i + 1}</p>
                  <h3 className="relative mt-2 text-2xl font-semibold">{s.t}</h3>
                  <p className="relative mt-3 mb-6 text-mute">{s.d}</p>

                  <div className="relative mt-auto border-t border-line pt-4">
                    <p className="text-xs text-mute">You get</p>
                    <p className="mt-1.5 flex items-start gap-2 text-sm">
                      <Check size={16} className="mt-0.5 shrink-0 text-cyan" aria-hidden />
                      {s.out}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-14">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-line bg-navy-3/40 px-6 py-5 sm:flex-row sm:items-center">
            <p className="text-mute">Not sure where to begin? Start with a short conversation about what you need.</p>
            <Link href={site.cta.href} className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-cyan/50 px-5 py-2.5 text-sm font-medium text-cyan transition-colors hover:bg-cyan/10">
              {site.cta.label}
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const audiences = [
  { icon: Globe2, t: "International clients", d: "Remote-friendly delivery for businesses abroad that need dependable digital work.", pts: ["Websites and web design", "SEO and content", "Research, listing and store support", "Virtual assistance and automation"] },
  { icon: MapPin, t: "Businesses in Bangladesh", d: "A modern online presence and the day-to-day operations to support it.", pts: ["Business websites", "Search and digital marketing", "E-commerce and inventory management", "Workflow automation"] },
];

export function Audience() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <div className="grid gap-4 md:grid-cols-2">
        {audiences.map((a, i) => (
          <Reveal key={a.t} delay={i * 0.1}>
            <div className={cn("card-surface h-full rounded-3xl border border-line p-8 sm:p-10", i === 1 && "bg-[radial-gradient(120%_100%_at_100%_0%,rgb(25_193_255/.16),transparent_55%)]")}>
              <a.icon className="text-cyan" size={30} aria-hidden />
              <h3 className="mt-6 text-2xl font-semibold sm:text-3xl">{a.t}</h3>
              <p className="mt-3 text-mute">{a.d}</p>
              <ul className="mt-6 space-y-2.5">{a.pts.map((p) => <li key={p} className="flex gap-3 text-sm"><Check size={18} className="shrink-0 text-cyan" aria-hidden />{p}</li>)}</ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const faqs = [
  { q: "Can I use just one service?", a: "Yes. You can hire us for a single service or combine several, and we coordinate them as one team." },
  { q: "Do you work with clients outside Bangladesh?", a: "Yes. We serve international clients as well as businesses in Bangladesh." },
  { q: "Which services do you offer?", a: "Web development and design, SEO and digital marketing, content and blog writing, product research and listing, e-commerce and inventory management, and automation and virtual assistance." },
  { q: "How do I get started?", a: "Reach out with a short description of what you need. We will discuss scope and confirm whether we are the right fit." },
];

export function Faq() {
  return (
    <section className="mx-auto max-w-4xl px-5 pb-8">
      <Heading title="Frequently asked questions" />
      <div className="mt-10 divide-y divide-line border-y border-line">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-medium">
              {f.q}<Plus className="faq-icon shrink-0 text-cyan transition-transform" aria-hidden />
            </summary>
            <p className="mt-3 max-w-2xl text-mute">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}