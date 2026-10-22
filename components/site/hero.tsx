"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site";

const short = ["Web", "SEO", "Content", "Research", "E-commerce", "Automation"];

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden">
      <div className="hero-glow absolute inset-0" aria-hidden />
      <div className="grid-bg absolute inset-0 opacity-70" aria-hidden />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs><linearGradient id="arc" x1="0" x2="1"><stop offset="0" stopColor="#19c1ff" stopOpacity="0" /><stop offset=".7" stopColor="#19c1ff" stopOpacity=".55" /><stop offset="1" stopColor="#fff" stopOpacity=".8" /></linearGradient></defs>
        <motion.path d="M-80 760 C 260 760, 520 520, 1260 40" fill="none" stroke="url(#arc)" strokeWidth="2" strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }} />
      </svg>
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 lg:grid-cols-[1.1fr_1fr] lg:pb-28 lg:pt-24">
        <div>
          <motion.p initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-mute">
            <span className="size-2 rounded-full bg-cyan shadow-[0_0_10px_var(--color-cyan)]" aria-hidden />Digital agency for global and Bangladeshi businesses
          </motion.p>
          <motion.h1 initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="mt-6 text-5xl font-bold leading-[1.02] sm:text-6xl xl:text-7xl">
            One team.<br /><span className="text-gradient">Every digital solution.</span>
          </motion.h1>
          <motion.p initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="mt-6 max-w-lg text-lg leading-relaxed text-mute">
            We design and build websites, grow your search visibility, write your content and run the daily work behind your online business, so you deal with one team instead of six.
          </motion.p>
          <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="shadow-[0_0_40px_-8px_var(--color-electric)]"><Link href="/services">Explore services <ArrowRight size={18} /></Link></Button>
            <Button asChild variant="outline" size="lg"><Link href="/about">About us</Link></Button>
          </motion.div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[460px] sm:max-w-[520px]" role="img" aria-label="SR Digital Solutions logo surrounded by its six services">
          <div className="absolute inset-[12%] rounded-full bg-electric/25 blur-3xl" aria-hidden />
          <svg className="absolute inset-0 size-full" viewBox="0 0 100 100" aria-hidden>
            <g className="animate-spin-slow"><circle cx="50" cy="50" r="46" fill="none" stroke="#19c1ff" strokeOpacity=".35" strokeWidth=".2" strokeDasharray="1 2" /></g>
            <circle cx="50" cy="50" r="33" fill="none" stroke="#1b6bff" strokeOpacity=".3" strokeWidth=".2" />
          </svg>
          <motion.div initial={reduce ? false : { opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.9 }} className="absolute left-1/2 top-1/2 w-[64%] -translate-x-1/2 -translate-y-1/2">
            <Image src="/mark.png" alt="" width={700} height={350} priority className="w-full drop-shadow-[0_10px_40px_rgba(27,107,255,.5)]" />
          </motion.div>
          {services.map((s, i) => {
            const a = (i / services.length) * Math.PI * 2 - Math.PI / 2;
            return (
              <motion.div key={s.id} initial={reduce ? false : { opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 + i * 0.1 }}
                className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${50 + 46 * Math.cos(a)}%`, top: `${50 + 46 * Math.sin(a)}%` }}>
                <div className="animate-float glass flex items-center gap-2 rounded-full p-2.5 text-xs font-medium sm:pr-4" style={{ animationDelay: `${i * 0.7}s` }}>
                  <s.icon size={16} className="text-cyan" aria-hidden /><span className="hidden sm:inline">{short[i]}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
