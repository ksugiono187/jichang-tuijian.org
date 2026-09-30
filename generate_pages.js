const fs = require('fs');
const path = require('path');

const pages = {
  'app/brands/page.tsx': `
import { airports } from "@/data/airports";
import AirportCard from "@/components/AirportCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "机场推荐品牌库：29家优质机场服务商评测与对比",
  description: "整理29家优质机场推荐品牌资料，提供详细的线路、价格、流量、协议与优惠码信息，帮助您全方位对比机场服务。",
};

export default function BrandsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">机场推荐品牌库</h1>
      <p className="text-slate-400 mb-12 max-w-2xl text-lg">汇集经过严格筛选的29家优质机场服务商。结合推荐榜单与详细评测，助您快速对比各家线路与定价方案。</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {airports.map((airport, index) => (
          <AirportCard key={airport.id} airport={airport} index={index} />
        ))}
      </div>
    </div>
  );
}
  `,
  'app/brands/[slug]/page.tsx': `
import { airports } from "@/data/airports";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, ExternalLink, ShieldAlert, Cpu } from "lucide-react";

export async function generateStaticParams() {
  return airports.map((airport) => ({
    slug: airport.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const airport = airports.find((a) => a.slug === slug);
  if (!airport) return {};
  return {
    title: \`\${airport.name}机场推荐：\${airport.price}价格、\${airport.traffic}流量与\${airport.coupon}优惠码\`,
    description: airport.seoDescription || airport.shortDescription,
    alternates: {
      canonical: \`/brands/\${slug}/\`
    }
  };
}

export default async function BrandPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const airport = airports.find((a) => a.slug === slug);
  
  if (!airport) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-4xl px-4 py-24 animate-fade-in-up">
      <Link href="/brands" className="inline-flex items-center text-slate-400 hover:text-brand-400 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> 返回品牌库
      </Link>
      
      <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Huge background number */}
        <div className="absolute -top-10 -right-10 text-[200px] font-black text-white/[0.02] select-none pointer-events-none z-0">
          {airport.id}
        </div>
        
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="text-sm font-bold bg-brand-500/20 text-brand-400 px-3 py-1 rounded-full border border-brand-500/30">
              #{airport.rank} 推荐
            </span>
            <span className="text-sm font-medium bg-white/5 text-slate-300 px-3 py-1 rounded-full border border-white/10">
              {airport.category}
            </span>
            <span className="text-sm font-medium bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30">
              {airport.tag}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
            {airport.name} <span className="text-2xl text-slate-500 font-normal ml-2">{airport.englishName}</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 leading-relaxed border-l-4 border-brand-500 pl-4 mt-6">
            {airport.shortDescription}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-black/30 border border-white/5 p-4 rounded-2xl">
              <div className="text-slate-500 text-sm mb-1">参考价格</div>
              <div className="text-xl font-bold text-white">{airport.price}</div>
            </div>
            <div className="bg-black/30 border border-white/5 p-4 rounded-2xl">
              <div className="text-slate-500 text-sm mb-1">参考流量</div>
              <div className="text-xl font-bold text-white">{airport.traffic}</div>
            </div>
            <div className="bg-black/30 border border-white/5 p-4 rounded-2xl">
              <div className="text-slate-500 text-sm mb-1">核心线路</div>
              <div className="text-xl font-bold text-white truncate" title={airport.route}>{airport.route}</div>
            </div>
            <div className="bg-black/30 border border-white/5 p-4 rounded-2xl">
              <div className="text-slate-500 text-sm mb-1">支持协议</div>
              <div className="text-xl font-bold text-white truncate" title={airport.protocol}>{airport.protocol}</div>
            </div>
          </div>

          <div className="mb-10 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex items-start">
             <ShieldAlert className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 shrink-0" />
             <p className="text-sm text-yellow-200/80">价格与套餐可能调整，具体以品牌官网最新信息为准。购买前建议先选择月付套餐进行测速体验。</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Cpu className="w-6 h-6 mr-2 text-brand-400" />
                推荐理由与核心定位
              </h2>
              <div className="prose prose-invert max-w-none text-slate-300">
                <p><strong>推荐理由：</strong>{airport.recommendationReason}</p>
                <p><strong>核心原因：</strong>{airport.coreReason}</p>
                <p><strong>适用人群：</strong>{airport.suitableFor}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <CheckCircle2 className="w-6 h-6 mr-2 text-brand-400" />
                特色功能
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {airport.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-slate-300 bg-white/5 px-4 py-3 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {airport.faq && airport.faq.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">常见问题 FAQ</h2>
                <div className="space-y-4">
                  {airport.faq.map((q, i) => (
                    <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-2xl">
                      <h3 className="text-lg font-bold text-white mb-2">Q: {q.question}</h3>
                      <p className="text-slate-400">A: {q.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <Link 
              href={airport.affiliateUrl} 
              target="_blank" 
              rel="nofollow noopener noreferrer"
              className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center w-full sm:w-auto"
            >
              前往 {airport.name} 官网 <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
            {airport.coupon && airport.coupon !== "暂无" && airport.coupon !== "暂无优惠码" && (
              <div className="px-8 py-4 bg-purple-500/10 border border-purple-500/30 text-purple-200 font-bold rounded-xl w-full sm:w-auto text-center">
                专属优惠码：<span className="font-mono text-white select-all">{airport.coupon}</span>
              </div>
            )}
          </div>

        </div>
      </div>
    </article>
  );
}
  `,
  'app/compare/page.tsx': `
import { airports } from "@/data/airports";
import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "机场推荐与价格流量对比表",
  description: "29个精选机场品牌的横向对比表。全面对比各大机场的价格、流量、线路、协议与优惠码，帮您挑选最适合的翻墙方案。",
};

export default function ComparePage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">机场推荐与价格流量对比</h1>
      <p className="text-slate-400 mb-12 max-w-2xl text-lg">快速横向对比 29 家精选机场的核心参数。滑动表格查看详细规格与专属优惠信息。</p>
      
      <div className="glass-panel rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-black/40 text-slate-300 text-sm uppercase tracking-wider">
                <th className="p-4 font-semibold border-b border-white/10">排名</th>
                <th className="p-4 font-semibold border-b border-white/10">品牌</th>
                <th className="p-4 font-semibold border-b border-white/10">推荐标签</th>
                <th className="p-4 font-semibold border-b border-white/10">参考价格</th>
                <th className="p-4 font-semibold border-b border-white/10">参考流量</th>
                <th className="p-4 font-semibold border-b border-white/10">核心线路</th>
                <th className="p-4 font-semibold border-b border-white/10">协议</th>
                <th className="p-4 font-semibold border-b border-white/10">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300 text-sm">
              {airports.map((a) => (
                <tr key={a.id} className="hover:bg-white/5 transition-colors group">
                  <td className="p-4 text-brand-400 font-bold">{a.id}</td>
                  <td className="p-4 font-bold text-white">
                    <Link href={\`/brands/\${a.slug}\`} className="hover:text-brand-400 transition-colors">
                      {a.name}
                    </Link>
                  </td>
                  <td className="p-4"><span className="bg-white/5 px-2 py-1 rounded text-xs border border-white/10">{a.tag}</span></td>
                  <td className="p-4 font-medium text-green-400">{a.price}</td>
                  <td className="p-4 font-medium text-yellow-400">{a.traffic}</td>
                  <td className="p-4 truncate max-w-[150px]" title={a.route}>{a.route}</td>
                  <td className="p-4 truncate max-w-[100px]" title={a.protocol}>{a.protocol}</td>
                  <td className="p-4">
                    <Link href={a.affiliateUrl} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center px-3 py-1.5 bg-brand-600/20 text-brand-400 border border-brand-500/30 rounded-lg hover:bg-brand-600 hover:text-white transition-colors">
                      官网 <ExternalLink className="w-3 h-3 ml-1" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
  `,
  'app/coupons/page.tsx': `
import { airports } from "@/data/airports";
import { Metadata } from "next";
import Link from "next/link";
import { Tag, Copy, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "机场优惠券与折扣码大全",
  description: "2026最新机场优惠券整理。包含微风网络、飞猫云、无忧链接等多家高性价比机场的独家折扣码，购买套餐更省钱。",
};

export default function CouponsPage() {
  const airportsWithCoupons = airports.filter(a => a.coupon && a.coupon !== "暂无" && a.coupon !== "暂无优惠码");
  const airportsWithoutCoupons = airports.filter(a => !a.coupon || a.coupon === "暂无" || a.coupon === "暂无优惠码");

  return (
    <div className="container mx-auto max-w-6xl px-4 py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">机场优惠券大全</h1>
      <p className="text-slate-400 mb-12 max-w-2xl text-lg">为您整理收集了最新可用的机场优惠码。在结账时输入专属优惠码，享受订阅折扣优惠。</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {airportsWithCoupons.map(a => (
          <div key={a.id} className="glass-card rounded-2xl p-6 border border-brand-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 blur-[50px] -z-10 group-hover:bg-brand-500/20 transition-colors"></div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">
                  <Link href={\`/brands/\${a.slug}\`} className="hover:text-brand-400 transition-colors">{a.name}</Link>
                </h3>
                <p className="text-xs text-slate-500 mt-1">{a.category}</p>
              </div>
              <Tag className="w-5 h-5 text-brand-400" />
            </div>
            <div className="bg-black/40 border border-white/10 rounded-xl p-3 mb-4 flex justify-between items-center cursor-pointer hover:border-brand-500/50 transition-colors" onClick={() => {}} title="双击或手动复制">
              <code className="text-brand-300 font-mono text-lg font-bold select-all">{a.coupon}</code>
              <Copy className="w-4 h-4 text-slate-400" />
            </div>
            <Link href={a.affiliateUrl} target="_blank" rel="nofollow noopener noreferrer" className="block w-full text-center py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors text-sm font-medium">
              去使用优惠码
            </Link>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-white mb-6">暂无优惠码的品牌</h2>
      <div className="flex flex-wrap gap-3">
        {airportsWithoutCoupons.map(a => (
          <Link key={a.id} href={\`/brands/\${a.slug}\`} className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
            {a.name} <span className="text-slate-600 ml-1">暂无优惠码</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
  `,
  'app/blog/page.tsx': `
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
  `,
  'app/faq/page.tsx': `
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
  `,
  'app/guides/page.tsx': `
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "机场选择指南：从零开始挑选合适的方案",
  description: "详细的机场选择指南，教您如何根据预算、用途、网络环境等因素挑选最适合的机场。",
};

export default function GuidesPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">机场选择指南</h1>
      <p className="text-slate-400 mb-12 text-lg">机场推荐哪个比较好？选择并不在于最贵，而在于最适合您的个人使用场景。</p>
      
      <div className="glass-panel rounded-3xl p-8 md:p-12 prose prose-invert max-w-none text-slate-300">
         <h3>1. 根据用途选择线路类型</h3>
         <p>如果您是<strong>重度游戏玩家</strong>或者<strong>外贸商务人士</strong>，对延迟和稳定性要求极高，请务必选择带有 <strong>IPLC/IEPL 标签的专线机场</strong>。</p>
         <p>如果您只是<strong>日常刷网页、看 YouTube</strong>，对晚高峰轻微降速不敏感，那么 <strong>优质中转机场</strong> 将是性价比最高的选择。</p>

         <h3>2. 根据消耗量选择流量套餐</h3>
         <p>不要盲目追求无限流量。根据统计，普通用户的每月真实消耗往往在 30GB-100GB 之间。重度流媒体用户（每天看好几个小时的高清视频）则需要 200GB - 500GB。购买前请估算自己的需求，避免浪费。</p>

         <h3>3. 关注设备与协议兼容性</h3>
         <p>大部分主流机场都支持 Shadowsocks, Vmess, Trojan 等协议，兼容 Clash (Windows/Mac/Android) 和 Shadowrocket (iOS)。如果您有软路由 (OpenWrt) 需求，请提前确认机场节点在您的路由插件中是否能稳定运行。</p>
         
         <h3>4. 试用策略</h3>
         <p>这是防坑的终极指南：<strong>永远先买月付套餐！</strong> 无论别人怎么推荐，只有在您本地的宽带运营商环境下测试通过，才是真正的好机场。测试满意后，再去 <Link href="/coupons" className="text-brand-400">优惠券页面</Link> 找个折扣码购买年付套餐。</p>
      </div>
    </div>
  );
}
  `,
  'app/about/page.tsx': `
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
  `,
  'app/privacy/page.tsx': `
export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-24">
      <h1 className="text-4xl font-bold text-white mb-6">隐私政策</h1>
      <div className="prose prose-invert text-slate-400">
        <p>我们非常重视您的隐私。本网站作为一个静态信息展示平台，不会主动收集您的个人身份信息。</p>
        <p>当您点击本站内的推荐链接跳转至第三方网站时，请注意阅读第三方网站的隐私条款。第三方可能会收集您的 Cookie 等访问信息。</p>
      </div>
    </div>
  );
}
  `,
  'app/disclaimer/page.tsx': `
export default function DisclaimerPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-24">
      <h1 className="text-4xl font-bold text-white mb-6">免责声明</h1>
      <div className="prose prose-invert text-slate-400">
        <p>本站提供的信息仅供技术交流与参考。我们在发布信息时尽力确保其准确性，但不对因使用本站信息而造成的任何损失负责。</p>
        <p>本站列出的所有第三方服务均由独立运营的实体提供，我们不对其服务质量、稳定性及后续运营状况作任何担保。购买服务属于您的个人行为，请自行承担风险。</p>
      </div>
    </div>
  );
}
  `
};

for (const [filepath, content] of Object.entries(pages)) {
  const fullPath = path.join(__dirname, filepath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim() + '\n', 'utf-8');
  console.log('Created ' + filepath);
}
