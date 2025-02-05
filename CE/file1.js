 const fs = require('fs');
// const data = fs.readFileSync("./data.txt");
// console.log(data.toString())
fs.writeFileSync("./data.txt","ce promises");
fs.appendFileSync("./data.txt","aktu")
fs.renameSync("./data.txt","data2.txt")