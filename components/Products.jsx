import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { getAllProducts } from "../products2";
import styles from "../styles/Products.module.css";

export default function Products() {
  const products = getAllProducts();

  const [productsToDisplay, setProductsToDisplay] = useState(products);

  return (
    <div className="Products">
      <Head>
        <title>Liste de nos produits</title>
        <meta
          name="viewport"
          content="Cette page affiche l'ensemble des produits vendus sur notre site avec sa description, son prix et sa catégorie"
          key="Liste de nos produits"
        />
      </Head>
      <h1>Liste de nos produits</h1>
      <div>
        <button className={styles.btn} type="button">
          GADGET
        </button>
        <button className={styles.btn} type="button">
          APPLICATION
        </button>
      </div>
      <div className={styles.cardGroup}>
        {productsToDisplay.map((product) => (
          <div className={styles.card} key={products.id}>
            <img
              className={styles.img}
              src={product.image}
              alt={product.name}
            />
            <div>
              <h5 className={styles.cardTitle}>{product.name}</h5>
              <span className="category">{product.category}</span>
              <p className="description-text">{product.description}</p>
              <span className="price">{product.price}</span>
            </div>
            <Link href="">
              <a>Voir plus</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
