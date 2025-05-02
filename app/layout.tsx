import type { Metadata } from "next";
import { JetBrains_Mono, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Toaster } from "react-hot-toast";

const jetBrainsMono = JetBrains_Mono({
  weight: ["200", "400"],
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  weight: ["500", "700"],
  variable: "--font-sans",
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
        className={`${jetBrainsMono.variable} ${workSans.variable} antialiased bg-background text-text`}
      >
        <div className="max-w-screen-2xl mx-auto px-4">
          <Header />
          <main className="my-10 lg:min-h-[calc(100vh-73px)] lg:grid lg:place-items-center">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}

/* 
lg:min-h-[calc(100vh-73px)] lg:grid lg:place-items-center"
*/
