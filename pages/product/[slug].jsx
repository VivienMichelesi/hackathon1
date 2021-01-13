import { ProductJsonLd } from "next-seo";
import { NextSeo } from "next-seo";
import { getAllProducts, getProductBySlug } from "../../products";

export default function Product({ product }) {
  return (
    <article>
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
    </article>
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
