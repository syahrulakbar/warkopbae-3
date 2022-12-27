const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const target = path.resolve(__dirname, "src/public/images/heros");
const destination = path.resolve(__dirname, "dist/images/heros");

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  // mengubah ukuran gambar dengan lebar 1000px, dengan prefix -1000.jpg
  sharp(`${target}/${image}`)
    .resize(1000)
    .toFile(path.resolve(__dirname, `${destination}/${image.split(".").slice(0, -1).join(".")}-1000.jpg`));

  sharp(`${target}/${image}`)
    .resize(1000)
    .toFile(path.resolve(__dirname, `${destination}/${image.split(".").slice(0, -1).join(".")}-1000.webp`));

  // mengubah ukuran gambar dengan lebar 400px, dengan prefix -400.jpg
  sharp(`${target}/${image}`)
    .resize(400)
    .toFile(path.resolve(__dirname, `${destination}/${image.split(".").slice(0, -1).join(".")}-400.jpg`));

  sharp(`${target}/${image}`)
    .resize(400)
    .toFile(path.resolve(__dirname, `${destination}/${image.split(".").slice(0, -1).join(".")}-400.webp`));
});
