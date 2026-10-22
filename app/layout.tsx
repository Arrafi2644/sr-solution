import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { type: "website", siteName: site.name, title: site.name, description: site.description, images: [{ url: "/og.jpg", width: 1536, height: 1024, alt: site.name }] },
  twitter: { card: "summary_large_image", title: site.name, description: site.description, images: ["/og.jpg"] },
  icons: { icon: "/mark.png" },
};
export const viewport: Viewport = { themeColor: "#050d24" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-cyan focus:px-4 focus:py-2 focus:text-navy">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
