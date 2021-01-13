import Link from "next/link";
import styles from "../styles/ProductCard.module.css";

export function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.slug}`}>
      <a className={styles.link} title="Voir le produit">
        <article className={styles.card}>
          <figure className={styles.figure}>
            <img className={styles.image} src={product.image} alt="" />
            <figcaption className={styles.figureCaption}>
              <h2 className={styles.name}>{product.name}</h2>
              <strong className={styles.price}>{product.price} €</strong>
              <span className={styles.category}>{product.category}</span>
            </figcaption>
          </figure>
        </article>
      </a>
    </Link>
  );
}

export function ProductCardList({ products }) {
  return (
    <ul className={styles.list}>
      {products.map((product) => (
        <li key={product.id} className={styles.listItem}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
