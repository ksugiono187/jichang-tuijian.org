const fs = require('fs');
let p = 'app/blog/airport-selection-guide/page.tsx';
let c = fs.readFileSync(p, 'utf-8');
let jsonStart = c.indexOf('const articleJsonLd');
let jsonEnd = c.indexOf('return (');
if (jsonStart !== -1 && jsonEnd !== -1) {
  let jsonPart = c.substring(jsonStart, jsonEnd);
  jsonPart = jsonPart.replace(/<Link href="[^"]+"[^>]*>(.*?)<\/Link>/g, '$1');
  c = c.substring(0, jsonStart) + jsonPart + c.substring(jsonEnd);
  fs.writeFileSync(p, c);
  console.log('Fixed Guide JSON-LD');
}
