import { useTranslations } from "next-intl";

export function Services() {
  const t = useTranslations("services");

  const services = [
    {
      tag: t("homestayTag"),
      title: t("homestayTitle"),
      description: t("homestayDesc"),
      features: [t("homestayF1"), t("homestayF2"), t("homestayF3")],
      emoji: "🏠",
    },
    {
      tag: t("localTag"),
      title: t("localTitle"),
      description: t("localDesc"),
      features: [t("localF1"), t("localF2"), t("localF3")],
      emoji: "🚶",
    },
    {
      tag: t("companionTag"),
      title: t("companionTitle"),
      description: t("companionDesc"),
      features: [t("companionF1"), t("companionF2"), t("companionF3")],
      emoji: "🤝",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-section-bg scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          {t("title")}
        </h2>
        <p className="text-muted text-center mb-12 max-w-xl mx-auto">
          {t("subtitle")}
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.tag}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-4xl mb-4 block">{service.emoji}</span>
              <span className="inline-block text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full mb-3">
                {service.tag}
              </span>
              <h3 className="font-bold text-lg mb-3">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
