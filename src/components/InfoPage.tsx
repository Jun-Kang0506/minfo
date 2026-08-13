"use client";

import { LanguageProvider } from "./LanguageProvider";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhyMinfo } from "./WhyMinfo";
import { HackathonStory } from "./HackathonStory";
import { DataSourcesSection } from "./DataSourcesSection";
import { ScrollToTopButton } from "./ScrollToTopButton";

export function InfoPage({ page }: { page: "about" | "sources" | "data" }) {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {page === "about" && <><WhyMinfo /><HackathonStory /></>}
          {page === "sources" && <DataSourcesSection variant="sources" />}
          {page === "data" && <DataSourcesSection variant="data" />}
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </LanguageProvider>
  );
}
