import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shakera Jannat Ema | HCI & Trustworthy AI Research",
  description: "Academic and research portfolio of Shakera Jannat Ema, early-career researcher in NLP, Speech Processing, HCI, and trustworthy AI.",
  keywords: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Speech Processing",
    "Bangla NLP",
    "HCI",
    "Research Assistant",
    "Lecturer",
    "Academic Portfolio",
    "Explainable AI"
  ],
  authors: [{ name: "Shakera Jannat Ema" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem("color-scheme");
                const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                const theme = stored || (systemDark ? "dark" : "light");
                if (theme === "dark") {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
