import type React from "react";

export interface ContextType {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  handleToggle: () => void;
  product: ProductType[];
  setProduct: React.Dispatch<React.SetStateAction<ProductType[]>>;
  cartState: CartType[];
  cartDispatch: React.Dispatch<CartAction>;
}

export interface ProductType {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  rating: {
    count: number;
    rate: number;
  };
}

export interface CartType {
  id: number;
  qty: number;
}

export type CartAction =
  | { type: "ADD_TO_CART"; payload: CartType }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | { type: "INCREASE_QUANTITY"; payload: number }
  | { type: "DECREASE_QUANTITY"; payload: number }; 