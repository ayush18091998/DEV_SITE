let fs=require("fs")
let path= require("path")
// filepath will simply store a string having dir and filename 
let filepath= path.join(__dirname,"file.txt")  
console.log(filepath)

fs.writeFileSync(filepath,"Hello world")

console.log("before Update")
let content=fs.readFileSync(filepath,"utf-8")
console.log(content)

fs.appendFileSync(filepath," ,added content is xyz")
console.log("After update")
content=fs.readFileSync(filepath,"utf-8")
console.log(content)

fs.unlinkSync(filepath)