import type { Metadata } from "next";
import "./globals.css";
import { OFFICIAL_FAVICON_URL, OFFICIAL_LOGO_BLUE_URL } from "@/lib/brandAssets";
import { siteFontVariablesClassName } from "@/lib/siteFonts";

export const metadata: Metadata = {
  title: { default: "OrenGen Workspace", template: "%s · OrenGen Workspace" },
  description:
    "OrenGen Workspace — voice, SMS, pipeline, and AI agents in one place for every client.",
  robots: { index: false, follow: false },
  icons: {
    icon: OFFICIAL_FAVICON_URL,
    apple: OFFICIAL_FAVICON_URL,
  },
  openGraph: {
    type: "website",
    siteName: "OrenGen Workspace",
    images: [{ url: OFFICIAL_LOGO_BLUE_URL, width: 1200, height: 630, alt: "OrenGen Workspace" }],
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
    <html lang="en" className={siteFontVariablesClassName}>
      <body>{children}</body>
    </html>
  );
}
