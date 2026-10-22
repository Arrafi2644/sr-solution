import Link from "next/link";
import { ArrowUpRight, Check, ClipboardList, MessagesSquare, RefreshCcw, Rocket } from "lucide-react";
import { Reveal } from "./reveal";
import { site } from "@/lib/site";

const steps = [
  { icon: MessagesSquare, t: "Discuss", d: "We learn your goals, audience and what you need done.", out: "A shared, clear brief" },
  { icon: ClipboardList, t: "Plan", d: "We agree the scope and what will be delivered.", out: "Written scope and deliverables" },
  { icon: Rocket, t: "Deliver", d: "We do the work and share it for your review.", out: "Finished work to review" },
  { icon: RefreshCcw, t: "Refine", d: "We adjust based on your feedback and finish the job.", out: "Final, approved delivery" },
];

export function Process() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-navy-2/40">
      {/* ambient light */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-electric/15 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">How a project runs</h2>
          <p className="mt-4 max-w-xl text-lg text-mute">A simple, predictable path from first conversation to finished work.</p>
        </Reveal>

        <ol className="relative mt-16 grid gap-6 md:grid-cols-4 md:gap-5">
          {/* desktop: horizontal glowing rail */}
          <div className="absolute left-6 right-6 top-6 hidden h-px bg-gradient-to-r from-electric via-cyan to-electric/10 md:block" aria-hidden />
          <div className="absolute left-6 right-6 top-6 hidden h-px bg-gradient-to-r from-electric via-cyan to-transparent blur-sm md:block" aria-hidden />
          {/* mobile: vertical rail */}
          <div className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-electric via-cyan to-electric/10 md:hidden" aria-hidden />

          {steps.map((s, i) => (
            <li key={s.t} className="relative pl-16 md:pl-0">
              {/* node on the rail */}
              <span className="absolute left-0 top-0 z-10 grid size-12 place-items-center rounded-full border border-cyan/60 bg-navy text-cyan shadow-[0_0_28px_-4px_var(--color-cyan)] md:static">
                <s.icon size={20} aria-hidden />
              </span>

              <Reveal delay={i * 0.1} className="md:mt-6">
                <div className="card-surface group relative h-full overflow-hidden rounded-3xl border border-line p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-[0_20px_60px_-20px_rgb(27_107_255/.6)]">
                  <div className="absolute -right-12 -top-12 size-36 rounded-full bg-electric/20 blur-3xl transition-colors group-hover:bg-cyan/30" aria-hidden />
                  <span className="pointer-events-none absolute -bottom-6 -right-1 select-none font-display text-8xl font-bold leading-none text-ink/5" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <p className="relative text-xs font-medium text-cyan">Step {i + 1}</p>
                  <h3 className="relative mt-2 text-2xl font-semibold">{s.t}</h3>
                  <p className="relative mt-3 text-mute">{s.d}</p>

                  <div className="relative mt-6 border-t border-line pt-4">
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