import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/lib/i18n/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({});

export default nextConfig;
