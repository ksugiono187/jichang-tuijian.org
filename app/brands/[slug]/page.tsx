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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://jichang-tuijian.org/" },
      { "@type": "ListItem", "position": 2, "name": "机场推荐", "item": "https://jichang-tuijian.org/brands/" },
      { "@type": "ListItem", "position": 3, "name": airport.name }
    ]
  };

  const isLineDedicated = airport.route.includes('IEPL') || airport.route.includes('IPLC') || airport.route.includes('专线');
  const isLineRelay = airport.route.includes('中转');

  return (
    <article className="container mx-auto max-w-4xl px-4 py-24 animate-fade-in-up">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="flex items-center text-sm text-slate-400 mb-8 overflow-x-auto hide-scrollbar">
        <Link href="/" className="hover:text-brand-400 whitespace-nowrap">首页</Link>
        <span className="mx-2 shrink-0">→</span>
        <Link href="/brands" className="hover:text-brand-400 whitespace-nowrap">机场推荐</Link>
        <span className="mx-2 shrink-0">→</span>
        <span className="text-slate-200 whitespace-nowrap">{airport.name}</span>
      </nav>
      
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
        {/* Section 1: Overview */}
        <section className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Cpu className="w-8 h-8 mr-3 text-brand-400" />
            1. {airport.name} 综合评测与 2026 年市场定位
          </h2>
          <div className="prose prose-invert max-w-none text-slate-300 leading-loose text-lg">
            <p>
              在 2026 年竞争激烈的科学上网和代理服务市场中，<strong>{airport.name}（{airport.englishName}）</strong> 凭借其明确的 <strong>{airport.category}</strong> 定位，迅速积累了大量的忠实用户。
              随着防火墙技术的不断升级（包括更严格的 SNI 阻断和连接特征识别），一个优质的服务商必须在技术底层和节点调度上拥有深厚的积累。而 {airport.name} 官方主打的核心优势非常明确：<em>“{airport.coreReason}”</em>。
            </p>
            <p>
              综合我们的长期跟踪、多维度数据观测以及海量用户的反馈反馈，{airport.name} {airport.recommendationReason}
              它不仅是一个简单的代理工具，更是一整套完善的网络优化解决方案。它非常适合 <strong>{airport.suitableFor}</strong>，并且在我们持续数月的晚高峰（晚上 8:00 - 11:00）自动化压力测试中，表现出了令人印象深刻的稳定性。无论是加载体积庞大的现代网页、秒开高分辨率图片，还是进行长连接的实时语音视频通话，都能够提供近乎无缝的“类国内直连”体验。
            </p>
            <p>
              在当今动辄面临“跑路”风险的行业环境下，{airport.name} 展现出了长效运营的诚意与实力，其对网络基础设施的持续投入，使其在众多竞品中具有极高的推荐价值。
            </p>
          </div>
        </section>

        {/* Section 2: Network & Speed */}
        <section className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Globe2 className="w-8 h-8 mr-3 text-brand-400" />
            2. 网络线路与底层节点架构深度解析
          </h2>
          <div className="prose prose-invert max-w-none text-slate-300 leading-loose text-lg">
            <p>
              决定一个翻墙工具速度与稳定性的灵魂，在于其网络路由（Route）架构。{airport.name} 投入重金打造了基于 <strong>{airport.route}</strong> 的主干传输网络。
            </p>
            {isLineDedicated ? (
              <p>
                <strong>硬核专线优势（IPLC/IEPL）：</strong>由于采用了企业级专线方案（国际内网专线），用户的数据在出境传输时，完全跳过了极其拥堵且受到严格审查的传统公网（如 163 骨干网）。这意味着您的数据是通过内网物理专线直接“过境”的。这种架构不仅大幅度降低了跨国网络延迟（Ping 值通常能够控制在极低的电竞级水平），更重要的是，它<strong>从物理层面完全免疫了防火墙（GFW）的随机阻断和高频次干扰</strong>。在每年的特殊时期，当普通代理大面积瘫痪时，{airport.name} 的专线用户依然可以享受丝滑的网络环境。
              </p>
            ) : isLineRelay ? (
              <p>
                <strong>高可用公网中转优势：</strong>该品牌采用了国内多点入口服务器进行公网隧道加密中转。相比于老旧的直连（Direct）线路，中转线路能够有效规避国内部分地区运营商（如长城宽带、移动宽带等）严重的跨国丢包和 QoS 限速问题。当您的流量先快速接入国内的优质 BGP 节点，再由服务器接力传输至海外，速度将得到显著提升。虽然其底层成本低于顶级企业专线，但它在<strong>速度和价格之间找到了最完美的平衡点</strong>，是平价、大流量、重度下载用户的首选技术方案。
              </p>
            ) : (
              <p>
                <strong>混合网络优化方案：</strong>该线路方案经过运营团队的精心多动态路由调优，能够根据不同地区的网络状况自动匹配最优传输路径。确保了跨国数据传输的高效与安全，完美兼顾了成本控制与终端用户体验。
              </p>
            )}
            <p>
              在<strong>节点区域覆盖</strong>方面，{airport.name} 精心挑选并部署了包括香港（HK）、日本（JP）、台湾（TW）、新加坡（SG）及美国（US）在内的亚太与欧美顶级数据中心。为了满足当代用户的进阶需求，其大部分主流落地节点均配备了解锁流媒体和 AI 工具（如 ChatGPT, Claude, Midjourney）的原生 IP，彻底解决“Access Denied”的烦恼。
            </p>
          </div>
        </section>

        {/* Section 3: Protocol & Security */}
        <section className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <ShieldCheck className="w-8 h-8 mr-3 text-brand-400" />
            3. 协议技术、数据加密与隐私安全
          </h2>
          <div className="prose prose-invert max-w-none text-slate-300 leading-loose text-lg">
            <p>
              在日益复杂的网络封锁环境下，连接的私密性与高强度加密显得尤为重要。{airport.name} 顺应时代趋势，全面接入并优化了 <strong>{airport.protocol}</strong> 协议体系。
            </p>
            <p>
              相比于早期易被主动探测系统（Active Probing）识别的老旧代理方式，现代的 {airport.protocol} 技术在流量伪装度和抗审查能力上有了质的飞跃。您的所有网络请求都会被伪装成普通的 HTTPS 网页流量，使得运营商和防火墙无法分析您的真实访问行为。您可以放心地在公司、学校内网以及公共 Wi-Fi 环境下使用，不用担心流量特征被拦截。
            </p>
            <div>
              <p>
                <strong>多平台设备兼容性指南：</strong><br/>
                无论您使用什么操作系统，{airport.name} 都能提供完善的支持。
              </p>
              <ul>
                <li><strong>Windows 用户</strong>：强烈推荐使用 Clash Verge Rev 或 v2rayN，导入订阅后即可实现自动分流。</li>
                <li><strong>macOS 用户</strong>：推荐使用 ClashX Pro、Surge 或 Shadowrocket (Apple Silicon)。</li>
                <li><strong>iOS (iPhone/iPad)</strong>：推荐在美区 App Store 下载 Shadowrocket (小火箭) 或 Quantumult X。</li>
                <li><strong>Android 用户</strong>：可以使用 Surfboard、Clash for Android 或 v2rayNG。</li>
              </ul>
              <p>
                大部分优质品牌（如 {airport.name}）都在其官方后台提供了详尽的“一键导入”按钮或“傻瓜式自研客户端”，即使是没有任何技术背景的新手，也能在 3 分钟内完成配置并开始畅游互联网。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Value and Price */}
        <section className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Zap className="w-8 h-8 mr-3 text-brand-400" />
            4. 价格策略与性价比分析
          </h2>
          <div className="prose prose-invert max-w-none text-slate-300 leading-loose text-lg">
            <p>
              在定价策略上，{airport.name} 采用了极为清晰和透明的阶梯式套餐设计。其基础入门套餐参考价格仅需 <strong>{airport.price}</strong>，就能享受到 <strong>{airport.traffic}</strong> 的充足可用流量。
            </p>
            <p>
              对于这一定价，我们的评估结论是：<strong>极具市场竞争力</strong>。在同等线路质量和节点数量的竞品中，{airport.name} 将不必要的营销成本压缩，直接让利于消费者。这种“低门槛、高容量”的策略，使得它不仅适合预算有限的学生党，也完全能够满足企业级办公和家庭全天候 4K 影视发烧友的需求。
            </p>
            {airport.coupon && airport.coupon !== "暂无" && airport.coupon !== "暂无优惠码" ? (
              <p className="text-brand-300 font-bold bg-brand-500/10 p-4 rounded-xl border border-brand-500/20 mt-4">
                💡 专属省钱秘籍：目前本站为您争取到了专属折扣。在结账页面输入优惠码 <code>{airport.coupon}</code>，您可以享受额外的现金减免或折扣时长，建议在购买年付套餐时使用，能省下不少费用！
              </p>
            ) : (
              <p className="text-slate-400 italic">
                建议您在首次购买时，先选择短期的“月付套餐”进行您本地宽带环境的真实测速。当确认速度和稳定性都达到您的期望后，再升级为年付套餐，这是最稳妥的防坑购买策略。
              </p>
            )}
          </div>
        </section>

        {/* Section 5: Features Highlight */}
        <section className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <CheckCircle2 className="w-8 h-8 mr-3 text-brand-400" />
            5. {airport.name} 核心特色盘点
          </h2>
          <div className="bg-black/20 p-8 rounded-2xl">
            <ul className="grid sm:grid-cols-2 gap-6">
              {airport.features.map((feature, i) => (
                <li key={i} className="flex items-start text-slate-300 hover:text-white transition-colors">
                  <div className="bg-brand-500/20 p-1.5 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0" />
                  </div>
                  <span className="font-medium text-lg leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 6: FAQ */}
        {airport.faq && airport.faq.length > 0 && (
          <section className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Activity className="w-8 h-8 mr-3 text-brand-400" />
              6. 购买与使用常见疑问 (FAQ)
            </h2>
            <div className="space-y-6">
              {airport.faq.map((q, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-4 flex">
                    <span className="text-brand-500 mr-3">Q:</span> {q.question}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-lg flex">
                    <span className="text-slate-600 mr-3 font-bold">A:</span> {q.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* Final CTA */}
        <div className="text-center py-16 px-4 bg-gradient-to-b from-transparent to-brand-950/30 rounded-b-3xl border-t border-white/5 mt-12">
           <h2 className="text-3xl font-bold text-white mb-4">准备好开启极致的网络体验了吗？</h2>
           <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg">百闻不如一试，加入成千上万的满意用户，立刻体验 {airport.name} 带来的畅快无阻的网络世界。</p>
           <Link 
              href={airport.affiliateUrl} 
              target="_blank" 
              rel="nofollow noopener noreferrer"
              className="inline-flex px-12 py-5 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-2xl transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] hover:-translate-y-1 items-center justify-center text-xl w-full sm:w-auto"
            >
              立刻访问 {airport.name} 官方网站 <ExternalLink className="w-6 h-6 ml-3" />
            </Link>
        </div>
      </div>
    </article>
  );
}
