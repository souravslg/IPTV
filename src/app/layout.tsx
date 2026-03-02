import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Best IPTV Service Provider in India 2026 | SRV Creation",
  description: "Looking for the best IPTV service provider in India? SRV Creation offers premium HD channels, fast streaming & affordable plans in 2026.",
  keywords: "IPTV service provider, Best IPTV service India, Best IPTV service provider, Best IPTV service 2026, Best IPTV provider",
  icons: {
    icon: '/icon.svg',
  },
  verification: {
    google: "A9He-y8FdLqsKoU2QWA5Rdcjn6C3r4WCcML6EZ5uW5Q",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
