const fs=require('fs');
//read file
//fs.readFile('text.txt','utf8',(err,data)=>{
 //   if(err){
       // console.log('Eroor reading file:',err);
  //  }
  //  console.log('File content:',data);
//})

//write file
// fs.writeFile('data.txt','Joshitha Upati',(err)=>{
//     if(err){
//         console.error('Error writing file:',err);
//     }
//     console.log('File written successfully');
// }

//append file
// fs.appendFile('data.txt','\n Lalith Kumar',(err)=>{
//     if(err){
//         console.error('Error appending to file:',err);
//     }
//     console.log('File appended successfully');
// })

//DELETING FILE
// fs.unlink('data.txt',(err)=>{
//     if(err){
//         console.log('Error deleting file:',err);
//     }
//     console.log('File deleted successfully');
// })

//renaming file
fs.rename('text.txt','newtext.txt',(err)=>{
    if(err){
        console.error('Error renaming file:',err);
    }
    console.log('File renamed successfully');
})