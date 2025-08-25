export function BrandSchema() {
  const brandSchema = {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    name: 'ThriVest Africa',
    alternateName: ['Thrivest Africa', 'ThriVest'],
    description: 'ThriVest Africa is a leading investment firm empowering African businesses',
    url: 'https://thrivestafrica.com',
    logo: 'https://thrivestafrica.com/images/logo.png',
    slogan: 'Empowering African Businesses Through Strategic Investment'
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'ThriVest Africa - Official Website',
    url: 'https://thrivestafrica.com',
    description: 'Official website of ThriVest Africa - Leading investment firm empowering African businesses',
    publisher: {
      '@type': 'Organization',
      name: 'ThriVest Africa',
      legalName: 'ThriVest Africa Limited'
    },
    mainEntity: {
      '@type': 'Organization',
      name: 'ThriVest Africa'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  );
}