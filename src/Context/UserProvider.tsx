import { useEffect, useReducer, useState, type ReactNode } from "react";
import { UserContext } from "./UserContext";
import type { ProductType } from "@/lib/type";
import { cartReducer } from "./Reducer";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);
  const [product, setProduct] = useState<ProductType[]>([]);
  const [cartState, cartDispatch] = useReducer(cartReducer, []);

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
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
