const fs = require("fs/promises");
const path = require("path");

const sourceDirectory = path.join(__dirname, "files");
const targetDirectory = path.join(__dirname, "files-copy");

async function copyDir() {
    try {
        // create tg dir
        await fs.mkdir(targetDirectory, { recursive: true });
        // read tg dir
        const targetItems = await fs.readdir(targetDirectory);
        console.log(targetItems)
        // clear tg dir
        if (targetItems.length) {
            await Promise.all(targetItems.map(async (tgItem) => fs.unlink(path.resolve(targetDirectory, tgItem))));
        }
        console.log(targetItems)

        // copy sr to tg
        const sourceItems = await fs.readdir(sourceDirectory);
        console.log(sourceItems)

        await Promise.all(sourceItems.map(async (srItem) => fs.copyFile(path.resolve(sourceDirectory, srItem),
        path.resolve(targetDirectory, srItem))));
    } catch (err) {
        throw err;
    }
}

copyDir();