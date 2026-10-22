import type { Metadata } from "next";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { Bento, Why, Process, Audience, Faq } from "@/components/site/sections";
import { Cta } from "@/components/site/cta";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: { absolute: `${site.name} | ${site.tagline}` }, alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Bento />
      <Why />
      <Process />
      <Audience />
      <Faq />
      <Cta />
    </>
  );
}
