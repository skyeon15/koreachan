import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-white font-bold text-lg mb-1">
              {t("common.brandName")}
            </p>
            <p className="text-sm">{t("footer.tagline")}</p>
          </div>
          <nav className="flex gap-6 text-sm">
            <a href="#services" className="hover:text-white transition-colors">
              {t("nav.services")}
            </a>
            <a href="#how-it-works" className="hover:text-white transition-colors">
              {t("nav.howItWorks")}
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              {t("nav.faq")}
            </a>
          </nav>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-xs">
          <p>
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
