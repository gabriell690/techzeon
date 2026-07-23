import "../../styles/articles.css";

import type { Article } from "@/types";

interface ArticleContentProps {
  article: Article;
}

export default function ArticleContent({
  article,
}: ArticleContentProps) {
  return (
    <article className="w-full">

      <div
        className="
          article-content

          w-full

          max-w-230

          mx-auto

          px-6

          md:px-10

          lg:px-0
        "
        dangerouslySetInnerHTML={{
          __html: article.content,
        }}
      />

    </article>
  );
}