import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { JsonLd } from "@/components/JsonLd";
import { GTMScript, GTMNoScript } from "@/components/GTM";
import "../globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "コリアチャン | 韓国ローカル体験・ホームステイ・現地人同行サービス",
  description:
    "観光地じゃなくて、街へ。韓国人の「ふつうの一日」を一緒に過ごしませんか。ホームステイ・ローカル体験・現地人同行で、韓国のリアルな日常を体験できるサービスです。",
  keywords: [
    "韓国 ホームステイ",
    "韓国 ローカル体験",
    "韓国 現地人 同行",
    "韓国旅行 ローカル",
    "韓国 友達 作る",
    "韓国 一人旅",
    "코리아챤",
    "KoreaChan",
    "한국 홈스테이",
    "한국 로컬 체험",
    "韓国 生活体験",
    "韓国 文化体験",
  ],
  openGraph: {
    title: "コリアチャン | 韓国のリアルな日常を体験しよう",
    description:
      "観光地じゃなくて、街へ。韓国人の「ふつうの一日」を一緒に過ごしませんか。",
    type: "website",
    locale: "ja_JP",
    siteName: "コリアチャン",
  },
  twitter: {
    card: "summary_large_image",
    title: "コリアチャン | 韓国ローカル体験サービス",
    description:
      "観光地じゃなくて、街へ。韓国人の「ふつうの一日」を一緒に過ごしませんか。",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    languages: {
      ja: "/ja",
      ko: "/ko",
      en: "/en",
    },
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${notoSansJP.variable} h-full antialiased`}>
      <head>
        <GTMScript />
        <link rel="canonical" href={`https://koreachan.com/${locale}`} />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <GTMNoScript />
        <JsonLd />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
