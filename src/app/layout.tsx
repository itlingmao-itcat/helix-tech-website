import { Fraunces, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./home.css";
import type { Metadata } from "next";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "HELIX TECH Ltd",
    template: "%s | HELIX TECH",
  },
  description:
    "HELIX TECH Ltd is a placeholder software company. Company details will be updated.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
