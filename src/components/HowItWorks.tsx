import { useTranslations } from "next-intl";
import { CTAButton } from "./CTAButton";

export function HowItWorks() {
  const t = useTranslations("howItWorks");

  const steps = [
    { step: "01", title: t("step1Title"), description: t("step1Desc") },
    { step: "02", title: t("step2Title"), description: t("step2Desc") },
    { step: "03", title: t("step3Title"), description: t("step3Desc") },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          {t("title")}
        </h2>
        <p className="text-muted text-center mb-12 max-w-xl mx-auto">
          {t("subtitle")}
        </p>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />
          <div className="space-y-12 md:space-y-16">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className={index % 2 === 1 ? "md:text-right" : ""}>
                    <span className="text-primary font-bold text-sm">
                      STEP {item.step}
                    </span>
                    <h3 className="font-bold text-xl mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white font-bold text-lg shadow-lg shadow-emerald-200">
                  {item.step}
                </div>
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <CTAButton variant="consultTry" size="lg" />
        </div>
      </div>
    </section>
  );
}
