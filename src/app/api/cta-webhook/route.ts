import { NextRequest, NextResponse } from "next/server";

const DISCORD_WEBHOOK_URL =
  "https://discord.com/api/webhooks/1491588324186652755/dgtvTqbyN4_gXEVoG0HNNu-3b-TeJlFajjMT-UMDIg0TlcWA-jijz2WlQX5QzIHTyGlq";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, locale, referrer, userAgent } = body;

    const embed = {
      title: "CTA Click",
      color: 0x1d9e75,
      fields: [
        { name: "Action", value: action || "LINE CTA", inline: true },
        { name: "Locale", value: locale || "unknown", inline: true },
        { name: "Referrer", value: referrer || "direct", inline: false },
        { name: "User-Agent", value: (userAgent || "unknown").slice(0, 200), inline: false },
      ],
      timestamp: new Date().toISOString(),
    };

    await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [embed],
      }),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
