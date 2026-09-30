import { Metadata } from "next";

export const metadata: Metadata = {
  title: "机场常见问题 FAQ",
  description: "解答关于机场推荐、使用、续费及防跑路等常见疑问。",
};

const faqs = [
  { q: "什么是机场？为什么要使用机场推荐服务？", a: "“机场”是代理节点服务提供商的俗称，通常使用SS、V2Ray、Trojan等协议。由于市场上良莠不齐，我们的服务通过严谨对比和评测，帮您筛选出稳定、高性价比的优质商家，避免您踩坑。" },
  { q: "机场会跑路吗？如何防范风险？", a: "任何网络服务都有一定风险。为防范风险：首先，参考我们经过筛选的推荐列表；其次，对于新接触的品牌，强烈建议先购买“月付”套餐进行尝试；最后，不要在同一家一次性投入过多资金购买长达数年的套餐。" },
  { q: "专线和中转有什么区别？", a: "中转通常指在国内有入口服务器，然后通过公网将流量传输到海外节点，成本较低但容易受晚高峰公网拥堵影响；专线（如IEPL/IPLC）则是通过企业级内网跨越边境，不仅延迟极低，而且完全不受防火墙随机干扰，稳定性最高。" },
  { q: "我该买多少流量的套餐？", a: "如果您主要是查阅文字资料和少量视频，每月 50GB 通常足够；如果您需要经常观看 4K 视频 (如 Netflix/YouTube) 或下载大型文件，建议选择 200GB 及以上的大流量套餐。" },
];

export default function FAQPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">机场常见问题 FAQ</h1>
      <p className="text-slate-400 mb-12 text-lg">在选择和使用机场时，您可能会遇到各种疑问。我们整理了最核心的常见问题。</p>
      
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="glass-card rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-white mb-3 flex items-start">
               <span className="text-brand-500 mr-3 text-2xl">Q:</span>
               {faq.q}
            </h3>
            <p className="text-slate-400 md:ml-9 leading-relaxed">
               {faq.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
