import { airports } from "@/data/airports";
import AirportCard from "@/components/AirportCard";
import { ArrowDown, Check, Zap, DollarSign, Database, Tag } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] flex flex-col items-center justify-center text-center px-4 mb-24 mt-[-80px] pt-20">
        
        {/* Subtle top label */}
        <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <span className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm font-medium text-brand-300 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span>2026 机场推荐指南</span>
          </span>
        </div>

        {/* Main Title */}
        <h1 className="mt-8 text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 tracking-tight leading-tight animate-fade-in-up max-w-4xl" style={{ animationDelay: '200ms' }}>
          机场推荐
        </h1>
        
        {/* Subtitle */}
        <p className="mt-6 text-xl md:text-2xl font-medium text-slate-300 animate-fade-in-up tracking-wide" style={{ animationDelay: '300ms' }}>
          29个机场品牌 · 价格 · 流量 · 线路 · 优惠券
        </p>

        <p className="mt-6 text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          整理29个机场服务品牌，提供价格、流量、线路、协议、优惠券与使用信息，帮助用户快速了解不同机场方案。
        </p>

        {/* Data Visual Tags */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <div className="flex flex-col items-center space-y-1">
            <div className="flex items-center space-x-2 text-xl font-bold text-white">
              <Database className="w-5 h-5 text-brand-400" />
              <span>29</span>
            </div>
            <span className="text-xs text-slate-500 uppercase tracking-widest">机场品牌</span>
          </div>
          <div className="w-px h-10 bg-white/10 hidden md:block"></div>
          <div className="flex flex-col items-center space-y-1">
            <div className="flex items-center space-x-2 text-xl font-bold text-white">
              <DollarSign className="w-5 h-5 text-green-400" />
              <span>价格</span>
            </div>
            <span className="text-xs text-slate-500 uppercase tracking-widest">全面对比</span>
          </div>
          <div className="w-px h-10 bg-white/10 hidden md:block"></div>
          <div className="flex flex-col items-center space-y-1">
            <div className="flex items-center space-x-2 text-xl font-bold text-white">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>流量</span>
            </div>
            <span className="text-xs text-slate-500 uppercase tracking-widest">额度查询</span>
          </div>
          <div className="w-px h-10 bg-white/10 hidden md:block"></div>
          <div className="flex flex-col items-center space-y-1">
            <div className="flex items-center space-x-2 text-xl font-bold text-white">
              <Tag className="w-5 h-5 text-purple-400" />
              <span>优惠</span>
            </div>
            <span className="text-xs text-slate-500 uppercase tracking-widest">专属整理</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <Link href="/brands" className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center">
            查看机场推荐
            <ArrowDown className="w-4 h-4 ml-2 animate-bounce" />
          </Link>
          <Link href="/compare" className="px-8 py-4 rounded-full glass-panel text-white font-medium hover:bg-white/10 transition-colors">
            查看机场对比
          </Link>
        </div>
      </section>

      {/* SEO Explanation Section */}
      <section className="mb-20 px-4 md:px-6 container mx-auto max-w-5xl animate-fade-in-up" style={{ animationDelay: '700ms' }}>
        <div className="glass-panel rounded-3xl p-8 md:p-10 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-brand-500/10 blur-3xl rounded-full pointer-events-none"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            什么是机场推荐？
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed">
            <p>
              <strong>机场推荐</strong>是根据网络服务商的价格、流量额度、线路稳定性（如 IPLC/IEPL 专线或公网中转）、节点分布覆盖、多平台设备支持、套餐周期时长，以及用户实际的使用需求（刷网页、看视频、玩游戏或远程办公等），对市面上不同的机场服务进行系统化的整理和对比。
            </p>
            <p>
              在这里，您不仅能找到经过严苛筛选的 <strong>机场推荐</strong> 列表，还可以通过我们的 <strong>机场对比</strong> 数据和详细的 <strong>机场评测</strong> 报告，全面了解各家服务商的真实表现。此外，我们实时更新全网最新的 <strong>机场价格</strong> 与官方 <strong>机场优惠券</strong>，并提供详尽的 <strong>机场选择指南</strong>，帮助新手闭坑，让您每一次的选购都物超所值。
            </p>
          </div>
        </div>
      </section>

      {/* Ranking Section */}
      <section id="ranking" className="mb-24 px-4 md:px-6 container mx-auto max-w-7xl scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-white/5 pb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              精选机场推荐榜单
            </h2>
            <p className="text-slate-400">Premium Comparison (Top {airports.length})</p>
          </div>
          <div className="mt-4 md:mt-0">
             <span className="inline-block bg-brand-500/10 text-brand-400 px-4 py-1.5 rounded-full text-sm font-medium border border-brand-500/20">
               数据已于近期核实更新
             </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {airports.map((airport, index) => (
            <AirportCard key={airport.id} airport={airport} index={index} />
          ))}
        </div>
      </section>

      {/* Guide Section */}
      <section id="guide" className="mb-24 px-4 md:px-6 container mx-auto max-w-5xl scroll-mt-24">
        <div className="glass-panel rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-8">机场选择指南：机场推荐哪个比较好？</h2>
          <div className="prose prose-invert max-w-none text-slate-300">
            <p className="text-lg mb-10">
              在寻找合适的网络服务时，很多人都会产生“机场推荐哪个比较好”的疑问。选择并不在于最贵，而在于最适合您的个人使用场景。以下是几个关键维度的机场对比策略：
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="relative pl-6 border-l border-brand-500/30">
                <div className="absolute w-3 h-3 bg-brand-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                <h3 className="text-xl font-bold text-white mb-3">
                  根据线路选择 (专线 vs 中转)
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  <strong className="text-slate-200">专线机场（如IPLC/IEPL）：</strong>这类机场价格相对较高，但优点是不受干扰，延迟极低，晚高峰不拥堵。适合游戏玩家、商务外贸从业者，以及追求极致稳定性的用户。<br/><br/>
                  <strong className="text-slate-200">中转机场：</strong>价格亲民，提供海量的机场流量。适合预算有限、日常追剧、下载大文件的普通用户。
                </p>
              </div>
              
              <div className="relative pl-6 border-l border-brand-500/30">
                <div className="absolute w-3 h-3 bg-brand-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                <h3 className="text-xl font-bold text-white mb-3">
                  关注机场价格与机场流量
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  在进行对比时，基础套餐的<strong>机场价格</strong>和包含的<strong>机场流量</strong>是核心指标。重度流媒体发烧友应优先选择大流量（100GB以上）；如果是轻度查阅资料，10-50GB的低价入门套餐即可满足需求。
                </p>
              </div>
              
              <div className="relative pl-6 border-l border-brand-500/30">
                <div className="absolute w-3 h-3 bg-brand-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                <h3 className="text-xl font-bold text-white mb-3">
                  善用机场优惠券
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  很多品牌会在节假日提供<strong>机场优惠券</strong>和专属折扣码。在购买年付套餐时输入优惠码，往往能省下一大笔费用。本站已为您搜集并整理了最新可用优惠码。
                </p>
              </div>

              <div className="relative pl-6 border-l border-brand-500/30">
                <div className="absolute w-3 h-3 bg-brand-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                <h3 className="text-xl font-bold text-white mb-3">
                  参考真实机场评测
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  不要只看商家宣传，应多参考第三方的<strong>机场评测</strong>。建议从小流量月付套餐开始试用，亲自测试您所在网络环境下的实际表现，满意后再考虑年度订阅。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mb-24 px-4 md:px-6 container mx-auto max-w-4xl scroll-mt-24">
         <div className="text-center mb-12">
           <h2 className="text-3xl font-bold text-white">
              机场使用教程与常见问题(FAQ)
           </h2>
           <p className="text-slate-500 mt-4">解决您的核心疑问</p>
         </div>
         <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6 md:p-8">
               <h3 className="text-lg font-bold text-white mb-3 flex items-start">
                  <span className="text-brand-500 mr-3 text-xl">Q:</span>
                  什么是机场？为什么要使用机场推荐服务？
               </h3>
               <p className="text-slate-400 ml-7 leading-relaxed">
                  “机场”是代理节点服务提供商的俗称，通常使用SS、V2Ray、Trojan等协议。由于市场上良莠不齐，我们的服务通过严谨对比和评测，帮您筛选出稳定、高性价比的优质商家，避免您踩坑。
               </p>
            </div>
            <div className="glass-card rounded-2xl p-6 md:p-8">
               <h3 className="text-lg font-bold text-white mb-3 flex items-start">
                  <span className="text-brand-500 mr-3 text-xl">Q:</span>
                  如何使用机场？有机场使用教程吗？
               </h3>
               <p className="text-slate-400 ml-7 leading-relaxed">
                  使用非常简单：1. 在推荐列表中挑选一个品牌并注册购买；2. 在后台找到“一键订阅”或获取订阅链接；3. 下载对应的客户端软件（如Clash, V2rayN, Shadowrocket等）；4. 将订阅链接导入软件并更新，选择节点后开启系统代理即可。
               </p>
            </div>
            <div className="glass-card rounded-2xl p-6 md:p-8">
               <h3 className="text-lg font-bold text-white mb-3 flex items-start">
                  <span className="text-brand-500 mr-3 text-xl">Q:</span>
                  机场会跑路吗？如何防范风险？
               </h3>
               <p className="text-slate-400 ml-7 leading-relaxed">
                  任何网络服务都有一定风险。为防范风险：首先，参考我们经过筛选的推荐列表；其次，对于新接触的品牌，强烈建议先购买“月付”套餐进行尝试；最后，不要在同一家一次性投入过多资金购买长达数年的套餐。
               </p>
            </div>
         </div>
      </section>
    </>
  );
}
