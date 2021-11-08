const fs = require("fs");
const path = require("path");
const sourceStyles = path.join(__dirname, "styles");
const bundleFile = path.join(__dirname, 'project-dist', "bundle.css");

fs.readdir(sourceStyles, function (err, items) {
    if (err) throw err;

let writeableStream = fs.createWriteStream(bundleFile);

    for (const item of items) {
        if(path.extname(item) === '.css') {
        fs.createReadStream(path.resolve(sourceStyles, item)).pipe(writeableStream);
        } 
  }
})