import { useEffect, useReducer, useState, type ReactNode } from "react";
import { UserContext } from "./UserContext";
import type { CartType, ProductType } from "@/lib/type";
import { cartReducer } from "./Reducer";

const getInitialValue = () => {
  const cartStr = localStorage.getItem("cart");
  if (!cartStr) return [];
  const data: CartType[] = JSON.parse(cartStr);
  return data;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);
  const [product, setProduct] = useState<ProductType[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cartState, cartDispatch] = useReducer(cartReducer, getInitialValue());

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        setProduct(await res.json());
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
    setIsLoaded(true);
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
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
