import type {
  CartAction,
  CartType,
  ProductAction,
  ProductType,
} from "@/lib/type";

export const productReducer = (state: ProductType[], action: ProductAction) => {
  switch (action.type) {
    case "SEARCH_FUNCTIONALITY":
      return action.original.filter((item) => {
        const value = action.payload.toLocaleLowerCase().trim();
        return (
          item.description.toLocaleLowerCase().trim().includes(value) ||
          item.category.toLocaleLowerCase().trim().includes(value) ||
          item.title.toLocaleLowerCase().trim().includes(value)
        );
      });

    case "LOW_TO_HIGH":
      return [...action.payload].sort((a, b) => a.price - b.price);

    case "HIGH_TO_LOW":
      return [...action.payload].sort((a, b) => b.price - a.price);

    case "BY_DEFAULT":
      return action.payload;

    default:
      return state;
  }
};

export const cartReducer = (state: CartType[], action: CartAction) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...state, action.payload];
      }
    }

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);

    case "INCREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );

    case "DECREASE_QUANTITY":
      return state.map((item) => {
        if (item.id === action.payload && item.qty > 1) {
          return { ...item, qty: item.qty - 1 };
        } else {
          return item;
        }
      });
  }
};
