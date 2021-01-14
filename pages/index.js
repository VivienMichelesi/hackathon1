import { ProductCardList } from "../components/ProductCard";
import { getAllProducts } from "../products";

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
