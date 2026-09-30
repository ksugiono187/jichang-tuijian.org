import { Metadata } from "next";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "机场推荐博客与科普文章",
  description: "机场评测、线路解析、IPLC与IEPL区别、Clash教程及机场选择指南。深度科普帮您防坑。",
};

const articles = [
  { title: "2026年机场怎么选？专线与中转全面解析", desc: "详细讲解机场推荐策略，从价格、流量到网络协议的全面评估指南。", date: "2026-09-01", category: "选购指南" },
  { title: "IPLC和IEPL专线有什么区别？", desc: "深度解析国际内网专线与企业专线的工作原理，以及为何它们能实现低延迟和免受干扰。", date: "2026-08-15", category: "技术科普" },
  { title: "机场价格怎么看？流量计算方式揭秘", desc: "为什么有些机场100GB只要5元，有些却要50元？带你了解倍率与实际流量的关系。", date: "2026-08-10", category: "防坑指南" },
  { title: "Clash/V2rayN 各平台使用教程汇总", desc: "Windows, macOS, iOS, Android 各大主流平台的客户端配置与订阅导入教程。", date: "2026-07-22", category: "使用教程" },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">博客与教程</h1>
      <p className="text-slate-400 mb-12 max-w-2xl text-lg">阅读深度评测与科普文章，快速提升鉴别能力，让您在挑选机场时不迷路。</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {articles.map((article, i) => (
          <article key={i} className="glass-card rounded-2xl p-8 hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
                {article.category}
              </span>
              <span className="text-xs text-slate-500">{article.date}</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3 hover:text-brand-400 transition-colors cursor-pointer">
              {article.title}
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              {article.desc}
            </p>
            <div className="flex items-center text-sm font-medium text-brand-400 cursor-pointer group">
              阅读全文 <BookOpen className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
