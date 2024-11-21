import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
}

const SEO = ({ 
  title, 
  description, 
  path, 
  image = 'https://cdn.prod.website-files.com/62da7459154e24c9c208c7fa/62da788addddd20328fd6974_logo.svg',
  type = 'website'
}: SEOProps) => {
  const siteUrl = 'https://auto.1swis.com';
  const fullUrl = `${siteUrl}${path}`;
  const fullTitle = `${title} | 1SwiS Auto`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="1SwiS Auto" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Additional Meta */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="1SwiS" />
      <meta name="geo.region" content="FR" />
      <meta name="geo.placename" content="France" />
      <meta name="language" content="French" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === 'article' ? 'Article' : 'WebSite',
          "name": fullTitle,
          "description": description,
          "url": fullUrl,
          "image": image,
          "publisher": {
            "@type": "Organization",
            "name": "1SwiS Auto",
            "logo": {
              "@type": "ImageObject",
              "url": "https://cdn.prod.website-files.com/62da7459154e24c9c208c7fa/62da788addddd20328fd6974_logo.svg"
            }
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "FR"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;