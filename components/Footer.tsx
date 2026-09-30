import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/80 backdrop-blur-md mt-24 py-12">
      <div className="container mx-auto px-6 max-w-7xl text-center text-slate-500 text-sm space-y-6">
        <p className="max-w-2xl mx-auto">本站致力于提供最新、最客观的机场推荐、机场对比与价格流分析，帮助您解决“机场推荐哪个比较好”的疑问。</p>
        <p>所列机场及优惠券信息仅供参考，购买前请以官网最新信息为准。</p>
        
        <div className="flex justify-center space-x-6">
          <Link href="/about" className="hover:text-white transition-colors">关于我们</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">隐私政策</Link>
          <Link href="/disclaimer" className="hover:text-white transition-colors">免责声明</Link>
        </div>

        <div className="pt-4 border-t border-white/5 w-1/2 mx-auto">
          <p>&copy; {new Date().getFullYear()} 机场推荐指南. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
