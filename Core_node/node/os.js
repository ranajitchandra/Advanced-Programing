

const os = require("os")
// console.log(os);
// console.log("platform", os.platform());
// console.log("architecture", os.arch());
// console.log("os type", os.type());
// console.log("os release", os.release());
// console.log("os hostname", os.hostname());
// console.log("os cpus", os.cpus());
// console.log("os length", os.cpus().length);
// console.log("os speed", os.cpus()[0].speed);
// console.log("os totalman", os.totalmem());
// console.log("os freeMam", os.freemem().toFixed(2));
// console.log(
//     "os uptime",
//     Math.floor(os.uptime() / 86400) + "d",
//     Math.floor((os.uptime() % 86400) / 3600) + "h",
//     Math.floor((os.uptime() % 3600) / 60) + "m"
// );
// console.log("free memory", (os.freemem() / os.totalmem() * 100).toFixed(2) + "%");
console.log("free memory", (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + "GB");

console.log("-".repeat(50));






