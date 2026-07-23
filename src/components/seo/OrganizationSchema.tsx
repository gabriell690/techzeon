import { Helmet } from "react-helmet-async";

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "Organization",

    name: "TechZeon",

    url: "https://techzeon.com",

    logo: "https://techzeon.com/logo.png",

    sameAs: [
      "https://instagram.com/techzeon",
      "https://facebook.com/techzeon",
      "https://x.com/techzeon",
      "https://linkedin.com/company/techzeon",
      "https://youtube.com/@techzeon",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}