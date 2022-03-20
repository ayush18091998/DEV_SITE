let fs =require("fs")
let path =require("path")

let dirpath=path.join(__dirname,"..","unorganised")
let content=fs.readdirSync(dirpath)
console.log(content)
for( let i=0 ;i<content.length ; i++)
{ 
    let name =content[i]
    let ext =path.extname(name)
    if(ext==".jpg") console.log(ext + ": Image folder")
    else if (ext== ".mp3") console.log(ext+": audio folder")
    else if(ext == ".mp4") console.log(ext+": video folder")
    else if(ext==".doc"|| ext==".pdf"|| ext == ".xlsx") console.log(ext+": text folder")
    else console.log(ext+": other folder")
}