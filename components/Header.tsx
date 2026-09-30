import Link from 'next/link';
import { Network } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass-panel border-b-0 border-white/5 shadow-2xl shadow-black/50">
      <div className="container mx-auto px-4 md:px-6 py-4 max-w-7xl flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-white hover:text-brand-400 transition-colors duration-300">
          <Network className="w-7 h-7 text-brand-500" />
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            2026机场推荐指南
          </span>
        </Link>
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
          <Link href="/" className="hover:text-white transition-colors duration-200">首页推荐</Link>
          <Link href="#ranking" className="hover:text-white transition-colors duration-200">品牌排行榜</Link>
          <Link href="#guide" className="hover:text-white transition-colors duration-200">选择指南</Link>
          <Link href="#faq" className="hover:text-white transition-colors duration-200">常见问题</Link>
        </nav>
      </div>
    </header>
  );
}
