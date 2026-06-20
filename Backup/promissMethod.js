const fs=require('fs').promises
// fs.writeFile('data.txt','Hello form Node Js path Module')
// .then(()=>{
//     console.log('file written successfully');
// })
// .catch((err)=>{
//     console.error('Error writing file:', err);
// });
// fs.readFile('data.txt','utf-8')
// .then((data)=>{
//     console.log("file read successfully",data);
// })
// .catch((err)=>{
//     console.error('Error reading file:',err);
// })


// fs.appendFile("data.txt","\nThis is an appended line")
// .then(()=>{
//     console.log("File appended successfully");
// })
// .catch((err)=>{
//     console.log("Error appending file:",err);
// })

fs.unlink('data.txt')
.then(()=>{
    console.log("File deleted succesfully");
})
.catch((err)=>{
    console.error("Error deleting file:",err);
})
