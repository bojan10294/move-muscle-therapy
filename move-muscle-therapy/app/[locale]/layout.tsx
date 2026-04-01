import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import ThemeProvider from "@/components/ui/ThemeProvider";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isSr = locale === "sr";

  return {
    metadataBase: new URL("https://movemuscle.rs"),
    title: {
      default: "Move & Muscle Therapy | Čačak",
      template: "%s | Move & Muscle Therapy",
    },
    description: isSr
      ? "Stručne terapeutske usluge u Čačku — dry needling, hidžama, masaže, kiropraktika i elektroterapija. Luka Tomić, MSc."
      : "Expert therapeutic services in Čačak — dry needling, hijama, massage, chiropractic and electrotherapy. Luka Tomić, MSc.",
    openGraph: {
      images: ["/og-image.jpg"],
      locale: isSr ? "sr_RS" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: "/",
      languages: { sr: "/", en: "/en" },
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Move & Muscle Therapy",
  image: "https://movemuscle.rs/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Đorđa Tomašević 245",
    addressLocality: "Čačak",
    addressCountry: "RS",
  },
  telephone: "+381616898101",
  url: "https://movemuscle.rs",
  sameAs: ["https://www.instagram.com/movenmuscle"],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
