import { blogs } from "@/data/blogs";
import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Search, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "机场推荐知识库与深度博客",
  description: "围绕机场推荐建立的完整内容体系。包含机场评测、线路解析、使用教程及防坑指南等200+专业文章。",
};

// Define the exact category order requested by the user
const categoryOrder = ["机场推荐", "机场对比", "机场评测", "使用教程", "问题解决", "常见问题"];

export default function BlogIndexPage() {
  // Group blogs by category
  const groupedBlogs = blogs.reduce((acc, blog) => {
    if (!acc[blog.category]) acc[blog.category] = [];
    acc[blog.category].push(blog);
    return acc;
  }, {} as Record<string, typeof blogs>);

  return (
    <div className="container mx-auto max-w-6xl px-4 py-24">
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">知识库与教程博客</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          这里不仅是简单的文章堆砌，而是为您精心整理的 <strong>机场推荐完整内容体系</strong>。从入门科普到高阶节点排错，解决您的所有疑惑。
        </p>
      </div>

      {/* Sticky Category Navigation */}
      <div className="sticky top-20 z-40 bg-slate-950/80 backdrop-blur-md border-b border-white/10 mb-12 -mx-4 px-4 py-4 sm:mx-0 sm:px-0 sm:rounded-2xl sm:border sm:bg-white/5 flex overflow-x-auto hide-scrollbar gap-2 sm:gap-4 justify-start sm:justify-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        {categoryOrder.map((category) => {
          if (!groupedBlogs[category] || groupedBlogs[category].length === 0) return null;
          return (
            <a 
              key={category} 
              href={`#${category}`}
              className="whitespace-nowrap px-4 py-2 rounded-xl text-sm font-medium text-slate-300 bg-white/5 hover:bg-brand-600 hover:text-white transition-all border border-white/5 hover:border-brand-500 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
            >
              {category} <span className="ml-1.5 opacity-60 text-xs">({groupedBlogs[category].length})</span>
            </a>
          );
        })}
      </div>

      <div className="space-y-24">
        {categoryOrder.map((category, idx) => {
          const categoryBlogs = groupedBlogs[category] || [];
          if (categoryBlogs.length === 0) return null;
          
          return (
            <section id={category} key={category} className="animate-fade-in-up scroll-mt-32" style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                <h2 className="text-3xl font-bold text-white flex items-center">
                  <BookOpen className="w-7 h-7 mr-3 text-brand-500" />
                  {category}
                  <span className="ml-4 text-sm font-medium bg-white/10 text-slate-400 px-3 py-1 rounded-full">
                    {categoryBlogs.length} 篇
                  </span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryBlogs.map((blog) => (
                  <Link href={`/blog/${blog.slug}`} key={blog.id} className="group block h-full">
                    <article className="glass-card h-full rounded-2xl p-6 border border-white/5 hover:border-brand-500/50 hover:bg-brand-900/10 transition-all duration-300">
                      <div className="text-xs text-brand-400 mb-3 font-mono">{blog.date}</div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
                        {blog.description}
                      </p>
                      <div className="flex items-center text-sm font-bold text-brand-500 group-hover:text-brand-400 mt-auto">
                        阅读全文 <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
