import { useTranslations } from "next-intl";

export function Testimonials() {
  const t = useTranslations("testimonials");

  const items = [
    { name: t("r1Name"), text: t("r1Text"), tag: t("r1Tag") },
    { name: t("r2Name"), text: t("r2Text"), tag: t("r2Tag") },
    { name: t("r3Name"), text: t("r3Text"), tag: t("r3Tag") },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-section-bg scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          {t("title")}
        </h2>
        <p className="text-muted text-center mb-12 max-w-xl mx-auto">
          {t("subtitle")}
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <blockquote
              key={item.name}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <span className="inline-block text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full mb-4">
                {item.tag}
              </span>
              <p className="text-sm leading-relaxed text-muted mb-6">
                「{item.text}」
              </p>
              <footer className="font-semibold text-sm">{item.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
