import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";

/** Body / UI copy — matches chooser landing (`src/app/page.module.css`). */
export const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

/** Display / headings / labels / buttons — matches chooser landing. */
export const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export const siteFontVariablesClassName = `${spaceGrotesk.variable} ${plusJakartaSans.variable}`;
