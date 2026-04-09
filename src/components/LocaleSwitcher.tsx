"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const locales = [
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "en", label: "EN" },
] as const;

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleSwitch = (target: string) => {
    const segments = pathname.split("/");
    segments[1] = target;
    router.push(segments.join("/"));
  };

  return (
    <div className="flex items-center gap-1">
      {locales
        .filter((l) => l.code !== locale)
        .map((l) => (
          <button
            key={l.code}
            onClick={() => handleSwitch(l.code)}
            className="text-sm text-muted hover:text-foreground transition-colors border border-gray-200 rounded-full px-3 py-1"
          >
            {l.label}
          </button>
        ))}
    </div>
  );
}
