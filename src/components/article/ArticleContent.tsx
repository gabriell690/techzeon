import type { Article } from "@/types";

interface ArticleContentProps {
  article: Article;
}

export default function ArticleContent({
  article,
}: ArticleContentProps) {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <div
        dangerouslySetInnerHTML={{
          __html: article.content,
        }}
      />
    </article>
  );
}