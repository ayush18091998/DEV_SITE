let fs= require("fs")
let path =require("path")

//let srcPath = path.join()
let dstPath =path.join(__dirname , "newfolder","newfile.txt")

fs.copyFileSync("newfile.txt",dstPath)

fs.unlinkSync("newfile.txt")