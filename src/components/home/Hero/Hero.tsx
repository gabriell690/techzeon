import HeroFeatured from "./HeroFeatured";
import HeroSidebar from "./HeroSidebar";
import type { Article } from "@/types";

interface HeroProps {
  featured?: Article | null;
  latest?: Article[];
}

export default function Hero({
  featured,
  latest = [],
}: HeroProps) {
  if (!featured) return null;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,2fr)_380px] xl:grid-cols-[minmax(0,2fr)_420px]">
        <HeroFeatured article={featured} />

        <HeroSidebar articles={latest} />
      </div>
    </section>
  );
}