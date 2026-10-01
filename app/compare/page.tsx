import { airports } from "@/data/airports";
import { Metadata } from "next";
import CompareTable from "@/components/CompareTable";

export const metadata: Metadata = {
  title: "机场推荐与价格流量对比表",
  description: "29个精选机场品牌的横向对比表。全面对比各大机场的价格、流量、线路、协议与优惠码，帮您挑选最适合的翻墙方案。",
};

export default function ComparePage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">机场推荐与价格流量对比</h1>
      <p className="text-slate-400 mb-12 max-w-2xl text-lg">快速横向对比 29 家精选机场的核心参数。滑动表格查看详细规格与专属优惠信息。</p>
      
      <CompareTable airports={airports} />
    </div>
  );
}
