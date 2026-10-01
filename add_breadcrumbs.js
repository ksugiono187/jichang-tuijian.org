const fs = require('fs');

function addBreadcrumbs(filePath, pageType) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (pageType === 'brand') {
    // Add JSON-LD
    const jsonLdStr = `
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://jichang-tuijian.org/" },
      { "@type": "ListItem", "position": 2, "name": "机场推荐", "item": "https://jichang-tuijian.org/brands/" },
      { "@type": "ListItem", "position": 3, "name": airport.name }
    ]
  };`;

    if (!content.includes('const jsonLd')) {
      content = content.replace(
        '  const isLineDedicated',
        jsonLdStr + '\n\n  const isLineDedicated'
      );
    }

    // Replace the visual "返回品牌库" link with a full breadcrumb trail
    const visualBreadcrumb = `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="flex items-center text-sm text-slate-400 mb-8 overflow-x-auto hide-scrollbar">
        <Link href="/" className="hover:text-brand-400 whitespace-nowrap">首页</Link>
        <span className="mx-2 shrink-0">→</span>
        <Link href="/brands" className="hover:text-brand-400 whitespace-nowrap">机场推荐</Link>
        <span className="mx-2 shrink-0">→</span>
        <span className="text-slate-200 whitespace-nowrap">{airport.name}</span>
      </nav>`;

    if (content.includes('<Link href="/brands" className="inline-flex items-center text-slate-400 hover:text-brand-400 mb-8 transition-colors">')) {
      content = content.replace(
        /<Link href="\/brands" className="inline-flex items-center text-slate-400 hover:text-brand-400 mb-8 transition-colors">[\s\S]*?<\/Link>/m,
        visualBreadcrumb
      );
    }
  } else if (pageType === 'blog') {
    // Add JSON-LD
    const jsonLdStr = `
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://jichang-tuijian.org/" },
      { "@type": "ListItem", "position": 2, "name": "博客", "item": "https://jichang-tuijian.org/blog/" },
      { "@type": "ListItem", "position": 3, "name": blog.title }
    ]
  };`;

    if (!content.includes('const jsonLd')) {
      content = content.replace(
        '  return (',
        jsonLdStr + '\n\n  return ('
      );
    }

    // Replace visual back button with breadcrumb
    const visualBreadcrumb = `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="flex items-center text-sm text-slate-400 mb-8 overflow-x-auto hide-scrollbar">
        <Link href="/" className="hover:text-brand-400 whitespace-nowrap">首页</Link>
        <span className="mx-2 shrink-0">→</span>
        <Link href="/blog" className="hover:text-brand-400 whitespace-nowrap">博客知识库</Link>
        <span className="mx-2 shrink-0">→</span>
        <span className="text-slate-200 whitespace-nowrap truncate max-w-[200px] sm:max-w-xs">{blog.title}</span>
      </nav>`;

    if (content.includes('<Link href="/blog" className="inline-flex items-center text-slate-400 hover:text-brand-400 mb-8 transition-colors">')) {
      content = content.replace(
        /<Link href="\/blog" className="inline-flex items-center text-slate-400 hover:text-brand-400 mb-8 transition-colors">[\s\S]*?<\/Link>/m,
        visualBreadcrumb
      );
    }
  }

  fs.writeFileSync(filePath, content, 'utf-8');
}

addBreadcrumbs('app/brands/[slug]/page.tsx', 'brand');
addBreadcrumbs('app/blog/[slug]/page.tsx', 'blog');
console.log('Breadcrumbs added successfully.');
