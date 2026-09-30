import { Airport } from "@/data/airports";
import { ExternalLink, Zap, Shield, Rocket, Target, Copy, Tag, CheckCircle2 } from "lucide-react";
import Link from "next/link";

function getCategoryIcon(category: string) {
  if (category.includes('专线')) return <Rocket className="w-3 h-3 mr-1" />;
  if (category.includes('中转')) return <Zap className="w-3 h-3 mr-1" />;
  if (category.includes('性价比')) return <Target className="w-3 h-3 mr-1" />;
  return <Shield className="w-3 h-3 mr-1" />;
}

export default function AirportCard({ airport, index }: { airport: Airport, index: number }) {
  // Add animation delay based on index for scroll reveal
  const delay = (index % 3) * 150;

  return (
    <article 
      className="glass-card rounded-2xl overflow-hidden flex flex-col h-full relative group transition-all duration-300 animate-fade-in-up hover:-translate-y-1.5"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Huge Background Number */}
      <div className="absolute -top-6 -left-4 text-[120px] font-black text-white/[0.03] select-none pointer-events-none z-0">
        {airport.id}
      </div>

      <div className="p-6 md:p-8 flex-grow flex flex-col relative z-10">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-black text-white/20 select-none">{airport.id}</span>
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center tracking-tight">
                {airport.name}
              </h3>
              <p className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">
                {airport.englishName}
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 bg-brand-500/10 text-brand-400 border border-brand-500/20 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.1)]">
              {getCategoryIcon(airport.category)}
              {airport.category}
            </span>
            <span className="text-xs font-medium text-slate-300 bg-white/5 px-2 py-0.5 rounded border border-white/5">
              {airport.tag}
            </span>
          </div>
        </div>

        {/* Recommendation Reason */}
        <div className="mb-6 border-l-2 border-brand-500/50 pl-4 py-1">
          <p className="text-slate-300 text-sm leading-relaxed mb-2">
            <strong>推荐理由：</strong>{airport.recommendationReason}
          </p>
          <p className="text-slate-400 text-xs leading-relaxed">
            <strong>核心原因：</strong>{airport.coreReason}
          </p>
        </div>

        {/* Information Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
          <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex flex-col justify-center">
            <span className="text-xs text-slate-500 mb-1">起步价格</span>
            <span className="font-semibold text-white truncate" title={airport.price}>{airport.price}</span>
          </div>
          <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex flex-col justify-center">
            <span className="text-xs text-slate-500 mb-1">基础流量</span>
            <span className="font-semibold text-white">{airport.traffic}</span>
          </div>
          <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex flex-col justify-center">
            <span className="text-xs text-slate-500 mb-1">核心线路</span>
            <span className="font-semibold text-white truncate" title={airport.route}>{airport.route}</span>
          </div>
          <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex flex-col justify-center">
            <span className="text-xs text-slate-500 mb-1">支持协议</span>
            <span className="font-semibold text-white truncate" title={airport.protocol}>{airport.protocol}</span>
          </div>
        </div>

        {/* Features */}
        <div className="mb-6 flex-grow">
          <ul className="space-y-2">
            {airport.features.map((feature, idx) => (
              <li key={idx} className="text-sm text-slate-400 flex items-center">
                <CheckCircle2 className="w-4 h-4 text-brand-400 mr-2.5 opacity-70 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Coupon */}
        {airport.coupon && airport.coupon !== "暂无" && airport.coupon !== "暂无优惠码" && (
           <div className="mb-6 bg-gradient-to-r from-purple-500/10 to-brand-500/10 border border-purple-500/20 rounded-xl p-4 flex items-center justify-between group/coupon">
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-200">专属优惠码</span>
              </div>
              <div className="font-mono text-purple-300 font-bold px-3 py-1 bg-black/30 rounded border border-purple-500/30 flex items-center shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                {airport.coupon}
                <Copy className="w-3 h-3 ml-2 opacity-50 cursor-pointer hover:opacity-100 transition-opacity" />
              </div>
           </div>
        )}

      </div>

      {/* Footer / CTA */}
      <div className="p-4 md:p-6 border-t border-white/5 bg-black/20 mt-auto flex flex-col sm:flex-row gap-3">
        <Link 
          href={`/brands/${airport.slug}`} 
          className="flex-1 flex items-center justify-center py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl transition-colors"
        >
          查看详情
        </Link>
        <Link 
          href={airport.affiliateUrl} 
          target="_blank" 
          rel="nofollow noopener noreferrer"
          className="flex-1 flex items-center justify-center py-3 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]"
        >
          访问官网 <ExternalLink className="w-4 h-4 ml-1.5" />
        </Link>
      </div>
    </article>
  );
}
