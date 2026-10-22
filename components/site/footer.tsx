// // import Link from "next/link";
// // import { site } from "@/lib/site";

// // export function Footer() {
// //   const social = site.social.filter((s) => s.href);
// //   return (
// //     <footer className="border-t border-line">
// //       <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
// //         <div>
// //           <p className="font-display text-lg font-semibold">{site.name}</p>
// //           <p className="mt-2 max-w-xs text-sm text-mute">{site.tagline}</p>
// //         </div>
// //         <nav aria-label="Footer" className="flex flex-col gap-2 text-sm text-mute">
// //           {site.nav.map((n) => <Link key={n.href} href={n.href} className="hover:text-cyan">{n.label}</Link>)}
// //         </nav>
// //         <div className="flex flex-col gap-2 text-sm text-mute">
// //           {site.contact.email && <a href={`mailto:${site.contact.email}`} className="hover:text-cyan">{site.contact.email}</a>}
// //           {social.map((s) => <a key={s.label} href={s.href} rel="noopener noreferrer" target="_blank" className="hover:text-cyan">{s.label}</a>)}
// //         </div>
// //       </div>
// //       <p className="border-t border-line py-5 text-center text-xs text-mute">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
// //     </footer>
// //   );
// // }




// import Image from "next/image";
// import Link from "next/link";
// import { ArrowUp, ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
// import { site, services } from "@/lib/site";

// const col = "font-display text-sm font-semibold text-ink";
// const link = "group inline-flex items-center gap-1 text-sm text-mute transition-colors hover:text-cyan";

// export function Footer() {
//   const social = site.social.filter((s) => s.href);
//   const hasContact = site.contact.email || site.contact.whatsapp || social.length > 0;

//   return (
//     <footer className="relative mt-24 overflow-hidden border-t border-line bg-navy-2/40">
//       {/* top glow line + ambient light */}
//       <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" aria-hidden />
//       <div className="pointer-events-none absolute -left-24 top-0 size-96 rounded-full bg-electric/15 blur-3xl" aria-hidden />

//       <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-12 pt-16 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.3fr_1.2fr]">
//         {/* Brand */}
//         <div>
//           <Link href="/" className="inline-flex items-center gap-3" aria-label={`${site.name} home`}>
//             <span className="grid place-items-center rounded-xl border border-line bg-navy-3/70 px-2.5 py-1.5">
//               <Image src="/mark.png" alt="" width={44} height={22} className="h-5 w-auto" />
//             </span>
//             <span className="font-display text-lg font-semibold">{site.name}</span>
//           </Link>
//           <p className="mt-5 max-w-xs text-sm leading-relaxed text-mute">{site.tagline} Websites, search, content, research, store operations and automation from a single team.</p>
//           <p className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-navy-3/50 px-3.5 py-1.5 text-xs text-mute">
//             <span className="relative flex size-2">
//               <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/70 motion-reduce:animate-none" />
//               <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
//             </span>
//             Open to new projects
//           </p>
//         </div>

//         {/* Navigate */}
//         <nav aria-label="Footer" className="flex flex-col gap-3">
//           <p className={col}>Explore</p>
//           {site.nav.map((n) => (
//             <Link key={n.href} href={n.href} className={link}>{n.label}</Link>
//           ))}
//           <Link href={site.cta.href} className={link}>Contact</Link>
//         </nav>

//         {/* Services */}
//         <nav aria-label="Services" className="flex flex-col gap-3">
//           <p className={col}>Services</p>
//           {services.map((s) => (
//             <Link key={s.id} href={`/services#${s.id}`} className={link}>{s.title}</Link>
//           ))}
//         </nav>

//         {/* Contact */}
//         <div className="flex flex-col gap-3">
//           <p className={col}>Get in touch</p>
//           {site.contact.email && (
//             <a href={`mailto:${site.contact.email}`} className={link}><Mail size={15} aria-hidden />{site.contact.email}</a>
//           )}
//           {site.contact.whatsapp && (
//             <a href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer" className={link}><MessageCircle size={15} aria-hidden />WhatsApp<ArrowUpRight size={13} aria-hidden /></a>
//           )}
//           {social.map((s) => (
//             <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={link}>{s.label}<ArrowUpRight size={13} aria-hidden /></a>
//           ))}
//           {!hasContact && <p className="text-sm text-mute">Contact details will be published here once configured.</p>}
//           <p className="mt-2 flex items-start gap-2 text-sm text-mute"><MapPin size={15} className="mt-0.5 shrink-0 text-cyan" aria-hidden />{site.location}</p>
//         </div>
//       </div>

//       {/* Oversized wordmark */}
//       <div aria-hidden className="pointer-events-none select-none px-5 text-center font-display text-[clamp(3.5rem,15vw,13rem)] font-bold leading-[0.8] tracking-tight">
//         <span className="bg-gradient-to-b from-ink/15 to-transparent bg-clip-text text-transparent">SR Digital</span>
//       </div>

//       {/* Bottom bar */}
//       <div className="relative border-t border-line">
//         <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-5 text-xs text-mute sm:flex-row">
//           <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
//           <Link href="#" className="group inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 transition-colors hover:border-cyan/50 hover:text-cyan">
//             Back to top <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" aria-hidden />
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// }



import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { site, services } from "@/lib/site";

const col = "font-display text-sm font-semibold text-ink";
const link = "group inline-flex items-center gap-1 text-sm text-mute transition-colors hover:text-cyan";

export function Footer() {
  const social = site.social.filter((s) => s.href);
  const hasContact = site.contact.email || site.contact.whatsapp || social.length > 0;

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-line bg-navy-2/40">
      {/* top glow line + ambient light */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute -left-24 top-0 size-96 rounded-full bg-electric/15 blur-3xl" aria-hidden />

      {/* faint wordmark in the background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden">
        <span className="whitespace-nowrap bg-gradient-to-b from-ink/[0.03] to-ink/[0.01] bg-clip-text pb-[0.15em] font-display text-[clamp(5rem,22vw,20rem)] font-bold leading-none tracking-tight text-transparent">
          SR Digital
        </span>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-12 pt-16 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.3fr_1.2fr]">
        {/* Brand */}
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label={`${site.name} home`}>
            <span className="grid place-items-center rounded-xl border border-line bg-navy-3/70 px-2.5 py-1.5">
              <Image src="/mark.png" alt="" width={44} height={22} className="h-5 w-auto" />
            </span>
            <span className="font-display text-lg font-semibold">{site.name}</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-mute">{site.tagline} Websites, search, content, research, store operations and automation from a single team.</p>
          <p className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-navy-3/50 px-3.5 py-1.5 text-xs text-mute">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/70 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Open to new projects
          </p>
        </div>

        {/* Navigate */}
        <nav aria-label="Footer" className="flex flex-col gap-3">
          <p className={col}>Explore</p>
          {site.nav.map((n) => (
            <Link key={n.href} href={n.href} className={link}>{n.label}</Link>
          ))}
          <Link href={site.cta.href} className={link}>Contact</Link>
        </nav>

        {/* Services */}
        <nav aria-label="Services" className="flex flex-col gap-3">
          <p className={col}>Services</p>
          {services.map((s) => (
            <Link key={s.id} href={`/services#${s.id}`} className={link}>{s.title}</Link>
          ))}
        </nav>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <p className={col}>Get in touch</p>
          {site.contact.email && (
            <a href={`mailto:${site.contact.email}`} className={link}><Mail size={15} aria-hidden />{site.contact.email}</a>
          )}
          {site.contact.whatsapp && (
            <a href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer" className={link}><MessageCircle size={15} aria-hidden />WhatsApp<ArrowUpRight size={13} aria-hidden /></a>
          )}
          {social.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={link}>{s.label}<ArrowUpRight size={13} aria-hidden /></a>
          ))}
          {!hasContact && <p className="text-sm text-mute">Contact details will be published here once configured.</p>}
          <p className="mt-2 flex items-start gap-2 text-sm text-mute"><MapPin size={15} className="mt-0.5 shrink-0 text-cyan" aria-hidden />{site.location}</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-5 text-xs text-mute sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <Link href="#" className="group inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 transition-colors hover:border-cyan/50 hover:text-cyan">
            Back to top <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" aria-hidden />
          </Link>
        </div>
      </div>
    </footer>
  );
}