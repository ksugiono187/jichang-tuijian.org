export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-12 py-8">
      <div className="container mx-auto px-4 max-w-6xl text-center text-slate-500 dark:text-slate-400 text-sm space-y-4">
        <p>本站致力于提供最新、最客观的机场推荐、机场对比与价格流分析，帮助您解决“机场推荐哪个比较好”的疑问。</p>
        <p>所列机场及优惠券信息仅供参考，购买前请以官网最新信息为准。</p>
        <p>&copy; {new Date().getFullYear()} 机场推荐指南. All rights reserved.</p>
      </div>
    </footer>
  );
}
