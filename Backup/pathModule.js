// const path=require('path');

// console.log(__dirname);
// console.log(__filename);

//const filePath="/Users/joshv/OneDrive/NodeJS/app.js";
// console.log(path.basename(filePath));
// console.log(path.basename(filePath,'.js'));
// console.log(path.dirname(filePath));
// console.log(path.extname(filePath));
const path=require('path');
const fs=require('fs');
const filePath=path.join(__dirname,'data','info.txt');
fs.writeFileSync(filePath,"Hello form Node Js path Module");
const data=fs.readFileSync(filePath,'utf-8');
console.log(data);


