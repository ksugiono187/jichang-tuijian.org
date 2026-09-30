const fs = require('fs');

let p1 = 'app/blog/[slug]/page.tsx';
let c1 = fs.readFileSync(p1, 'utf-8');
c1 = c1.replace(/\\\`/g, '`').replace(/\\\$/g, '$').replace(/\\\\/g, '\\');
fs.writeFileSync(p1, c1);

let p2 = 'app/blog/page.tsx';
let c2 = fs.readFileSync(p2, 'utf-8');
c2 = c2.replace(/\\\`/g, '`').replace(/\\\$/g, '$');
fs.writeFileSync(p2, c2);

console.log('Fixed syntax errors');
