import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { Reveal } from "./reveal";

export function Cta() {
  const { email, whatsapp } = site.contact;
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <Reveal className="relative overflow-hidden rounded-[2rem] border border-cyan/20 bg-gradient-to-br from-electric/40 via-navy-3 to-navy p-8 sm:p-16">
        <Image src="/mark.png" alt="" width={700} height={350} className="pointer-events-none absolute -bottom-10 -right-10 w-[28rem] max-w-[70%] opacity-15" />
        <div className="relative">
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">Ready to build something with one team?</h2>
          <p className="mt-4 max-w-xl text-lg text-mute">Tell us what you need. We will tell you plainly whether and how we can help.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            {email && <Button asChild size="lg"><a href={`mailto:${email}`}><Mail size={18} />Email us</a></Button>}
            {whatsapp && <Button asChild variant="outline" size="lg"><a href={whatsapp}><MessageCircle size={18} />WhatsApp</a></Button>}
            {!email && !whatsapp && <p className="glass rounded-full px-5 py-3 text-sm text-mute">Contact details will be published here once configured.</p>}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
