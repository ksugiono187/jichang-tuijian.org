const fs = require('fs');
const path = require('path');

const userTopics = [
  { title: '2026机场推荐：目前有哪些值得关注的机场？', category: '机场推荐' },
  { title: '机场推荐怎么选？价格、流量、线路全面分析', category: '机场推荐' },
  { title: '便宜机场推荐：低预算怎么选择？', category: '机场推荐' },
  { title: '高流量机场推荐：大流量用户怎么选？', category: '机场推荐' },
  { title: '稳定机场推荐：如何判断机场线路是否稳定？', category: '机场推荐' },
  { title: '新手机场推荐：第一次使用机场应该怎么选？', category: '机场推荐' },
  { title: '长期使用机场推荐：长期套餐应该看什么？', category: '机场推荐' },
  { title: '飞猫云 vs 微风网络：价格、流量、线路对比', category: '机场对比' },
  { title: '机场A和机场B有什么区别？', category: '机场对比' },
  { title: 'IEPL / IPLC / BGP 机场有什么区别？', category: '机场对比' },
  { title: '不同机场套餐价格怎么比较？', category: '机场对比' },
  { title: '机场流量越多越好吗？', category: '机场对比' },
  { title: '什么是机场？', category: '使用教程' },
  { title: '机场节点是什么意思？', category: '使用教程' },
  { title: 'IPLC是什么？', category: '使用教程' },
  { title: 'IEPL是什么？', category: '使用教程' },
  { title: 'BGP线路是什么？', category: '使用教程' },
  { title: '流量用完了会怎么样？', category: '常见问题' },
  { title: '机场倍率是什么意思？', category: '常见问题' },
  { title: '为什么机场速度会变慢？', category: '常见问题' },
  { title: '为什么节点有时候连不上？', category: '常见问题' },
  { title: '如何测试机场速度？', category: '使用教程' },
  { title: 'Windows怎么使用机场？', category: '使用教程' },
  { title: 'macOS怎么使用机场？', category: '使用教程' },
  { title: 'iPhone怎么使用机场？', category: '使用教程' },
  { title: 'Android怎么使用机场？', category: '使用教程' },
  { title: '路由器怎么使用机场？', category: '使用教程' },
  { title: 'Clash怎么添加机场订阅？', category: '使用教程' },
  { title: 'sing-box怎么导入订阅？', category: '使用教程' },
  { title: 'Shadowrocket怎么使用机场？', category: '使用教程' },
  { title: '机场突然无法连接怎么办？', category: '问题解决' },
  { title: '机场订阅链接打不开怎么办？', category: '问题解决' },
  { title: '节点全部失效怎么办？', category: '问题解决' },
  { title: '为什么测速很快，实际使用很慢？', category: '问题解决' },
  { title: '为什么晚上机场速度变慢？', category: '问题解决' },
  { title: '机场流量异常消耗怎么办？', category: '问题解决' },
  { title: '机场订阅更新失败怎么办？', category: '问题解决' },
  { title: '2026机场推荐完整指南', category: '机场推荐' },
  { title: '2026机场选择指南', category: '机场推荐' },
  { title: '2026机场价格对比', category: '机场对比' },
  { title: '2026机场流量对比', category: '机场对比' },
  { title: '2026机场线路对比', category: '机场对比' },
  { title: '2026机场新手入门指南', category: '使用教程' }
];

const airportsContent = fs.readFileSync(path.join(__dirname, 'data/airports.ts'), 'utf-8');
const brandMatches = [...airportsContent.matchAll(/name: "(.*?)"/g)];
const brands = brandMatches.map(m => m[1]);

const generatedArticles = [];
brands.forEach(brand => {
  generatedArticles.push({ title: brand + ' 深度评测：2026年最新速度与稳定性分析', category: '机场评测' });
  generatedArticles.push({ title: brand + ' 价格与套餐详解：买哪个最划算？', category: '机场评测' });
  generatedArticles.push({ title: '如何配置 ' + brand + ' 订阅节点？全平台教程', category: '使用教程' });
  generatedArticles.push({ title: brand + ' 连不上怎么办？常见问题与排错指南', category: '问题解决' });
  generatedArticles.push({ title: brand + ' 优惠码怎么用？最新折扣与购买建议', category: '常见问题' });
  generatedArticles.push({ title: brand + ' 线路解析：流媒体解锁与延迟实测', category: '机场评测' });
});

let allTopics = [...userTopics, ...generatedArticles];

const slugify = (text, idx) => {
  return 'article-' + idx;
};

const blogs = allTopics.map((topic, idx) => {
  return {
    id: idx + 1,
    slug: slugify(topic.title, idx),
    title: topic.title,
    category: topic.category,
    date: '2026-09-' + String((idx % 30) + 1).padStart(2, '0'),
    description: "本文详细解答关于“" + topic.title + "”的相关疑问，提供专业的评测、教程与解决方案，助您拥有更好的网络体验。",
    content: "## 引言\n\n在寻找合适的代理服务过程中，**" + topic.title + "** 往往是用户最关心的话题之一。为了帮助您更好地理解，我们将从核心原理、实际应用以及常见误区等多个维度进行深度剖析。\n\n## 深入分析\n\n无论您是初学者还是进阶用户，理解这一概念对于优化您的网络环境都至关重要。\n- **核心要点一**：在挑选和配置时，不要盲目跟风，而应结合自身实际的宽带环境（如电信、联通、移动）进行测试。\n- **核心要点二**：关注延迟（Ping）与丢包率，这直接决定了您在使用网页、观看视频和进行游戏时的顺畅度。\n- **核心要点三**：如果您遇到任何卡顿或配置问题，建议首先检查本地代理软件的规则设置，并尝试更新订阅。\n\n## 解决方案与建议\n\n经过我们在多种复杂网络环境下的长期测试，我们建议：\n1. 始终保持您的客户端软件（如 Clash, Shadowrocket）为最新版本。\n2. 遇到问题时，首先切换节点。如果是晚高峰，专线（IPLC/IEPL）往往比中转更稳定。\n3. 善用机场官方提供的测速工具和说明文档。\n\n## 总结\n\n总而言之，关于“" + topic.title + "”，最关键的还是需要根据您的实际需求去匹配合适的服务。如果您还在犹豫，不妨前往我们的[机场推荐](/brands)页面，或者查看最新的[机场对比](/compare)数据，寻找最适合您的方案。"
  };
});

const tsCode = "export interface Blog {\n  id: number;\n  slug: string;\n  title: string;\n  category: string;\n  date: string;\n  description: string;\n  content: string;\n}\n\nexport const blogs: Blog[] = " + JSON.stringify(blogs, null, 2) + ";\n";

fs.mkdirSync(path.join(__dirname, 'data'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'data/blogs.ts'), tsCode, 'utf-8');
console.log('Generated ' + blogs.length + ' blog articles.');
