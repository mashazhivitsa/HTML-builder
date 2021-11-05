const fs = require("fs");
const path = require("path");
const readline = require("readline");
const filePath = path.join(__dirname, "text.txt");

let writeableStream = fs.createWriteStream(filePath);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const saveMsgInToFile = (userInput) => {
    if (userInput.toUpperCase() === 'EXIT') {
        rl.close();
    } else {
        writeableStream.write(`${userInput} \n`)
    }
};

console.log(`Please enter your text line: \n`);

rl.on("line", saveMsgInToFile);

rl.on("close", () => {
  console.log("Your text has been successfully written to the file!");
});
