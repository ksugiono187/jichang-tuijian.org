import Link from 'next/link';
import { Plane } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 max-w-6xl flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:opacity-80 transition">
          <Plane className="w-8 h-8" />
          <span className="text-xl font-bold tracking-tight">2026机场推荐指南</span>
        </Link>
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">首页推荐</Link>
          <Link href="#ranking" className="hover:text-blue-600 dark:hover:text-blue-400 transition">机场排行榜</Link>
          <Link href="#guide" className="hover:text-blue-600 dark:hover:text-blue-400 transition">选择指南</Link>
          <Link href="#faq" className="hover:text-blue-600 dark:hover:text-blue-400 transition">常见问题(FAQ)</Link>
        </nav>
      </div>
    </header>
  );
}
