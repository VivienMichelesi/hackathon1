import axios from "axios";
import fs from "fs";
import path from "path";
import { getAllProducts } from "../products.js";

async function downloadFile(fileUrl, outputLocationPath) {
  const writer = fs.createWriteStream(outputLocationPath);

  return axios({
    method: "get",
    url: fileUrl,
    responseType: "stream",
  }).then((response) => {
    //ensure that the user can call `then()` only when the file has
    //been downloaded entirely.

    return new Promise((resolve, reject) => {
      response.data.pipe(writer);
      let error = null;
      writer.on("error", (err) => {
        error = err;
        writer.close();
        reject(err);
      });
      writer.on("close", () => {
        if (!error) {
          resolve(true);
        }
        //no need to call the reject here, as it will have been called in the
        //'error' stream;
      });
    });
  });
}

async function main() {
  const products = getAllProducts();

  await Promise.all(
    products.map((product) =>
      downloadFile(
        product.imageUrl,
        path.join(
          process.cwd(),
          "/public/images/products/",
          `${product.slug}.${product.imageUrl.split(".").pop()}`
        )
      )
    )
  );

  products.forEach((product) => {
    product.image = `/images/products/${product.slug}.${product.imageUrl
      .split(".")
      .pop()}`;
  });

  console.log(JSON.stringify(products));
}
main();
