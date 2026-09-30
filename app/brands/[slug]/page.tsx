import { airports } from "@/data/airports";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, ExternalLink, ShieldAlert, Cpu } from "lucide-react";

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
    title: `${airport.name}机场推荐：${airport.price}价格、${airport.traffic}流量与${airport.coupon}优惠码`,
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

  return (
    <article className="container mx-auto max-w-4xl px-4 py-24 animate-fade-in-up">
      <Link href="/brands" className="inline-flex items-center text-slate-400 hover:text-brand-400 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> 返回品牌库
      </Link>
      
      <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Huge background number */}
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

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Cpu className="w-6 h-6 mr-2 text-brand-400" />
                推荐理由与核心定位
              </h2>
              <div className="prose prose-invert max-w-none text-slate-300">
                <p><strong>推荐理由：</strong>{airport.recommendationReason}</p>
                <p><strong>核心原因：</strong>{airport.coreReason}</p>
                <p><strong>适用人群：</strong>{airport.suitableFor}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <CheckCircle2 className="w-6 h-6 mr-2 text-brand-400" />
                特色功能
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {airport.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-slate-300 bg-white/5 px-4 py-3 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {airport.faq && airport.faq.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">常见问题 FAQ</h2>
                <div className="space-y-4">
                  {airport.faq.map((q, i) => (
                    <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-2xl">
                      <h3 className="text-lg font-bold text-white mb-2">Q: {q.question}</h3>
                      <p className="text-slate-400">A: {q.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <Link 
              href={airport.affiliateUrl} 
              target="_blank" 
              rel="nofollow noopener noreferrer"
              className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center w-full sm:w-auto"
            >
              前往 {airport.name} 官网 <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
            {airport.coupon && airport.coupon !== "暂无" && airport.coupon !== "暂无优惠码" && (
              <div className="px-8 py-4 bg-purple-500/10 border border-purple-500/30 text-purple-200 font-bold rounded-xl w-full sm:w-auto text-center">
                专属优惠码：<span className="font-mono text-white select-all">{airport.coupon}</span>
              </div>
            )}
          </div>

        </div>
      </div>
    </article>
  );
}
