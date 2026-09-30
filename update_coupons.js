const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, 'data/airports.ts');
let content = fs.readFileSync(p, 'utf-8');

const updates = {
  '微风网络': 'weifeng90',
  '飞猫云': 'flycat888',
  '无忧链接': 'wuyou666',
  '闪跃 FlashLeap': 'shanyue',
  'Firefly机场': 'firefly',
  '星岛梦 StarDream': 'nmw888',
  '熊猫cloud': '88888',
  '光速云': 'jichangcha09',
  '唯兔云（V2云）': 'rabbit',
  'U1S1（有一说一）': 'U1S1',
  '全球云': 'tt88',
  '宇宙云 YuZhou': 'YUZHOU553'
};

for (const [name, coupon] of Object.entries(updates)) {
  const regex = new RegExp(\`(name: "\${name.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&')}",[\\\\s\\\\S]*?coupon: )"(.*?)"\`);
  const match = content.match(regex);
  if (match) {
    if (match[2] !== coupon) {
      console.log(\`Updating \${name} coupon from \${match[2]} to \${coupon}\`);
      content = content.replace(regex, \`$1"\${coupon}"\`);
    } else {
      console.log(\`\${name} already has correct coupon: \${coupon}\`);
    }
  } else {
    console.log(\`Could not find brand matching: \${name}\`);
  }
}

fs.writeFileSync(p, content, 'utf-8');
