import { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们 - 机场推荐指南",
  description: "了解我们的评测标准与初心。",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-4xl font-bold text-white mb-6">关于我们</h1>
      <div className="prose prose-invert mx-auto text-slate-400">
        <p>我们是一群热衷于网络技术的极客，致力于为大家提供最真实、最客观的“机场推荐”与评测服务。</p>
        <p>我们深知在海量的信息中挑选出一个靠谱的服务商有多么困难。因此，我们建立这个网站，定期更新和维护 29 款行业内知名品牌的详细参数，帮助大家少走弯路。</p>
        <p>本站所列数据均经过我们的人工核对，但因网络环境多变，具体表现以您的实际测试为准。</p>
      </div>
    </div>
  );
}
