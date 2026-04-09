import { useTranslations } from "next-intl";

export function Testimonials() {
  const t = useTranslations("scenes");

  const items = [
    { emoji: "🏪", title: t("s1Title"), desc: t("s1Desc"), tag: t("s1Tag") },
    { emoji: "☕", title: t("s2Title"), desc: t("s2Desc"), tag: t("s2Tag") },
    { emoji: "🌙", title: t("s3Title"), desc: t("s3Desc"), tag: t("s3Tag") },
    { emoji: "🎤", title: t("s4Title"), desc: t("s4Desc"), tag: t("s4Tag") },
    { emoji: "🚶", title: t("s5Title"), desc: t("s5Desc"), tag: t("s5Tag") },
    { emoji: "🍳", title: t("s6Title"), desc: t("s6Desc"), tag: t("s6Tag") },
  ];

  return (
    <section id="scenes" className="py-16 md:py-24 bg-section-bg scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          {t("title")}
        </h2>
        <p className="text-muted text-center mb-12 max-w-xl mx-auto">
          {t("subtitle")}
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-3xl mb-3 block">{item.emoji}</span>
              <span className="inline-block text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full mb-3">
                {item.tag}
              </span>
              <h3 className="font-bold text-base mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
