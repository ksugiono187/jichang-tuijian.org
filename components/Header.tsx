"use client";
import Link from 'next/link';
import { Network, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { href: "/", label: "首页" },
    { href: "/brands", label: "机场推荐" },
    { href: "/compare", label: "机场对比" },
    { href: "/coupons", label: "优惠券" },
    { href: "/blog", label: "博客" },
    { href: "/blog/airport-selection-guide", label: "指南" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 glass-panel border-b-0 border-white/5 shadow-2xl shadow-black/50">
      <div className="container mx-auto px-4 md:px-6 py-4 max-w-7xl flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-white hover:text-brand-400 transition-colors duration-300">
          <Network className="w-7 h-7 text-brand-500" />
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            2026机场推荐指南
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-medium text-slate-400">
          {links.map(link => (
            <Link key={link.href} href={link.href} className="hover:text-white transition-colors duration-200">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-t border-white/5 absolute w-full left-0 shadow-2xl">
          <nav className="flex flex-col space-y-4 px-6 py-6 text-sm font-medium text-slate-300">
            {links.map(link => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="hover:text-white transition-colors duration-200">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
