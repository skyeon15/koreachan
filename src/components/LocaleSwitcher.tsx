"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = locale === "ja" ? "ko" : "ja";
  const label = locale === "ja" ? "한국어" : "日本語";

  const handleSwitch = () => {
    const segments = pathname.split("/");
    segments[1] = switchTo;
    router.push(segments.join("/"));
  };

  return (
    <button
      onClick={handleSwitch}
      className="text-sm text-muted hover:text-foreground transition-colors border border-gray-200 rounded-full px-3 py-1"
    >
      {label}
    </button>
  );
}
