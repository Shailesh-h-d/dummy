const path = require('path');

console.log(path.dirname('dkjfnjk'));

for(let keys of Object.keys(path)) {
    console.log(keys);
}
console.log(path.normalize(path.resolve()));
;
const path1 = path.join('./content', './subFolder', 'text.txt');
console.log(path1);
console.log(path.basename(path1));
console.log(__dirname);
console.log(path.resolve(__dirname, './content', './subFolder', './text.txt'));