import type { Metadata } from "next";
import { Noto_Sans_JP, Public_Sans } from "next/font/google";
import "./globals.css";

// One type family for every script: Public Sans carries Latin (display is
// weight, not a second font), Noto Sans JP carries Japanese — so all six
// UI languages get the same typographic voice.
const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-jp",
});

export const metadata: Metadata = {
  title: "MINFO｜みんなのインフォ · Reliable life information, in your language",
  description:
    "Multilingual Information Navigator for Foreign-Origin Residents. Source-grounded daily-life guidance in 6 languages, starting from Shinjuku / Okubo, Tokyo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${notoSansJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
