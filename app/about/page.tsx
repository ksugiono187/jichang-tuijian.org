import { Metadata } from "next";
import { Users, Target, Zap, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "关于我们 | 2026机场推荐指南",
  description: "了解机场推荐指南编辑部的评测标准与初心。我们由一群资深网络极客组成，致力于为您筛选全网最稳定、最高性价比的翻墙方案。",
  alternates: {
    canonical: "/about/",
  }
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24 animate-fade-in-up">
      <div className="glass-panel p-8 md:p-16 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
        
        {/* 背景光效 */}
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-96 h-96 bg-brand-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <header className="mb-12 border-b border-white/10 pb-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-500/20 mb-6 border border-brand-500/30 mx-auto">
            <Users className="w-8 h-8 text-brand-400" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">关于我们</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">我们是一群热衷于网络技术的极客，致力于消除信息差，为您带来全网最真实、最硬核的“机场推荐”与深度评测数据。</p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-strong:text-brand-300 leading-loose relative z-10">
          
          <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center">
            <Target className="w-6 h-6 mr-3 text-brand-500" />
            我们的初心与愿景
          </h2>
          <p>
            在这个信息爆炸的时代，寻找一个能够长期稳定跨国访问的网络服务商变得前所未有的困难。面对市场上层出不穷的夸大宣传、虚假节点和随时可能“跑路”的恶劣商家，普通用户往往不知所措。
          </p>
          <p>
            我们建立<strong>2026机场推荐指南</strong>的核心愿景非常纯粹：<strong>打破黑盒，让数据说话</strong>。我们希望通过严谨的数据采集和横向比对，帮助每一个无论是追求极速的硬核玩家，还是追求高性价比的新手，都能在这里精准匹配到最适合自己的方案，少走弯路，拒绝踩坑。
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-3 text-brand-500" />
            我们的评测标准
          </h2>
          <p>
            本站收录的 29 家顶级服务商名单并非随意抓取，而是经过我们编辑部数月以来持续不断的真实采购与环境测试。我们坚持以下硬核标准：
          </p>
          <ul>
            <li><strong>晚高峰实测：</strong> 不看清晨的峰值，只看晚上 8 点至 11 点骨干网拥堵时的真实延迟与丢包率。</li>
            <li><strong>线路溯源：</strong> 深入解析其底层是采用普通的 BGP 中转，还是极其昂贵的 IEPL / IPLC 物理内网专线。</li>
            <li><strong>价格透明度：</strong> 杜绝复杂的隐形套路，我们将月付成本、阶梯流量以及倍率规则完全公开化，并搜罗全网最新优惠券。</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4 flex items-center">
            <ShieldCheck className="w-6 h-6 mr-3 text-brand-500" />
            独立性声明
          </h2>
          <p>
            虽然为了维持网站高昂的带宽成本与庞大的测试账号采购开销，我们可能会在部分购买链接中植入联盟推介代码（Affiliate Links）。但我们在此郑重承诺：<strong>商业合作绝不会凌驾于客观事实之上</strong>。对于那些频繁断线、工单不回或存在跑路风险的劣质商家，我们会毫不留情地将其从推荐库中剔除。
          </p>

        </div>
      </div>
    </div>
  );
}
