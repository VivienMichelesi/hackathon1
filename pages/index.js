import Head from "next/head";
import { ProductCardList } from "../components/ProductCard";
import { getAllProducts } from "../products";
import styles from "../styles/Home.module.css";

export default function Home({ products }) {
  return (
    <div className="container">
      <ProductCardList products={products} />
    </div>
  );
}

export function getStaticProps() {
  const products = getAllProducts();

  return {
    props: {
      products,
    },
  };
}
