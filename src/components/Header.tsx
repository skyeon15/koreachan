import { useTranslations } from "next-intl";
import Link from "next/link";
import { CTAButton } from "./CTAButton";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function Header() {
  const t = useTranslations();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          {t("common.brandName")}
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          <a href="#services" className="hover:text-foreground transition-colors">
            {t("nav.services")}
          </a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors">
            {t("nav.howItWorks")}
          </a>
          <a href="#scenes" className="hover:text-foreground transition-colors">
            {t("nav.scenes")}
          </a>
          <a href="#host" className="hover:text-foreground transition-colors">
            {t("nav.host")}
          </a>
          <a href="#faq" className="hover:text-foreground transition-colors">
            {t("nav.faq")}
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <CTAButton variant="consult" size="sm" />
        </div>
      </div>
    </header>
  );
}
