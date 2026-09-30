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
                    <Link href={`/brands/${a.slug}`} className="hover:text-brand-400 transition-colors">
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
