import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adonrenji.dev"),
  title: "Adon Renji | Software Developer & Full-Stack Engineer",
  description: "Portfolio of Adon Renji, a passionate Software Developer and MCA Graduate specializing in modern web development, scalable backends, and sleek user interfaces.",
  keywords: ["Adon Renji", "Software Developer", "Full-Stack Engineer", "React", "Next.js", "Web Development", "Portfolio"],
  authors: [{ name: "Adon Renji", url: "https://adonrenji.dev" }],
  creator: "Adon Renji",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adonrenji.dev",
    title: "Adon Renji | Software Developer",
    description: "Portfolio of Adon Renji, a passionate Software Developer and MCA Graduate.",
    siteName: "Adon Renji Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adon Renji - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adon Renji | Software Developer",
    description: "Portfolio of Adon Renji, a passionate Software Developer and MCA Graduate.",
    images: ["/og-image.png"],
    creator: "@adonrenji",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-[#030014] text-slate-900 dark:text-zinc-100 transition-colors duration-300">
        <Providers>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#0a0a0a',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.1)',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
