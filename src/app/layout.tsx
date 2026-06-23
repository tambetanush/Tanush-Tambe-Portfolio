import type { Metadata } from "next";
import { Lora, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanush Sudheer Tambe | ML & Generative AI Engineer Portfolio",
  description: "Developer portfolio of Tanush Sudheer Tambe. Dual-degree AI/ML student at IIT Madras and Mumbai University. Discover production-grade machine learning pipelines, LLM fine-tuning, computer vision, and interactive reinforcement learning systems.",
  keywords: ["Tanush Tambe", "Machine Learning", "Generative AI", "Deep Learning", "Reinforcement Learning", "Data Science", "IIT Madras", "AWS ML Engineer", "Portfolio"],
  authors: [{ name: "Tanush Sudheer Tambe" }],
  openGraph: {
    title: "Tanush Sudheer Tambe | ML & Generative AI Engineer",
    description: "Explore the advanced Machine Learning, GenAI, and Reinforcement Learning portfolio of Tanush Sudheer Tambe.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <main style={{ paddingTop: "var(--nav-height)" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
