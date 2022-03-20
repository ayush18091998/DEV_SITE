let loc= require('path');
//console.log(loc)

let extenName= loc.extname("C:\Users\dell\OneDrive\Desktop\FJP-6\module-1\index.html")
console.log(extenName)

let baseName = loc.basename(__filename)
console.log(baseName);


let dirPath = __dirname;
console.log(dirPath);

let newFilePath = loc.join(dirPath,"test.js");
console.log(newFilePath);