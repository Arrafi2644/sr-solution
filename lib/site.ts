// import { Code2, Search, PenLine, PackageSearch, Store, Bot, type LucideIcon } from "lucide-react";

// export const site = {
//   name: "SR Digital Solutions",
//   tagline: "One Team. Every Digital Solution.",
//   description:
//     "SR Digital Solutions is a digital agency for international clients and businesses in Bangladesh: web, SEO, content, product research, e-commerce operations and automation.",
//   url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
//   contact: {
//     email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || undefined,
//     whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL || undefined,
//   },
//   social: [
//     { label: "LinkedIn", href: process.env.NEXT_PUBLIC_LINKEDIN_URL || undefined },
//     { label: "Facebook", href: process.env.NEXT_PUBLIC_FACEBOOK_URL || undefined },
//   ],
//   nav: [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About" },
//     { href: "/services", label: "Services" },
//   ],
// };

// export type Service = { id: string; title: string; icon: LucideIcon; summary: string; scope: string[] };

// export const services: Service[] = [
//   { id: "web", title: "Web Development & Design", icon: Code2,
//     summary: "Fast, responsive websites and web interfaces, designed to look credible and built to be maintained.",
//     scope: ["Business and portfolio websites", "UI and UX design", "Responsive front-end development", "Performance and accessibility basics"] },
//   { id: "seo", title: "SEO & Digital Marketing", icon: Search,
//     summary: "Practical search and marketing work that helps the right people find your business.",
//     scope: ["On-page and technical SEO", "Keyword and competitor research", "Search-friendly site structure", "Digital marketing support"] },
//   { id: "content", title: "Content & Blog Writing", icon: PenLine,
//     summary: "Clear, well-researched writing for websites, blogs and product pages.",
//     scope: ["Blog articles", "Website copy", "SEO-aware content", "Editing and proofreading"] },
//   { id: "research", title: "Product Research & Listing", icon: PackageSearch,
//     summary: "Research to choose what to sell, and accurate listings that are ready to publish.",
//     scope: ["Product and market research", "Listing titles, descriptions and attributes", "Competitor comparison", "Data entry and organisation"] },
//   { id: "ecommerce", title: "E-commerce & Inventory Management", icon: Store,
//     summary: "Day-to-day store and stock upkeep so your catalogue stays accurate.",
//     scope: ["Store catalogue management", "Inventory tracking and updates", "Order and listing upkeep", "Marketplace store support"] },
//   { id: "automation", title: "Automation & Virtual Assistance", icon: Bot,
//     summary: "Repeatable tasks handled by workflows and a reliable remote assistant.",
//     scope: ["Workflow automation", "Administrative support", "Research and data tasks", "Inbox and scheduling help"] },
// ];




import { Code2, Search, PenLine, PackageSearch, Store, Bot, type LucideIcon } from "lucide-react";

export const site = {
  name: "SR Digital Solutions",
  tagline: "One Team. Every Digital Solution.",
  description:
    "SR Digital Solutions is a digital agency for international clients and businesses in Bangladesh: web, SEO, content, product research, e-commerce operations and automation.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  location: "Bangladesh · Working with clients worldwide",
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || undefined,
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL || undefined,
  },
  social: [
    { label: "LinkedIn", href: process.env.NEXT_PUBLIC_LINKEDIN_URL || undefined },
    { label: "Facebook", href: process.env.NEXT_PUBLIC_FACEBOOK_URL || undefined },
  ],
  cta: { label: "Start a project", href: "/#contact" },
  nav: [
    { href: "/", label: "Home", desc: "Overview of what we do" },
    { href: "/about", label: "About", desc: "Who we are and how we work" },
    { href: "/services", label: "Services", desc: "All six services in detail" },
  ],
};

export type Service = { id: string; title: string; icon: LucideIcon; summary: string; scope: string[] };

export const services: Service[] = [
  { id: "web", title: "Web Development & Design", icon: Code2,
    summary: "Fast, responsive websites and web interfaces, designed to look credible and built to be maintained.",
    scope: ["Business and portfolio websites", "UI and UX design", "Responsive front-end development", "Performance and accessibility basics"] },
  { id: "seo", title: "SEO & Digital Marketing", icon: Search,
    summary: "Practical search and marketing work that helps the right people find your business.",
    scope: ["On-page and technical SEO", "Keyword and competitor research", "Search-friendly site structure", "Digital marketing support"] },
  { id: "content", title: "Content & Blog Writing", icon: PenLine,
    summary: "Clear, well-researched writing for websites, blogs and product pages.",
    scope: ["Blog articles", "Website copy", "SEO-aware content", "Editing and proofreading"] },
  { id: "research", title: "Product Research & Listing", icon: PackageSearch,
    summary: "Research to choose what to sell, and accurate listings that are ready to publish.",
    scope: ["Product and market research", "Listing titles, descriptions and attributes", "Competitor comparison", "Data entry and organisation"] },
  { id: "ecommerce", title: "E-commerce & Inventory Management", icon: Store,
    summary: "Day-to-day store and stock upkeep so your catalogue stays accurate.",
    scope: ["Store catalogue management", "Inventory tracking and updates", "Order and listing upkeep", "Marketplace store support"] },
  { id: "automation", title: "Automation & Virtual Assistance", icon: Bot,
    summary: "Repeatable tasks handled by workflows and a reliable remote assistant.",
    scope: ["Workflow automation", "Administrative support", "Research and data tasks", "Inbox and scheduling help"] },
];