let fs= require("fs")

if(!fs.existsSync("hamaridirectory"))
fs.mkdirSync("hamaridirectory")

let path =require("path")

let DirPath=path.join(__dirname,"hamaridirectory","new file.txt")
fs.writeFileSync(DirPath,"this is a new file")
 