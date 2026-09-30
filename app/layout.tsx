import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "2026机场推荐 - 高性价比与稳定专线机场对比、评测与选择指南",
  description: "专门提供最新、最全的机场推荐、机场对比、价格与流量分析。涵盖平价中转、IEPL/IPLC专线、高性价比机场及优惠券。帮助您挑选哪个机场比较好，包含详细的使用教程与FAQ。",
  keywords: "机场推荐,机场推荐2026,机场推荐哪个比较好,机场价格,机场优惠券,机场对比,机场评测,机场流量,专线机场",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col relative text-slate-300 selection:bg-brand-500/30`}>
        <Background />
        <Header />
        <main className="flex-grow w-full relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
