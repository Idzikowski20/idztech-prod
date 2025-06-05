import { Helmet } from "react-helmet";

const DOMAIN = "https://idztech.pl";

export default function OgUrlMeta() {
  const url = typeof window !== "undefined" ? window.location.href : DOMAIN;
  return (
    <Helmet>
      <meta property="og:url" content={url} />
    </Helmet>
  );
} 