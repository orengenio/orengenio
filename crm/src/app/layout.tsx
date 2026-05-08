import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { OFFICIAL_FAVICON_URL, OFFICIAL_LOGO_BLUE_URL } from "@/lib/brandAssets";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "OrenGen Backend", template: "%s · OrenGen Backend" },
  description:
    "Secure backend for OrenGen Worldwide and its clients. Voice, SMS, pipeline, and AI agents in one workspace.",
  robots: { index: false, follow: false },
  icons: {
    icon: OFFICIAL_FAVICON_URL,
    apple: OFFICIAL_FAVICON_URL,
  },
  openGraph: {
    type: "website",
    siteName: "OrenGen Backend",
    images: [{ url: OFFICIAL_LOGO_BLUE_URL, width: 1200, height: 630, alt: "OrenGen Backend" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [OFFICIAL_LOGO_BLUE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}
