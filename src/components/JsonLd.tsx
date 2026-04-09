export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "コリアチャン",
    alternateName: "KoreaChan",
    description:
      "日本人旅行者向けの韓国ローカル体験・ホームステイ・現地人同行サービス",
    url: "https://koreachan.com",
    areaServed: {
      "@type": "Country",
      name: "South Korea",
    },
    audience: {
      "@type": "PeopleAudience",
      audienceType: "Japanese tourists",
      suggestedMinAge: 20,
      suggestedMaxAge: 35,
    },
    availableLanguage: [
      { "@type": "Language", name: "Japanese" },
      { "@type": "Language", name: "Korean" },
    ],
    serviceType: [
      "Homestay",
      "Local Experience",
      "Local Guide",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
