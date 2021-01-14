import { useCallback, useState } from "react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { ProductCardList } from "../../components/ProductCard";
import { getAllCategories, searchProducts } from "../../products";
import { useEffectAfterMount, debounce } from "../../utils";
import styles from "../../styles/Shop.module.css";

export default function Shop({ products, allCategories }) {
  const router = useRouter();

  const [category, setCategory] = useState(router.query.category?.[0] ?? "");
  const [searchQuery, setSearchQuery] = useState(router.query.query ?? "");
  const [sort, setSort] = useState(router.query.sort ?? "");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value === category ? "" : e.target.value); // Uncheck if same
  };

  const updateUrl = useCallback((category, searchQuery, sort) => {
    const searchParams = new URLSearchParams();
    if (searchQuery.length > 0) searchParams.append("query", searchQuery);
    if (sort.length > 0) searchParams.append("sort", sort);

    const strSearchParams = searchParams.toString();

    router.push(
      `/shop${category.length > 0 ? `/${category}` : ""}${
        strSearchParams.length > 0 ? `?${strSearchParams}` : ""
      }`
    );
  }, []);

  const updateUrlDebounce = useCallback(debounce(updateUrl, 500), []);

  useEffectAfterMount(() => {
    updateUrl(category, searchQuery, sort);
  }, [category, sort]);

  useEffectAfterMount(() => {
    updateUrlDebounce(category, searchQuery, sort);
  }, [searchQuery]);

  return (
    <div className={styles.shop}>
      <NextSeo
        title={`Nos produits ${category ? `(${category})` : ""}`}
        /* noindex if query params in url*/
        noindex={router.asPath.includes("?")}
      />

      {/* Filters */}
      <aside className={styles.filters}>
        <h2>Affiner la recherche</h2>
        <form className={styles.form}>
          <label className={styles.label} htmlFor="input-search-query">
            Recherche
            <input
              id="input-search-query"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
          </label>

          <label className={styles.label} htmlFor="input-sort">
            Trier par :
            <select
              id="input-sort"
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
              }}
            >
              <option value=""></option>
              <option value="price-asc">Prix - Moins cher au plus cher</option>
              <option value="price-desc">
                Prix - Plus chère au moins cher
              </option>
            </select>
          </label>

          <fieldset className={styles.fieldset}>
            <legend>Catégorie</legend>

            {allCategories.map((categ) => (
              <label
                className={styles.radioLabel}
                key={categ}
                htmlFor={`input-category-${categ}`}
              >
                <input
                  id={`input-category-${categ}`}
                  type="checkbox"
                  value={categ}
                  onChange={handleCategoryChange}
                  checked={categ === category}
                />
                {categ}
              </label>
            ))}
          </fieldset>
        </form>
      </aside>

      <main className={styles.products}>
        <ProductCardList products={products} />
      </main>

      <aside className={styles.cart}>[CART HERE]</aside>
    </div>
  );
}

export function getServerSideProps({ params, query }) {
  const category = params.category?.[0] ?? null;

  const { query: searchQuery, sort, level } = query;

  const products = searchProducts({
    query: searchQuery,
    category,
    sort,
    level,
  });

  const allCategories = getAllCategories();

  return {
    props: {
      products,
      allCategories,
    },
  };
}
