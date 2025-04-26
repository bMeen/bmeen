import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const jetBrainsMono = JetBrains_Mono({
  weight: ["200", "400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | bMeen",
    default: "bMeen | Frontend Developer",
  },
  description: "Bello Al-Ameen: FrontEnd Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.className} antialiased bg-background text-text`}
      >
        <div className="max-w-screen-2xl mx-auto px-4">
          <Header />
          <main className="border my-14 min-h-[calc(100vh-73px)] grid place-items-center">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
