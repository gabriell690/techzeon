// src/components/article/ReadingProgress.tsx

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ReadingProgressProps {
  target?: string;
  height?: number;
  colorClassName?: string;
  showPercentage?: boolean;
}

export default function ReadingProgress({
  target = "#article-content",
  height = 4,
  colorClassName = "from-cyan-400 via-blue-500 to-indigo-500",
  showPercentage = false,
}: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const article = document.querySelector(target);

      if (!article) return;

      const rect = article.getBoundingClientRect();

      const scrollTop = window.scrollY;
      const articleTop = scrollTop + rect.top;
      const articleHeight = article.scrollHeight;
      const viewport = window.innerHeight;

      const totalScrollable = articleHeight - viewport;

      if (totalScrollable <= 0) {
        setProgress(100);
        return;
      }

      const current = scrollTop - articleTop;

      const value = Math.min(
        Math.max((current / totalScrollable) * 100, 0),
        100
      );

      setProgress(value);
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [target]);

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[9999] w-full backdrop-blur-sm"
        style={{ height }}
      >
        <div className="h-full w-full bg-zinc-900/10 dark:bg-zinc-800/30">
          <div
            className={cn(
              "h-full rounded-r-full bg-gradient-to-r transition-[width] duration-150 ease-out",
              colorClassName
            )}
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      {showPercentage && (
        <div className="fixed bottom-6 right-6 z-[9999] rounded-full border border-zinc-200 bg-white/90 px-3 py-2 text-xs font-semibold shadow-xl backdrop-blur-md dark:border-zinc-700 dark:bg-zinc-900/90">
          {Math.round(progress)}%
        </div>
      )}
    </>
  );
}