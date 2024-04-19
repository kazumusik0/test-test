import type { Metadata } from "next";
import { Montserrat as FontSans } from "next/font/google";

import "./globals.css";

import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

import Providers from "./providers";

import { locales } from "@/lib/i18n/i18n";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: ReactNode;
  params: { locale: string };
};
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<Props>) {
  unstable_setRequestLocale(locale);
  if (!locales.includes(locale)) {
    notFound();
  }
  const messages = useMessages();
  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={cn(
          "flex min-h-screen flex-col bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
