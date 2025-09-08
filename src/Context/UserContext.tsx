import type { ContextType, ProductType } from "@/lib/type";
import { createContext, useContext } from "react";

const defaultValue = {
  isDark: false,
  setIsDark: () => {},
  handleToggle: () => {},
  product: [] as ProductType[],
  setProduct: () => {},
  cartState: [],
  cartDispatch: () => {},
  isLoaded: false,
  setIsLoaded: () => {},
  productState: [],
  productDispatch: () => {},
};

export const UserContext = createContext<ContextType>(defaultValue);

export const useUser = () => useContext(UserContext);
