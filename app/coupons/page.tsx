import { airports } from "@/data/airports";
import { Metadata } from "next";
import Link from "next/link";
import { Tag, ExternalLink } from "lucide-react";
import CopyButton from "@/components/CopyButton";

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
                  <Link href={`/brands/${a.slug}`} className="hover:text-brand-400 transition-colors">{a.name}</Link>
                </h3>
                <p className="text-xs text-slate-500 mt-1">{a.category}</p>
              </div>
              <Tag className="w-5 h-5 text-brand-400" />
            </div>
            <CopyButton text={a.coupon} />
            <Link href={a.affiliateUrl} target="_blank" rel="nofollow noopener noreferrer" className="block w-full text-center py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors text-sm font-medium">
              去使用优惠码
            </Link>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-white mb-6">暂无优惠码的品牌</h2>
      <div className="flex flex-wrap gap-3">
        {airportsWithoutCoupons.map(a => (
          <Link key={a.id} href={`/brands/${a.slug}`} className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
            {a.name} <span className="text-slate-600 ml-1">暂无优惠码</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
