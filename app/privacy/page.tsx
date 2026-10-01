import { Metadata } from "next";
import { ShieldCheck, Mail, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "隐私政策 | 2026机场推荐指南",
  description: "了解我们的隐私政策，我们在提供最新机场推荐、机场对比和价格分析等信息时如何保护您的数据安全与隐私。",
  alternates: {
    canonical: "/privacy/",
  }
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24 animate-fade-in-up">
      <div className="glass-panel p-8 md:p-16 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
        
        {/* 背景光效 */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <header className="mb-12 border-b border-white/10 pb-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-500/20 mb-6 border border-brand-500/30 mx-auto">
            <ShieldCheck className="w-8 h-8 text-brand-400" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">隐私政策</h1>
          <p className="text-slate-400">最后更新日期：2026年10月01日</p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-brand-400 prose-strong:text-brand-300 leading-loose relative z-10">
          <p>
            欢迎访问<strong>机场推荐指南</strong>（以下简称“本站”）。我们非常重视每一位访客的隐私权。本《隐私政策》旨在向您透明地说明，当您访问我们的网站、阅读文章或点击链接时，我们是如何收集、使用以及保护您的相关信息的。
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 flex items-center">
            <Lock className="w-5 h-5 mr-2 text-brand-500" />
            1. 我们收集的信息类型
          </h2>
          <p>
            作为一个提供评测和资讯的静态信息聚合站点，我们<strong>绝不会</strong>主动要求您提供任何高度敏感的个人信息（如真实姓名、身份证号码或信用卡数据）。我们收集的信息仅限于以下用于优化浏览体验和统计分析的常规数据：
          </p>
          <ul>
            <li><strong>访问日志信息：</strong> 包括您的 IP 地址、浏览器类型、操作系统版本、访问时间及被请求的页面路径。这是绝大多数现代网站运行的基础日志记录。</li>
            <li><strong>使用数据：</strong> 我们可能会使用第三方统计工具（如 Google Analytics）分析网站的流量来源和停留时间，以帮助我们改善内容排版（如了解哪篇《机场选择指南》最受欢迎）。</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">2. Cookies 和追踪技术</h2>
          <p>
            本站可能会使用 Cookies 来提升您的浏览体验。Cookies 是存储在您设备上的微小文本文件，用于记住您的偏好（例如深色模式设置）以及区分独立访客。
          </p>
          <p>
            您完全可以通过浏览器的设置，选择随时拒绝或删除这些 Cookies。但这可能导致部分基于偏好的网站功能无法正常运作。
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">3. 第三方链接与服务</h2>
          <p>
            为了向您提供详细的机场推荐与价格对比，本站的内容中包含了大量指向第三方网络服务商（即“机场”官网）的外链。
          </p>
          <p>
            当您点击这些链接并离开本站后，您将受限于第三方网站独立的隐私政策和用户条款。<strong>我们强烈建议您</strong>在这些外部网站注册或进行任何支付操作前，仔细阅读其官网的隐私保护协议。我们对任何第三方网站的内容、安全漏洞或隐私惯例不承担任何责任。
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">4. 信息共享与安全保障</h2>
          <p>
            我们承诺，绝不向任何未经授权的第三方出售、交易或转移您的非公开个人信息。我们将尽合理的商业努力采取技术手段（如全站启用 HTTPS 加密协议），以保护您与本站交互时产生的基础数据不被非法窃取。
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">5. 隐私政策的更新</h2>
          <p>
            随着互联网法规的完善以及本站服务内容的扩展，我们保留在没有任何预先通知的情况下，随时更新或修改本《隐私政策》的权利。任何更新后的政策都将立即在此页面生效，请您定期查阅以确保知悉最新条款。
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 flex items-center">
            <Mail className="w-5 h-5 mr-2 text-brand-500" />
            6. 联系我们
          </h2>
          <p>
            如果您对本《隐私政策》有任何疑问、投诉或建议，欢迎随时通过以下官方渠道与我们取得联系。我们将在收到信息后尽快为您解答。
          </p>
          <ul className="list-none pl-0 mt-6 bg-white/5 p-6 rounded-2xl border border-white/10">
            <li className="mb-2"><strong>商务与支持邮箱：</strong> <a href="mailto:ksugiono187@gmail.com" className="font-bold">ksugiono187@gmail.com</a></li>
            <li><strong>Telegram 官方客服：</strong> <a href="https://t.me/Hy_0027" target="_blank" rel="noopener noreferrer" className="font-bold text-[#0088cc]">@Hy_0027</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
