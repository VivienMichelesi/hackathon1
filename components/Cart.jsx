import { useContext, useMemo } from "react";
import CartContext from "../contexts/CartContext";
import styles from "../styles/Cart.module.css";

export default function Cart() {
  const { openPanel, setOpenPanel, products, add, remove } = useContext(
    CartContext
  );

  const totalPrice = useMemo(
    () =>
      products
        ?.reduce((sum, product) => sum + product.price * product.quantity, 0)
        .toFixed(2),
    [products]
  );

  return (
    <div
      id="cart"
      className={`${styles.panel} ${openPanel ? styles.active : ""}`}
    >
      <button
        className={styles.closeButton}
        title="Fermer le panier"
        onClick={() => {
          setOpenPanel(false);
        }}
      >
        &times;
      </button>
      <h2 className={styles.title}>Votre panier</h2>

      <ul suppressHydrationWarning={true}>
        {products?.length === 0
          ? "Votre panier est vide :("
          : products?.map((product) => (
              <li key={product.id}>
                <article className={styles.cartProduct}>
                  <img
                    className={styles.image}
                    src={/* require(`../public*/ `${product.image}?webp`}
                    alt=""
                  />
                  <h3 className={styles.name}>{product.name}</h3>
                  <strong className={styles.price}>{product.price}€</strong>

                  <button
                    className={styles.minus}
                    onClick={() => {
                      remove(product.id);
                    }}
                  >
                    -
                  </button>
                  <span className={styles.quantity}>{product.quantity}</span>
                  <button
                    className={styles.plus}
                    onClick={() => {
                      add(product);
                    }}
                  >
                    +
                  </button>
                </article>
              </li>
            ))}
      </ul>

      <strong suppressHydrationWarning={true}>Total : {totalPrice}€</strong>
    </div>
  );
}
