let fs= require("fs")
let path =require("path")

let arr=["audio","video","image","software","documents","applications","other"]
let files = ["abc ","das","asd","egg"]
let ext=[".mp3",".mp4",".jpg",".exe",".pdf",".apk",".rar"]
if(!fs.existsSync("organise"))
fs.mkdirSync("organise")

for(let i=0 ;i<arr.length ;i++)
{
    let dirpath=path.join(__dirname,"organise",arr[i])
    
    if(!fs.existsSync(dirpath))
    fs.mkdirSync(dirpath)
    for( let j=0 ; j<files.length ; j++)
    {   
        let filename=files[j]+ext[i]
        let filekapath=path.join(dirpath,filename)
        fs.writeFileSync(filekapath,"hello world")
    }


}


