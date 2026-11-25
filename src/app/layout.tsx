import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import type { Metadata } from "next";
import { asset } from "@/lib/asset";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});
const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "HELIX TECH Ltd",
    template: "%s | HELIX TECH",
  },
  description:
    "HELIX TECH Ltd — Colorado AI technology company building intelligent products and digital infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cssVars = `
    :root {
      --background-image-start: url('${asset("/images/work/bg-start.svg")}');
      --background-image-perk: url('${asset("/images/perks/perk-bg.png")}');
    }
  `;

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${body.variable} ${display.variable} ${body.className} bg-background text-white`}
      >
        <style dangerouslySetInnerHTML={{ __html: cssVars }} />
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          forcedTheme="dark"
          defaultTheme="dark"
        >
          <Aoscompo>
            <Header />
            {children}
            <Footer />
          </Aoscompo>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
