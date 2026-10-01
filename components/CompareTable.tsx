"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Copy, CheckCircle2 } from "lucide-react";
import { Airport } from "@/data/airports";

export default function CompareTable({ airports }: { airports: Airport[] }) {
  const [filter, setFilter] = useState("全部");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filters = ["全部", "性价比", "专线", "中转", "大流量", "低价", "长期套餐"];

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredAirports = airports.filter((a) => {
    if (filter === "全部") return true;
    const tagStr = a.tag.toLowerCase();
    const routeStr = a.route.toLowerCase();
    const priceNum = parseFloat(a.price.replace(/[^0-9.]/g, ""));
    const trafficNum = parseInt(a.traffic.replace(/[^0-9]/g, ""));

    if (filter === "性价比") return tagStr.includes("性价比") || tagStr.includes("平价") || tagStr.includes("均衡");
    if (filter === "专线") return routeStr.includes("专线") || routeStr.includes("iplc") || routeStr.includes("iepl") || tagStr.includes("专线");
    if (filter === "中转") return routeStr.includes("中转") || tagStr.includes("中转");
    if (filter === "大流量") return tagStr.includes("大流量") || tagStr.includes("高流量") || trafficNum >= 200;
    if (filter === "低价") return tagStr.includes("低价") || tagStr.includes("入门") || priceNum <= 15;
    if (filter === "长期套餐") return tagStr.includes("年付") || tagStr.includes("长期");
    return true;
  });

  return (
    <div className="animate-fade-in-up">
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${
              filter === f
                ? "bg-brand-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="glass-panel rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <div className="overflow-x-auto hide-scrollbar">
          <table className="w-full text-left border-collapse min-w-[1200px]">
            <thead>
              <tr className="bg-black/40 text-slate-300 text-sm uppercase tracking-wider">
                <th className="p-4 font-semibold border-b border-white/10">排名</th>
                <th className="p-4 font-semibold border-b border-white/10">品牌</th>
                <th className="p-4 font-semibold border-b border-white/10">推荐标签</th>
                <th className="p-4 font-semibold border-b border-white/10">参考价格</th>
                <th className="p-4 font-semibold border-b border-white/10">参考流量</th>
                <th className="p-4 font-semibold border-b border-white/10">核心线路</th>
                <th className="p-4 font-semibold border-b border-white/10">协议</th>
                <th className="p-4 font-semibold border-b border-white/10">适合人群</th>
                <th className="p-4 font-semibold border-b border-white/10">优惠码</th>
                <th className="p-4 font-semibold border-b border-white/10 text-center">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300 text-sm">
              {filteredAirports.map((a) => (
                <tr key={a.id} className="hover:bg-white/5 transition-colors group">
                  <td className="p-4 text-brand-400 font-bold">{a.id}</td>
                  <td className="p-4 font-bold text-white">
                    <Link href={`/brands/${a.slug}`} className="hover:text-brand-400 transition-colors">
                      {a.name}
                    </Link>
                  </td>
                  <td className="p-4"><span className="bg-brand-500/10 text-brand-300 px-2 py-1. rounded text-xs border border-brand-500/20 whitespace-nowrap">{a.tag}</span></td>
                  <td className="p-4 font-medium text-green-400 whitespace-nowrap">{a.price}</td>
                  <td className="p-4 font-medium text-yellow-400 whitespace-nowrap">{a.traffic}</td>
                  <td className="p-4 text-xs max-w-[150px] leading-relaxed" title={a.route}>{a.route}</td>
                  <td className="p-4 text-xs whitespace-nowrap" title={a.protocol}>{a.protocol}</td>
                  <td className="p-4 text-xs max-w-[120px] text-slate-400">{a.reason}</td>
                  <td className="p-4">
                    {a.coupon ? (
                      <button
                        onClick={() => handleCopy(a.coupon!, a.id)}
                        className="flex items-center space-x-1 px-2 py-1 bg-white/5 hover:bg-white/10 rounded border border-white/10 transition-colors text-xs text-brand-300"
                        title="点击复制"
                      >
                        {copiedId === a.id ? <CheckCircle2 className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                        <span className="font-mono">{a.coupon}</span>
                      </button>
                    ) : (
                      <span className="text-xs text-slate-500">暂无</span>
                    )}
                  </td>
                  <td className="p-4 text-center whitespace-nowrap">
                    <Link href={a.affiliateUrl} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-brand-600/20 text-brand-400 border border-brand-500/30 rounded-lg hover:bg-brand-600 hover:text-white transition-colors text-xs font-bold mr-2">
                      官网 <ExternalLink className="w-3 h-3 ml-1" />
                    </Link>
                    <Link href={`/brands/${a.slug}`} className="inline-flex items-center px-3 py-2 bg-white/5 text-slate-300 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white transition-colors text-xs">
                      详情
                    </Link>
                  </td>
                </tr>
              ))}
              {filteredAirports.length === 0 && (
                <tr>
                  <td colSpan={10} className="p-8 text-center text-slate-400">
                    暂无符合该筛选条件的机场
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
