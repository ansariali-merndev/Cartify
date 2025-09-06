import type React from "react";

export interface ContextType {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  handleToggle: () => void;
  product: ProductType[];
  setProduct: React.Dispatch<React.SetStateAction<ProductType[]>>;
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
