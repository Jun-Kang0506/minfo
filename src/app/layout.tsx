import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Noto_Sans_JP, Public_Sans } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { LANGUAGES } from "@/lib/data/languages";
import type { LanguageCode } from "@/lib/types";
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
    "Multilingual Information Navigator for Foreign-Origin Residents. Source-grounded daily-life guidance in 8 languages, starting from Shinjuku / Okubo, Tokyo.",
};

function getInitialLanguage(value: string | undefined): LanguageCode {
  return LANGUAGES.some((language) => language.code === value)
    ? (value as LanguageCode)
    : "en";
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const initialLang = getInitialLanguage(cookieStore.get("minfo-lang")?.value);

  return (
    <html
      lang={initialLang}
      className={`${publicSans.variable} ${notoSansJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider initialLang={initialLang}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
