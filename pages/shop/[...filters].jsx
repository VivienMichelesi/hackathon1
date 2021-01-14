export default function Shop({ products }) {
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
