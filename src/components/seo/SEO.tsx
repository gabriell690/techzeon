import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  keywords?: string[];
  author?: string;
  type?: "website" | "article";
  robots?: string;
}

const SITE_NAME = "TechZeon";
const SITE_URL = "https://techzeon.com";
const DEFAULT_IMAGE = `${SITE_URL}/images/og-default.jpg`;
const DEFAULT_AUTHOR = "Equipe TechZeon";

export default function SEO({
  title,
  description,
  canonical,
  image,
  keywords = [],
  author = DEFAULT_AUTHOR,
  type = "website",
  robots = "index, follow",
}: SEOProps) {
  const pageTitle = `${title} | ${SITE_NAME}`;

  const pageUrl = canonical
    ? `${SITE_URL}${canonical}`
    : SITE_URL;

  const pageImage = image ?? DEFAULT_IMAGE;

  return (
    <Helmet>

      {/* Básico */}
      <html lang="pt-BR" />

      <title>{pageTitle}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content={keywords.join(", ")}
      />

      <meta
        name="author"
        content={author}
      />

      <meta
        name="robots"
        content={robots}
      />

      <meta
        name="theme-color"
        content="#09090B"
      />

      <link
        rel="canonical"
        href={pageUrl}
      />

      {/* Open Graph */}

      <meta property="og:type" content={type} />

      <meta property="og:locale" content="pt_BR" />

      <meta
        property="og:site_name"
        content={SITE_NAME}
      />

      <meta
        property="og:title"
        content={pageTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={pageUrl}
      />

      <meta
        property="og:image"
        content={pageImage}
      />

      <meta
        property="og:image:alt"
        content={title}
      />

      {/* Twitter */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={pageTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={pageImage}
      />

    </Helmet>
  );
}