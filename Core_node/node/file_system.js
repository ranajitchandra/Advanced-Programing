
console.clear();


// console.log("node version", process.version);
// console.log("Platform", process.platform);

const args = process.argv;

const name = args[2] || "guest";
const time =  new Date().getHours();
let greeting;
if(time <12){
    greeting = "Good mornig"
}else if(time< 18){
greeting = "good afternoon"
}else{
    greeting = "good evening"
}

const { log, error } = require("console");
// console.log(greeting, name);


// ----------------------------------------

const fs = require("fs")

const data = fs.readFileSync("./data.txt", "utf-8") // read file
// console.log(data);
fs.readFile("./data.txt", "utf-8", (error, data) => {
    if(error){
        // console.log(error);
    }
    // console.log(data);
})
// console.log("last seen");

const content1 = "this is content \n node is awesome"

try{
    fs.writeFileSync("./folder/test-sync.tnx", content1) // folder must have in root directory
}catch(err){
console.log(err);

}

fs.writeFileSync("./folder/test.txt", "i am new text \n") // manual create
fs.appendFileSync("./folder/test.txt", "i am new text222") // manual append create


// delete file--sync------------

fs.writeFileSync("./folder/temp.txt", "This is a temp file")

if(fs.existsSync("./folder/temp.txt")){
    console.log("file exits");
    fs.unlinkSync("./folder/temp.txt")
    console.log("deleted");
}


// if not exits then error
try {
    fs.unlinkSync("./folder/temp.txt")
} catch (error) {
    console.log(error.message);
}


// delete file--async------------
fs.writeFile("./folder/temp2.txt", "another This is a temp file", (err)=>{

    if(err) return console.error(err.message);
    fs.unlink("./folder/temp2.txt", (err)=>{
        if(err){
            console.error(err.message);
        }else{
            console.log("temp2 deleted");
            
        }
    })
    
})

