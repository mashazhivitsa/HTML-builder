const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, 'secret-folder');

fs.readdir(path.resolve(dirPath), function(err, items) {
 if (err) throw err;

for (const item of items) {
    fs.lstat(path.resolve(dirPath, item), function(err, stats) {
        if (err) throw err;

        if(stats.isFile()) {
            console.log(`${path.basename(item, path.extname(item))} - ${path.extname(item)} - ${stats.size} bytes`);
        }
    })
}
})

