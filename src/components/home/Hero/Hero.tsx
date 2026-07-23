import HeroFeatured from "./HeroFeatured";
import HeroSidebar from "./HeroSidebar";
import type { HeroArticle } from "./Hero.types";

interface HeroProps {
  featured?: HeroArticle | null;
  latest?: HeroArticle[];
}

export default function Hero({
  featured,
  latest = [],
}: HeroProps) {
  if (!featured) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-8 lg:grid-cols-[2fr_420px]">
        <HeroFeatured article={featured} />

        <HeroSidebar articles={latest} />
      </div>
    </section>
  );
}