const fs = require('fs');
const path = require('path');
const readline = require('readline');
const filePath = path.join(__dirname, 'text.txt');

let writeableStream = fs.createWriteStream(filePath);

const rl = readline.createInterface({ input : process.stdin, 
                                     output : process.stdout
                                    });


rl.question(`Please enter your text line: \n`, (firstInput) => {
    if (firstInput.toUpperCase() === 'EXIT') {
        rl.close(); 
    } else {
        writeableStream.write(`${firstInput} \n`);
    }

    rl.on('line', (userInput) => {
        if (userInput.toUpperCase() === 'EXIT') {
            rl.close();
        } else {
            console.log(userInput);
            writeableStream.write(`${userInput} \n`);
        }
      });
})

rl.on('close', () => {
    console.log('Your text has been successfully written to the file!')
})


