const fs = require("fs")
const read = () => {
fs.readFile("./data.txt","utf-8", (error,data) => {
if(error) {
    console.log("error data")
}
else {
    console.log(data)
}
})}
module.exports = read;      