const fs = require('fs');

// Fix FAQ Page
let faqPath = 'app/blog/airport-faq/page.tsx';
let faqContent = fs.readFileSync(faqPath, 'utf-8');

faqContent = faqContent.replace(
  '进行实际体验测试。',
  '进行实际体验测试。如果您还不了解具体的选择流程，请查看我们的 <Link href="/blog/airport-selection-guide" className="text-brand-400 hover:underline">机场选择指南</Link>。'
);

faqContent = faqContent.replace(
  '是否支持您所使用的设备协议。',
  '是否支持您所使用的设备协议。建议您直接前往 <Link href="/compare" className="text-brand-400 hover:underline">机场横向对比页面</Link> 查看详细的参数对比。'
);

faqContent = faqContent.replace(
  '退款规则。',
  '退款规则。在决定前，您可以浏览我们为您整理的 <Link href="/brands" className="text-brand-400 hover:underline">29 款优质机场推荐名单</Link>。'
);

faqContent = faqContent.replace(
  '再考虑升级为划算的年付套餐。',
  '再考虑升级为划算的年付套餐，购买前别忘了查看我们的 <Link href="/coupons" className="text-brand-400 hover:underline">机场优惠券大全</Link>。'
);

fs.writeFileSync(faqPath, faqContent);

// Fix Guide Page
let guidePath = 'app/blog/airport-selection-guide/page.tsx';
let guideContent = fs.readFileSync(guidePath, 'utf-8');

guideContent = guideContent.replace(
  '这通常是因为节点延迟高或 DNS 劫持导致。',
  '这通常是因为节点延迟高或 DNS 劫持导致。如果您在使用中遇到问题，可以查看我们的 <Link href="/blog/airport-faq" className="text-brand-400 font-bold hover:underline">机场常见问题解答 (FAQ)</Link>。'
);

fs.writeFileSync(guidePath, guideContent);

console.log('Internal links added successfully.');
