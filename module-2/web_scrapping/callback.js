const fs= require("fs")
console.log("Before");

fs.readFile("file.txt",cb)
function cb(error, content )
{
    if(error) 
     console.log(error)

    else 
     console.log(content+" ")
}
console.log("After")