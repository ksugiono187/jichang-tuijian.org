const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, 'data/airports.ts');
let content = fs.readFileSync(p, 'utf-8');

const updates = [
  ['微风网络', 'weifeng90'],
  ['飞猫云', 'flycat888'],
  ['无忧链接', 'wuyou666'],
  ['闪跃 FlashLeap', 'shanyue'],
  ['Firefly机场', 'firefly'],
  ['星岛梦 StarDream', 'nmw888'],
  ['熊猫cloud', '88888'],
  ['光速云', 'jichangcha09'],
  ['唯兔云（V2云）', 'rabbit'],
  ['U1S1（有一说一）', 'U1S1'],
  ['全球云', 'tt88'],
  ['宇宙云 YuZhou', 'YUZHOU553']
];

for (const [name, coupon] of updates) {
  // Simple search and replace using string manipulation
  const startIdx = content.indexOf('name: "' + name + '"');
  if (startIdx === -1) {
    console.log('Could not find: ' + name);
    continue;
  }
  const couponStart = content.indexOf('coupon: "', startIdx);
  const couponEnd = content.indexOf('",', couponStart + 9);
  const currentCoupon = content.substring(couponStart + 9, couponEnd);
  
  if (currentCoupon !== coupon) {
    console.log('Updating ' + name + ' coupon from ' + currentCoupon + ' to ' + coupon);
    content = content.substring(0, couponStart + 9) + coupon + content.substring(couponEnd);
  } else {
    console.log(name + ' already correct: ' + coupon);
  }
}

fs.writeFileSync(p, content, 'utf-8');
