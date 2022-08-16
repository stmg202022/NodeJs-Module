const fs = require("fs");



//==============================
// How to make directory and file and remove it ?


// if(!fs.existsSync("./makefolder")){

//     //make folder 
//     fs.mkdir("./makefolder", (err) =>{

//         if(err){
//             console.log(err);
    
//         }else{
//             console.log("folder create sucessfully.");
//         }
        
//     });
// }else{

//     // remove folder
//     fs.rmdir("./makefolder", (err) =>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log("Remove folder sucessfully");
//         }
//     })
// }




// if(!fs.existsSync("./filelist/deleteme.txt")){
    

//     // creating file:
//     fs.writeFile("./filelist/deleteme.txt", "this is deleteme folder", (err) =>{

//         if(err) throw new err;

//         console.log("file created sucessfully.");
//     })
// }else{
    
//     //reading file
//     fs.readFile("./filelist/deleteme.txt", (err, data) =>{
//         if(err) throw new err;
    
//         console.log(data.toString());
//     })


//     //deleting file
//     fs.unlink("./filelist/deleteme.txt", (err) =>{
        
//         if(err) throw new err;
//     })

// }




//================Read file=======================
// fs.readFile("find.txt", "utf8", (err,data) => {

//     console.log(err, data);
// })

// const a = fs.readFileSync("find.txt");
// console.log(a.toString());

//===========================Write file ===============

// fs.writeFile("file2.txt", "This is a data...", ()=>{
//     console.log("written to file2.txt.");
// })

// const b = fs.writeFileSync("file2.txt", "This is a file2");
// console.log(b);
 
// console.log("Finish reading File");



