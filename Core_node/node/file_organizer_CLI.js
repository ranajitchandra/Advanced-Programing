
const { log } = require("console");
const fs = require("fs")

const path = require("path")

const sourceDir = path.join(__dirname, "organizerFolder", "file")
const organizerDir = path.join(__dirname, "organizerFolder", "organize")


console.log(__dirname);
console.log("Source dir ", sourceDir);
console.log(organizerDir);

const fileCategories = {
    audio: ["mp3", "wav", "aac", "flac", "ogg"],
    archive: ["zip", "rar", "7z", "tar", "gz"],
    code: ["js", "ts", "py", "java", "cpp", "html", "css"],
    document: ["pdf", "doc", "docx", "txt", "rtf"],
    image: ["jpg", "jpeg", "png", "gif", "webp", "svg"],
    other: [],
    spreadsheet: ["xls", "xlsx", "csv", "ods"],
    video: ["mp4", "mov", "avi", "mkv", "webm"],
};

const testFile = [
    "photo.jpg",
    "logo.png",
    "resume.pdf",
    "notes.txt",
    "movie.mp4",
    "clip.webm",
    "song.mp3",
    "recording.wav",
    "script.js",
    "style.css",
    "archive.zip",
    "backup.tar",
    "sheet.xlsx",
    "data.csv",
    "unknownfile.xyz"
]

function dir() {
    if (!fs.existsSync(sourceDir)) {
        fs.mkdirSync(sourceDir, { recursive: true })

        testFile.forEach(file => {
            // const filePath = path.join(sourceDir, file)
            fs.writeFileSync(path.join(sourceDir, file), "content of " + file) // path.join(sourceDir, filePath, content of file inside)
        })
    }
    console.log("File folder create of inside organizerFolder > file");

    Object.keys(fileCategories).forEach(cat => {
        const newCatPath = path.join(organizerDir, "org", cat)
        if (!fs.existsSync(newCatPath)) {
            fs.mkdirSync(newCatPath, { recursive: true })
        }
        fs.writeFileSync(path.join(newCatPath, "it_is_content.txt"), `This folder ok ok is for ${cat} files`)
    })
    console.log("Organize folder create of inside organizerFolder > organize");

}
dir()


function getCategory(filename) {
    const ext = path.extname(filename).toLowerCase()

    for(let [catName, extName] of Object.entries(fileCategories)) {
        if(extName.includes(ext)){
            return catName
        }
    }
    return "other"
}

function organizeFiles() {
    console.log("file orgernizer");
    console.log("source Dir--", sourceDir);
    console.log("distenation--", organizerDir);
    console.log("\n" + "-".repeat(20) + "\n");
    
    const files = fs.readdirSync(sourceDir)

    if(files.length === 0){
        console.log("No Files to work on!!");
        return
    }
    console.log(`found ${files.length} files to organize \n`);

    const stats = {
        total : 0,
        byCategory : {}
    }
    files.forEach(file => {
        const filePath = path.join(sourceDir, file)
        const stat =fs.statSync(filePath)

        if(stat.isDirectory()){
            return
        }
        const category = getCategory(file)
        const destDir = path.join(organizerDir, "org", category)
        const destPath = path.join(destDir, file)

        fs.copyFileSync(filePath, destPath)

        stats.total += 1
        stats.byCategory[category] = (stats.byCategory[category] || 0) + 1

        log(`Copied ${file} to ${category} folder`)
    })
}


function showHelp(){
    console.log(` file organizer - usage: 
        commands: init - create files 
        organize - organize file into categorys
        
        example: node file_organizer.js init
        node file_organizer.js organize
        `);    
}


const command = process.argv[2];

switch (command) {
    case "init":
        dir();
        break;
    case "organize":
        organizeFiles();
        break;
        default:
        showHelp();
        break;
}


