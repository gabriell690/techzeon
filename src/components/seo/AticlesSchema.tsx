import { Helmet } from "react-helmet-async";
import type { Article } from "@/types";

interface ArticleSchemaProps {
  article: Article;
}

const SITE_URL = "https://techzeon.com";

export default function ArticleSchema({
  article,
}: ArticleSchemaProps) {
  const author =
    typeof article.author === "string"
      ? article.author
      : article.author?.name ?? "Equipe TechZeon";

  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",

    headline: article.title,

    description: article.excerpt,

    image: [
      article.cover_image ??
        `${SITE_URL}/images/og-default.jpg`,
    ],

    datePublished: article.published_at,

    dateModified:
      article.updated_at ??
      article.published_at,

    author: {
      "@type": "Person",
      name: author,
    },

    publisher: {
      "@type": "Organization",
      name: "TechZeon",

      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/artigo/${article.slug}`,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}