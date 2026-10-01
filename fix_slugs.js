const fs = require('fs');

const airportsContent = fs.readFileSync('data/airports.ts', 'utf-8');
const brandRegex = /name:\s*['"`](.*?)['"`],[\s\S]*?slug:\s*['"`](.*?)['"`]/g;
let brandDict = {};
let match;
while ((match = brandRegex.exec(airportsContent)) !== null) {
  brandDict[match[1]] = match[2];
}

let content = fs.readFileSync('data/blogs.ts', 'utf-8');

const dict = {
  ...brandDict,
  '2026机场推荐': 'airport-recommendation-2026',
  '机场推荐怎么选': 'how-to-choose-airport',
  '机场推荐': 'airport-recommendation',
  '便宜机场推荐': 'cheap-airport-recommendation',
  '高流量机场推荐': 'high-traffic-airport',
  '稳定机场推荐': 'stable-airport-recommendation',
  '新手机场推荐': 'beginner-airport-guide',
  '长期使用机场推荐': 'long-term-airport',
  '两类机场服务': 'airport-types-comparison',
  '有什么区别': 'difference',
  '怎么比较': 'how-to-compare',
  '价格': 'price',
  '流量': 'traffic',
  '线路': 'route',
  '对比': 'compare',
  '知识教程': 'tutorial',
  '什么是机场': 'what-is-airport',
  '机场节点': 'airport-node',
  '节点': 'node',
  '是什么意思': 'meaning',
  '是什么': 'what-is',
  '倍率': 'multiplier',
  '为什么': 'why',
  '速度': 'speed',
  '变慢': 'slow',
  '连不上': 'connection-issue',
  '如何测试': 'how-to-test',
  '怎么使用': 'how-to-use',
  '添加': 'add',
  '导入': 'import',
  '订阅': 'subscription',
  '突然无法连接': 'sudden-connection-drop',
  '打不开': 'cannot-open',
  '失效': 'invalid',
  '怎么办': 'solution',
  '测速': 'speed-test',
  '实际使用': 'actual-usage',
  '晚上': 'night',
  '异常消耗': 'abnormal-consumption',
  '更新失败': 'update-failed',
  '选择指南': 'selection-guide',
  '指南': 'guide',
  '深度评测': 'review',
  '全面解析': 'full-analysis',
  '配置': 'config',
  '晚高峰': 'peak-hours',
  '最新优惠码': 'latest-coupon',
  '套餐购买': 'plan-purchase',
  '其他机场': 'other-airports',
  'IEPL': 'iepl',
  'IPLC': 'iplc',
  'BGP': 'bgp',
  'Clash': 'clash',
  'sing-box': 'sing-box',
  'Shadowrocket': 'shadowrocket',
  'Windows': 'windows',
  'macOS': 'macos',
  'iPhone': 'iphone',
  'Android': 'android',
  '路由器': 'router',
  '机场': 'airport'
};

function generateSlug(title) {
  let slug = title.toLowerCase();
  
  for (const [zh, en] of Object.entries(dict)) {
    if(zh.trim() === '') continue;
    const regex = new RegExp(zh, 'gi');
    slug = slug.replace(regex, `-${en}-`);
  }

  slug = slug.replace(/[^a-z0-9-]/g, '-');
  slug = slug.replace(/-+/g, '-');
  slug = slug.replace(/^-+|-+$/g, '');

  return slug;
}

const lines = content.split('\n');
let currentTitle = '';
let seenSlugs = {};

for (let i = 0; i < lines.length; i++) {
  // match "title": "..." or title: "..."
  const titleMatch = lines[i].match(/"?title"?:\s*["'](.*?)["']/);
  if (titleMatch) {
    currentTitle = titleMatch[1];
  }
  
  if (lines[i].includes('"slug":') || lines[i].includes('slug:')) {
    if (currentTitle) {
      let newSlug = generateSlug(currentTitle);
      if (!newSlug || newSlug.length < 3) {
         newSlug = 'article-' + Math.random().toString(36).substr(2, 6);
      }
      
      if (seenSlugs[newSlug]) {
        seenSlugs[newSlug]++;
        newSlug = `${newSlug}-${seenSlugs[newSlug]}`;
      } else {
        seenSlugs[newSlug] = 1;
      }

      lines[i] = lines[i].replace(/"?slug"?:\s*["'].*?["']/, `"slug": "${newSlug}"`);
      currentTitle = ''; 
    }
  }
}

fs.writeFileSync('data/blogs.ts', lines.join('\n'), 'utf-8');
console.log('Slugs regenerated perfectly with brands and semantics.');
