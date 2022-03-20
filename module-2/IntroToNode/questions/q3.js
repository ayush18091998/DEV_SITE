let fs = require("fs")
let path = require("path")


let sourcePath=path.join(__dirname,"..","..","..","module-1","index.html")
let destPath=path.join(__dirname,"..","..","index.html")
console.log(destPath)
fs.copyFileSync(sourcePath,destPath)