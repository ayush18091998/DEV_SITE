let givenfolderPath = process.argv[2]; // givenfolderpath= "path till input folder"
let fs=require("fs")
let path=require("path")
let is_folder= fs.existsSync(givenfolderPath)
let extension ={
    Audio : [".mp3"],
    Video : [".mp4",".mkv"],
    Image : [".jpg",".jpeg",".gif",".png"],
    Documents :[ ".doc",".xlsx",".pdf",".txt"],
    Software :[".exe"]

}

if(is_folder)
{
  let files = fs.readdirSync(givenfolderPath)// files-->list of files
  for(let i=0;i<files.length;i++){

  let ext=path.extname(files[i]) //file[i]-->  name of file
  let  foldername= classifyfolder(ext) // dowloads->new folder
  let folderpath  = path.join(givenfolderPath,foldername)
  if(!fs.existsSync(folderpath)) fs.mkdirSync(folderpath)
  movefile(givenfolderPath,folderpath,files[i])

  }
}
else{
    console.log("please enter a valid path!!!")
}
function movefile(givenfolderPath , folderpath ,filename){
        let srcPath = path.join(givenfolderPath,filename)
        let dstpath = path.join( folderpath,filename)
        fs.copyFileSync(srcPath,dstpath)
        fs.unlinkSync(srcPath)
}
function classifyfolder(ext)
{
    for(let key in extension)
    {
        let ele= extension[key]
        for ( let i=0 ;i<ele.length ; i++)
        {
            if(ele[i]==ext) return key
            
        }
         
    }
    return "Others"
}



