let fs =require("fs")
let path= require("path")

let dirPAth=path.join(__dirname,"..","unorganised")
let content= fs.readdirSync(dirPAth)
let ext=[]
for( let i = 0; i<content.length ;i++ )
{  let name =path.extname(content[i])
   ext.push(name)
}
console.log(ext)
