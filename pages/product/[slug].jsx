import { ProductJsonLd } from "next-seo";
import { NextSeo } from "next-seo";
import styles from "../../styles/Product.module.css";
import { getAllProducts, getProductBySlug } from "../../products";
import CartContext from "../../contexts/CartContext";
import { useContext } from "react";

export default function Product({ product }) {
  const { add } = useContext(CartContext);

  return (
    <main className={`container ${styles.product}`}>
      <NextSeo
        title={product.name}
        description={product.description}
        openGraph={{
          title: product.name,
          description: product.description,
          images: [
            {
              url: product.image,
            },
          ],
        }}
      />
      <ProductJsonLd
        productName={product.name}
        description={product.description}
        images={[product.image]}
        offers={{
          price: product.price,
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        }}
      />

      <h1 className={styles.title}>{product.name}</h1>
      <img
        className={styles.image}
        src={`../../public${product.image}?webp`}
        alt=""
      />
      <p className={styles.description}>{product.description}</p>
      <strong className={styles.price}>{product.price} €</strong>
      <button
        className={styles.buyButton}
        type="button"
        onClick={() => {
          add(product);
        }}
      >
        Ajouter au panier
      </button>
    </main>
  );
}

export async function getStaticPaths() {
  const products = getAllProducts();

  return {
    paths: products.map((product) => ({ params: { slug: product.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const { slug } = params;

  const product = getProductBySlug(slug);

  if (product == null) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      product,
    },
  };
}
