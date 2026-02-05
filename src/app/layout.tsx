import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SrV Creation IPTV - Premium Live TV & On-Demand Streaming",
  description: "Experience crystal-clear IPTV streaming with thousands of channels, on-demand content, and seamless playback across all your devices. 10,000+ live channels, 50,000+ VOD content, 99.9% uptime.",
  keywords: "IPTV, streaming, live TV, on-demand, 4K streaming, HD channels, VOD, television",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#0a0e27" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
