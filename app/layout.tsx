import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "OneLight Interactive | Immersive Digital Worlds",
  description: "Creating professional interactive experiences across VR, AR, PC, and mobile platforms. Step into the light of the future.",
  metadataBase: new URL("https://onelightinteractive.com"), // Update with your actual domain
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "OneLight Interactive",
    description: "Immersive interactive worlds across VR, AR, PC, and mobile.",
    url: "https://onelightinteractive.com",
    siteName: "OneLight Interactive",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OneLight Interactive",
    description: "Immersive interactive worlds across VR, AR, PC, and mobile.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}