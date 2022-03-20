let fs= require("fs")
let loc =require("path")
if(!fs.existsSync("hammariDirectory"))
 fs.mkdirSync("hammariDirectory")

 // read directory
 let folderPath= __dirname
 let contentOfFolder = fs.readdirSync(folderPath)
 console.log(contentOfFolder)

 // delete dir
 fs.rmdirSync("hammariDirectory")

 // copy file

 let sourcePath= loc.join(__dirname,"file.txt")
 let DestPath = loc.join(__dirname,"module","abc.txt")
 fs.copyFileSync(sourcePath,DestPath)
 
//fs.unlinkSync(DestPath)