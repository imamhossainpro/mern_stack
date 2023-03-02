
//core module
//Path
const path = require('path');

const targetPath = "F:\Javascript Ninja\node_js\script.js"
const parsePath = (path.parse(__filename));
// console.log(path.parse(__dirname));
// console.log(parsePath.base);
// console.log(parsePath.dir);
// console.log(parsePath.name);
// console.log(parsePath.ext);
// console.log(parsePath.root)

//path format 

const pathFormat = (path.format({
    root: 'F:\\',
    dir: 'F:\\Javascript Ninja',
    base: 'node_js',
    ext: '',
    name: 'node_js'
}));

//path normalize
const wrongPath = "F:\Javascript Ninja/node_js\//script.js"
console.log(path.normalize(wrongPath))

//path join 

const join = path.join(__dirname, "node.txt");
console.log(join)