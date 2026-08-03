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
  title: "Shakera Jannat Ema | AI/ML Research Portfolio",
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
    "Explainable AI",
    "Federated Learning",
    "IoT Security"
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
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const colorScheme = localStorage.getItem("color-scheme");
                if (colorScheme) {
                  document.querySelector('meta[name="color-scheme"]').content = colorScheme;
                  if (colorScheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
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
