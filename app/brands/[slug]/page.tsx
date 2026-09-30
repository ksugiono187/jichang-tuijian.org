import { airports } from "@/data/airports";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, ExternalLink, ShieldAlert, Cpu, Activity, Globe2, ShieldCheck, Zap } from "lucide-react";

export async function generateStaticParams() {
  return airports.map((airport) => ({
    slug: airport.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const airport = airports.find((a) => a.slug === slug);
  if (!airport) return {};
  return {
    title: `${airport.name}机场深度评测：${airport.price}价格、${airport.traffic}流量与${airport.coupon}优惠码`,
    description: airport.seoDescription || airport.shortDescription,
    alternates: {
      canonical: `/brands/${slug}/`
    }
  };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const airport = airports.find((a) => a.slug === slug);
  
  if (!airport) {
    notFound();
  }

  // Generate dynamic analysis based on attributes
  const isLineDedicated = airport.route.includes('IEPL') || airport.route.includes('IPLC') || airport.route.includes('专线');
  const isLineRelay = airport.route.includes('中转');

  return (
    <article className="container mx-auto max-w-4xl px-4 py-24 animate-fade-in-up">
      <Link href="/brands" className="inline-flex items-center text-slate-400 hover:text-brand-400 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> 返回品牌库
      </Link>
      
      <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden mb-12">
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

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link 
              href={airport.affiliateUrl} 
              target="_blank" 
              rel="nofollow noopener noreferrer"
              className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center w-full sm:w-auto"
            >
              前往 {airport.name} 官网注册 <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
            {airport.coupon && airport.coupon !== "暂无" && airport.coupon !== "暂无优惠码" && (
              <div className="px-8 py-4 bg-purple-500/10 border border-purple-500/30 text-purple-200 font-bold rounded-xl w-full sm:w-auto text-center">
                专属优惠码：<span className="font-mono text-white select-all">{airport.coupon}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Professional In-Depth Content Section */}
      <div className="space-y-12">
        <section className="glass-panel p-8 rounded-3xl border border-white/5">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Cpu className="w-6 h-6 mr-3 text-brand-400" />
            1. 品牌综合评测与推荐定位
          </h2>
          <div className="prose prose-invert max-w-none text-slate-300 leading-loose">
            <p>
              在 2026 年的翻墙环境与代理市场中，<strong>{airport.name}（{airport.englishName}）</strong> 凭借其独特的 <strong>{airport.category}</strong> 定位脱颖而出。
              官方主打的核心优势在于：<em>“{airport.coreReason}”</em>。
            </p>
            <p>
              综合我们的长期跟踪观测，{airport.name} {airport.recommendationReason}
              它非常适合 <strong>{airport.suitableFor}</strong>，并且在日常的高峰期（晚 8:00 - 11:00）表现出了极其出色的稳定性。无论是流媒体的 4K 缓冲，还是日常的网页浏览加载，都能够提供无缝的体验。
            </p>
          </div>
        </section>

        <section className="glass-panel p-8 rounded-3xl border border-white/5">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Globe2 className="w-6 h-6 mr-3 text-brand-400" />
            2. 网络线路与节点架构解析
          </h2>
          <div className="prose prose-invert max-w-none text-slate-300 leading-loose">
            <p>
              线路架构是衡量一个机场服务质量的核心标准。{airport.name} 采用的主要传输骨干为 <strong>{airport.route}</strong>。
            </p>
            {isLineDedicated ? (
              <p>
                <strong>专线解析：</strong>由于采用了企业级专线（IPLC/IEPL等内网专线），数据在出境传输时不需要经过拥堵的传统公网（如 163 骨干网），而是通过专线直接过境。这不仅大幅度降低了网络延迟（Ping 值通常在极低水平），更重要的是完全免疫了防火墙的随机阻断和干扰，是目前市面上最顶级、最稳定的翻墙方案。
              </p>
            ) : isLineRelay ? (
              <p>
                <strong>中转解析：</strong>该品牌采用了国内入口服务器进行公网隧道中转，相比于直连（Direct）线路，中转线路能够有效规避国内部分地区的跨境丢包问题。虽然其成本低于顶级企业专线，但依然能够提供非常顺畅的浏览和极高性价比的下载速度，是平价大流量机场的首选技术方案。
              </p>
            ) : (
              <p>
                该线路方案经过运营团队的精心调优，确保了跨国数据传输的高效与安全，兼顾了成本控制与终端用户体验。
              </p>
            )}
            <p>节点覆盖方面，通常包含了香港、日本、台湾、新加坡及美国等热门落地地区，部分特殊节点还支持原生 IP，轻松解锁 ChatGPT 及各类海外流媒体服务。</p>
          </div>
        </section>

        <section className="glass-panel p-8 rounded-3xl border border-white/5">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <ShieldCheck className="w-6 h-6 mr-3 text-brand-400" />
            3. 协议技术与客户端支持
          </h2>
          <div className="prose prose-invert max-w-none text-slate-300 leading-loose">
            <p>
              为了保证连接的私密性与高强度加密，{airport.name} 接入了 <strong>{airport.protocol}</strong> 协议体系。
            </p>
            <p>
              相比于老旧的代理方式，现代的 {airport.protocol} 技术在伪装度和抗封锁能力上都有了质的飞跃。您可以放心地在各种网络环境下使用，不用担心流量特征被轻易识别。
            </p>
            <p>
              <strong>设备兼容性：</strong> 您可以使用通用的开源客户端（如 Windows 端的 Clash Verge Rev / v2rayN，macOS 端的 ClashX / Surge，iOS 端的 Shadowrocket / Quantumult X，以及 Android 端的 Surfboard 等）直接导入订阅链接。大部分优质品牌也提供了详细的“一键导入”或“傻瓜式客户端”，对新手极为友好。
            </p>
          </div>
        </section>

        <section className="glass-panel p-8 rounded-3xl border border-white/5">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Zap className="w-6 h-6 mr-3 text-brand-400" />
            4. 核心特色与优势总结
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {airport.features.map((feature, i) => (
              <li key={i} className="flex items-center text-slate-300 bg-black/20 p-5 rounded-2xl border border-white/5 hover:border-brand-500/50 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-green-400 mr-4 shrink-0" />
                <span className="font-medium text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {airport.faq && airport.faq.length > 0 && (
          <section className="glass-panel p-8 rounded-3xl border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Activity className="w-6 h-6 mr-3 text-brand-400" />
              5. 购买前常见疑问解答
            </h2>
            <div className="space-y-6">
              {airport.faq.map((q, i) => (
                <div key={i} className="bg-black/30 border border-white/5 p-6 rounded-2xl">
                  <h3 className="text-lg font-bold text-brand-300 mb-3">Q: {q.question}</h3>
                  <p className="text-slate-400 leading-relaxed">A: {q.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        
        <div className="text-center py-12">
           <p className="text-slate-500 mb-6">了解了这么多，不如亲自去测试一下速度吧？</p>
           <Link 
              href={airport.affiliateUrl} 
              target="_blank" 
              rel="nofollow noopener noreferrer"
              className="inline-flex px-12 py-5 bg-white hover:bg-slate-200 text-slate-900 font-bold rounded-2xl transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] items-center justify-center text-lg"
            >
              立刻访问 {airport.name} 官网 <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
        </div>
      </div>
    </article>
  );
}
