// src/components/article/ShareBar.tsx

import {
  Share2,
  Copy,
  MessageCircle,
} from "lucide-react";

import type { Article } from "@/types";

interface Props {
  article: Article;
}

export default function ShareBar({ article }: Props) {
  const url = window.location.href;

  const share = async () => {
    if (navigator.share) {
      await navigator.share({
        title: article.title,
        text: article.excerpt,
        url,
      });

      return;
    }

    navigator.clipboard.writeText(url);
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
  };

  const whatsapp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(
        article.title + "\n" + url
      )}`,
      "_blank"
    );
  };

  const linkedin = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      "_blank"
    );
  };

  return (
    <div className="grid grid-cols-2 gap-3">

      <button
        onClick={whatsapp}
        className="flex items-center justify-center gap-2 rounded-xl border border-zinc-200 p-3 transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
      >
        <MessageCircle size={18} />
        WhatsApp
      </button>

      <button
        onClick={linkedin}
        className="flex items-center justify-center gap-2 rounded-xl border border-zinc-200 p-3 transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
      >
      </button>

      <button
        onClick={copyLink}
        className="flex items-center justify-center gap-2 rounded-xl border border-zinc-200 p-3 transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
      >
        <Copy size={18} />
        Copiar
      </button>

      <button
        onClick={share}
        className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 p-3 font-medium text-white transition hover:bg-cyan-600"
      >
        <Share2 size={18} />
        Compartilhar
      </button>

    </div>
  );
}