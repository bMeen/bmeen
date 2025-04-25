import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const jetBrainsMono = JetBrains_Mono({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "bMeen | Frontend Developer",
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
          {children}
        </div>
      </body>
    </html>
  );
}
