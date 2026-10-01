import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-32 flex flex-col items-center justify-center min-h-[70vh] text-center animate-fade-in-up">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-500/20 blur-[100px] rounded-full pointer-events-none"></div>
      
      <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-6">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10">
        页面未找到或已转移
      </h2>
      <p className="text-slate-400 max-w-lg mb-10 text-lg relative z-10">
        您访问的机场评测或博客页面可能已经被更新、转移或删除。没关系，您可以通过以下入口找到最新内容：
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 relative z-10">
        <Link href="/" className="px-8 py-4 rounded-full bg-brand-600 text-white font-bold hover:bg-brand-500 transition-colors flex items-center justify-center">
          <ArrowLeft className="w-5 h-5 mr-2" />
          返回首页
        </Link>
        <Link href="/brands" className="px-8 py-4 rounded-full bg-white/5 text-slate-300 font-bold border border-white/10 hover:bg-white/10 transition-colors text-center">
          查看 2026 机场推荐库
        </Link>
      </div>
    </div>
  );
}
