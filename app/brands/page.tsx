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
