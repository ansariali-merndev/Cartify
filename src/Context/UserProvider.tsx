import { useEffect, useReducer, useState, type ReactNode } from "react";
import { UserContext } from "./UserContext";
import type { CartType, ProductType } from "@/lib/type";
import { cartReducer, productReducer } from "./Reducer";

const getInitialValue = () => {
  const cartStr = localStorage.getItem("cart");
  if (!cartStr) return [];
  const data: CartType[] = JSON.parse(cartStr);
  return data;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);
  const [product, setProduct] = useState<ProductType[]>([]);
  const [productState, productDispatch] = useReducer(productReducer, product);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cartState, cartDispatch] = useReducer(cartReducer, getInitialValue());

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProduct(data);
        productDispatch({ type: "BY_DEFAULT", payload: data });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoaded(true);
      }
    }

    fetchData();
  }, []);

  const handleToggle = () => {
    setIsDark((prev) => {
      if (prev) {
        document.body.classList.remove("dark");
      } else {
        document.body.classList.add("dark");
      }

      return !prev;
    });
  };

  const value = {
    isDark,
    setIsDark,
    handleToggle,
    product,
    setProduct,
    cartState,
    cartDispatch,
    isLoaded,
    setIsLoaded,
    productState,
    productDispatch,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
