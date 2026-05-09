import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OrbChatWrapper } from "@/components/OrbChatWrapper";
import { Analytics } from "@/components/Analytics";
import { ContactBar } from "@/components/ContactBar";
import { ChromeGate } from "@/components/ChromeGate";
import { ConsentBanner } from "@/components/ConsentBanner";
import { OrenSignalSticky } from "@/components/OrenSignalSticky";
import { TechBar } from "@/components/TechBar";
import { WebVitalsReporter } from "@/components/WebVitalsReporter";
import { OFFICIAL_FAVICON_URL, OFFICIAL_LOGO_BLUE_URL } from "@/lib/brandAssets";
import { siteFontVariablesClassName } from "@/lib/siteFonts";

export const metadata: Metadata = {
  metadataBase: new URL('https://orengen.io'),
  title: {
    default: "OrenGen | The Evolution of Intelligence",
    template: "%s | OrenGen",
  },
  description: "Deploy autonomous AI agents that handle voice, chat, SMS, and email in any language, 24/7. Unified CRM, automation, and a dedicated team — no DIY, no developers needed. Starting at $197/mo.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://orengen.io",
    siteName: "OrenGen Worldwide",
    title: "OrenGen | The Evolution of Intelligence",
    description: "Deploy autonomous AI agents that handle voice, chat, SMS, and email in any language, 24/7. Unified CRM, automation, and a dedicated team.",
    images: [{
      url: OFFICIAL_LOGO_BLUE_URL,
      width: 1200,
      height: 630,
      alt: "OrenGen Worldwide — AI-Powered Business Automation",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OrenGen | The Evolution of Intelligence",
    description: "Deploy autonomous AI agents in any language, 24/7. Unified CRM + automation.",
    creator: "@orengenio",
    images: [OFFICIAL_LOGO_BLUE_URL],
  },
  icons: {
    icon: OFFICIAL_FAVICON_URL,
    apple: OFFICIAL_FAVICON_URL,
    shortcut: OFFICIAL_FAVICON_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={siteFontVariablesClassName}>
      <body className="antialiased selection:bg-burnt-orange/30 selection:text-burnt-orange">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-3 focus:py-2 focus:bg-burnt-orange focus:text-white focus:rounded"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "OrenGen Worldwide",
              url: "https://orengen.io",
              logo: OFFICIAL_LOGO_BLUE_URL,
              description: "Deploy autonomous AI agents that handle voice, chat, SMS, and email in any language, 24/7.",
              sameAs: [
                "https://www.linkedin.com/company/orengenio",
                "https://x.com/orengenio",
                "https://www.instagram.com/orengenio",
                "https://www.facebook.com/orengenio",
                "https://github.com/orengenio/orengenio",
                "https://www.youtube.com/@orengenio",
                "https://tiktok.com/@orengenio"
              ],
            }),
          }}
        />
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ChromeGate>
            <Navbar />
            <ContactBar />
          </ChromeGate>
          <div id="main">{children}</div>
          {/*
            TechBar mounts on every route via ChromeGate hideOn="footer-only".
            On '/', the page renders its own <TechBar /> just above the legal
            footer (see src/app/page.tsx) and ChromeGate suppresses this one.
          */}
          <ChromeGate>
            <TechBar />
            <Footer />
            <OrbChatWrapper />
          </ChromeGate>
          <OrenSignalSticky />
          <ConsentBanner />
        </ThemeProvider>
        <Analytics />
        <WebVitalsReporter />
      </body>
    </html>
  );
}
