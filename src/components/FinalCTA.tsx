import { useTranslations } from "next-intl";
import { CTAButton } from "./CTAButton";

export function FinalCTA() {
  const t = useTranslations();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-section-bg to-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {t("finalCta.title1")}
          <br />
          {t("finalCta.title2")}
        </h2>
        <p className="text-muted mb-8 max-w-lg mx-auto leading-relaxed">
          {t("finalCta.subtitle1")}
          <br />
          {t("finalCta.subtitle2")}
        </p>
        <CTAButton variant="check" size="lg" />
        <p className="text-muted text-xs mt-4">
          {t("common.freeConsult")}
        </p>
      </div>
    </section>
  );
}
