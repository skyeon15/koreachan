import { useTranslations } from "next-intl";
import { CTAButton } from "./CTAButton";

export function Hero() {
  const t = useTranslations();

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-b from-section-bg to-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-primary font-semibold text-sm tracking-wide mb-4">
          {t("hero.tag")}
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight md:leading-tight mb-6">
          {t("hero.title1")}
          <br />
          <span className="text-primary">
            {t("hero.title2")}
            <br className="hidden md:block" />
            {t("hero.title3")}
          </span>
        </h1>
        <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("hero.subtitle1")}
          <br className="hidden md:block" />
          {t("hero.subtitle2")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton variant="check" size="lg" />
        </div>
        <p className="text-muted text-sm mt-4">
          {t("common.jpSupport")}
        </p>
      </div>
    </section>
  );
}
