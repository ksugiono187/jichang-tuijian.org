const fs = require('fs');
const content = fs.readFileSync('data/airports.ts', 'utf-8');
const tags = [...content.matchAll(/tag:\s*"([^"]+)"/g)].map(m => m[1]);
if (tags.length !== 29) {
  console.log('Found ' + tags.length + ' tags');
} else {
  const duplicates = tags.filter((e, i, a) => a.indexOf(e) !== i);
  if (duplicates.length > 0) {
    console.log('Duplicates: ' + duplicates.join(', '));
  } else {
    console.log('All unique');
  }
}
