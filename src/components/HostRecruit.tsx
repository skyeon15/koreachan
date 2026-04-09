import { useTranslations } from "next-intl";
import { CTAButton } from "./CTAButton";

export function HostRecruit() {
  const t = useTranslations("host");

  const items = [
    {
      icon: (
        <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t("item1Title"),
      desc: t("item1Desc"),
    },
    {
      icon: (
        <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
        </svg>
      ),
      title: t("item2Title"),
      desc: t("item2Desc"),
    },
    {
      icon: (
        <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      ),
      title: t("item3Title"),
      desc: t("item3Desc"),
    },
  ];

  return (
    <section id="host" className="py-16 md:py-24 bg-white scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          {t("title")}
        </h2>
        <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {items.map((item) => (
            <div key={item.title} className="text-center p-6 rounded-2xl bg-section-bg">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-base mb-2">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-section-bg rounded-2xl p-8 text-center">
          <h3 className="font-bold text-lg mb-2">{t("ctaTitle")}</h3>
          <p className="text-muted text-sm mb-6 max-w-md mx-auto">{t("ctaDesc")}</p>
          <CTAButton variant="consultTry" size="lg" />
        </div>
      </div>
    </section>
  );
}
