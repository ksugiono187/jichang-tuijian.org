import { Airport } from "@/data/airports";
import { ExternalLink, Tag, ShieldCheck, Zap, Activity, Info, Copy } from "lucide-react";
import Link from "next/link";

export default function AirportCard({ airport }: { airport: Airport }) {
  return (
    <article className="bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col h-full">
      <div className="p-6 flex-grow flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-3">
            <span className="bg-blue-600 text-white font-bold text-lg rounded-lg w-10 h-10 flex items-center justify-center shrink-0">
              {airport.id}
            </span>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
                {airport.name}
                <span className="ml-2 text-sm font-normal text-slate-500 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                  {airport.englishName}
                </span>
              </h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-1">
                {airport.tag}
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 rounded-md shrink-0">
            {airport.category}
          </span>
        </div>

        <p className="text-slate-600 dark:text-slate-300 text-sm mb-5 leading-relaxed">
          {airport.shortDescription}
        </p>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-3 mb-5 text-sm">
          <div className="flex items-center text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-2 rounded-md">
            <Tag className="w-4 h-4 mr-2 text-slate-400" />
            <span className="font-medium">{airport.price}</span>
          </div>
          <div className="flex items-center text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-2 rounded-md">
            <Activity className="w-4 h-4 mr-2 text-slate-400" />
            <span className="font-medium">{airport.traffic}</span>
          </div>
          <div className="flex items-center text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-2 rounded-md">
            <ShieldCheck className="w-4 h-4 mr-2 text-slate-400" />
            <span className="truncate" title={airport.protocol}>{airport.protocol}</span>
          </div>
          <div className="flex items-center text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-2 rounded-md">
            <Zap className="w-4 h-4 mr-2 text-slate-400" />
            <span className="truncate" title={airport.route}>{airport.route}</span>
          </div>
        </div>

        {/* Features */}
        <div className="mb-5 flex-grow">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">核心特点</h4>
          <ul className="space-y-1">
            {airport.features.map((feature, idx) => (
              <li key={idx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Coupon */}
        {airport.coupon && airport.coupon !== "暂无" && airport.coupon !== "暂无优惠码" && (
           <div className="mb-5 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-md p-3 flex items-center justify-between">
              <div className="text-sm">
                <span className="text-red-600 dark:text-red-400 font-bold block mb-0.5">机场优惠券</span>
                <span className="text-slate-600 dark:text-slate-400 text-xs">购买时输入优惠码</span>
              </div>
              <div className="bg-white dark:bg-slate-800 font-mono text-red-600 dark:text-red-400 font-bold px-3 py-1.5 rounded border border-red-200 dark:border-red-800/50 flex items-center">
                {airport.coupon}
              </div>
           </div>
        )}

      </div>

      {/* Footer / CTA */}
      <div className="bg-slate-50 dark:bg-slate-900/50 p-4 border-t border-slate-100 dark:border-slate-700 mt-auto">
        <Link 
          href={airport.affiliateUrl} 
          target="_blank" 
          rel="nofollow noopener noreferrer"
          className="w-full flex items-center justify-center py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm"
        >
          <span>访问官网 / 获取优惠</span>
          <ExternalLink className="w-4 h-4 ml-2" />
        </Link>
        <div className="mt-3 text-xs text-slate-500 text-center flex items-center justify-center">
           <Info className="w-3 h-3 mr-1" />
           {airport.recommendationReason.length > 30 ? airport.recommendationReason.substring(0,30) + '...' : airport.recommendationReason}
        </div>
      </div>
    </article>
  );
}
