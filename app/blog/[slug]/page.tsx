import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return {};
  return {
    title: `${blog.title} - 机场推荐指南`,
    description: blog.description,
    alternates: {
      canonical: `/blog/${slug}/`
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  
  if (!blog) {
    notFound();
  }

  // Simple markdown parser for the generated content
  const htmlContent = blog.content
    .replace(/\n\n/g, '</p><p>')
    .replace(/## (.*)/g, '<h2>$1</h2>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-brand-400 hover:underline">$1</a>')
    .replace(/- (.*)/g, '<li class="ml-4 list-disc">$1</li>');


  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://jichang-tuijian.org/" },
      { "@type": "ListItem", "position": 2, "name": "博客", "item": "https://jichang-tuijian.org/blog/" },
      { "@type": "ListItem", "position": 3, "name": blog.title }
    ]
  };

  return (
    <article className="container mx-auto max-w-3xl px-4 py-24 animate-fade-in-up">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="flex items-center text-sm text-slate-400 mb-8 overflow-x-auto hide-scrollbar">
        <Link href="/" className="hover:text-brand-400 whitespace-nowrap">首页</Link>
        <span className="mx-2 shrink-0">→</span>
        <Link href="/blog" className="hover:text-brand-400 whitespace-nowrap">博客知识库</Link>
        <span className="mx-2 shrink-0">→</span>
        <span className="text-slate-200 whitespace-nowrap truncate max-w-[200px] sm:max-w-xs">{blog.title}</span>
      </nav>
      
      <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
        <header className="mb-10 pb-10 border-b border-white/10">
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="flex items-center text-sm font-medium bg-brand-500/20 text-brand-400 px-3 py-1 rounded-full border border-brand-500/30">
              <Tag className="w-4 h-4 mr-1.5" /> {blog.category}
            </span>
            <span className="flex items-center text-sm text-slate-400">
              <Calendar className="w-4 h-4 mr-1.5" /> {blog.date}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            {blog.title}
          </h1>
        </header>

        <div 
          className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-brand-400 prose-strong:text-brand-300"
          dangerouslySetInnerHTML={{ __html: `<p>${htmlContent}</p>` }}
        />
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
           <Link href="/brands" className="inline-block px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
             前往机场推荐品牌库
           </Link>
        </div>
      </div>
    </article>
  );
}
