import { NextSeo } from "next-seo";
import { ProductCardList } from "../../components/ProductCard";
import { searchProducts } from "../../products";

export default function Shop({ products, category }) {
  return (
    <div className="container">
      <NextSeo title={`Nos produits ${category ? `(${category})` : ""}`} />

      <ProductCardList products={products} />
    </div>
  );
}

export function getServerSideProps({ params, query }) {
  const category = params.category?.[0] ?? null;

  const { query: searchQuery, sortProperty, sortDirection, level } = query;

  let sort = null;
  if (sortProperty != null && sortDirection != null) {
    sort = {
      property: sortProperty,
      direction: sortDirection,
    };
  }

  const products = searchProducts({
    query: searchQuery,
    category,
    sort,
    level,
  });

  return {
    props: {
      products,
      category,
    },
  };
}
