const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, 'data/airports.ts');
let content = fs.readFileSync(p, 'utf-8');

const updates = [
  ['闪跃', 'shanyue'],
  ['星岛梦', 'nmw888'],
  ['唯兔云', 'rabbit'],
  ['U1S1', 'U1S1'],
  ['宇宙云', 'YUZHOU553']
];

for (const [name, coupon] of updates) {
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
