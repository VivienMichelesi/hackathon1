import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartContext from "../contexts/CartContext";
import { useEffect, useState } from "react";
import Cart from "../components/Cart";

function MyApp({ Component, pageProps }) {
  const [cartProducts, setCartProducts] = useState(() => {
    try {
      const json = sessionStorage.getItem("cart", cartProducts);
      if (json == null) {
        return [];
      }

      return JSON.parse(json) ?? [];
    } catch {
      return [];
    }
  });
  const [cartOpenPanel, setCartOpenPanel] = useState(false);

  const addCartProduct = (product) => {
    const cartProduct = cartProducts.find(
      (cartProduct) => cartProduct.id === product.id
    );

    if (cartProduct == null) {
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
    } else {
      cartProduct.quantity++;

      setCartProducts([...cartProducts]);
    }
  };

  const removeCartProduct = (id) => {
    const product = cartProducts.find((product) => product.id === id);
    product.quantity--;

    if (product.quantity <= 0) {
      setCartProducts(cartProducts.filter((product) => product.id !== id));
    } else {
      setCartProducts([...cartProducts]);
    }
  };

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  return (
    <CartContext.Provider
      value={{
        openPanel: cartOpenPanel,
        setOpenPanel: setCartOpenPanel,
        products: cartProducts,
        add: addCartProduct,
        remove: removeCartProduct,
      }}
    >
      <Navbar />
      <Component {...pageProps} />
      <Footer />

      <Cart />
    </CartContext.Provider>
  );
}

export default MyApp;
