const fs = require("fs");
const path = require("path");
const sourceDirectory = path.join(__dirname, "files");

fs.mkdir(path.join(__dirname, "files-copy"), { recursive: true }, (err) => {
  if (err) throw err;
})

const targetDirectory = path.join(__dirname, "files-copy");

fs.readdir(sourceDirectory, function (err, items) {
  if (err) throw err;

  for (const item of items) {
    fs.copyFile(
      path.resolve(sourceDirectory, item),
      path.resolve(targetDirectory, item),
      (err) => {
        if (err) throw err;
      }
    )
  }
})
