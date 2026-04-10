import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OrbChatWrapper } from "@/components/OrbChatWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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
      url: "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/JkgbWmauRB7suRUl6bVem2msNPATeMS2h4iWgdcR.png",
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
    images: ["https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/JkgbWmauRB7suRUl6bVem2msNPATeMS2h4iWgdcR.png"],
  },
  icons: {
    icon: "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/GLBjK33zIX9uoJqAHz4c8kGhtn0mXn1bNtVzpUNU.png",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${roboto.variable} antialiased selection:bg-burnt-orange/30 selection:text-burnt-orange`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "OrenGen Worldwide",
              url: "https://orengen.io",
              logo: "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/JkgbWmauRB7suRUl6bVem2msNPATeMS2h4iWgdcR.png",
              description: "Deploy autonomous AI agents that handle voice, chat, SMS, and email in any language, 24/7.",
              sameAs: [
                "https://www.linkedin.com/company/orengenio",
                "https://x.com/orengenio",
                "https://www.instagram.com/orengenio",
                "https://www.facebook.com/orengenio",
                "https://github.com/orengenio",
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
          <Navbar />
          {children}
          <Footer />
          <OrbChatWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}
