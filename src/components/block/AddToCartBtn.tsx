import { useUser } from "@/Context/UserContext";
import { Button } from "../ui/button";
import Swal from "sweetalert2";
import type { ProductType } from "@/lib/type";

export const AddToCartBtn = ({ item }: { item: ProductType }) => {
  const { cartDispatch, cartState, isLoaded } = useUser();

  const handleRemoveCart = (id: number) => {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: id });
    Swal.fire({
      icon: "info",
      text: "Product Removed from cart",
      toast: true,
      position: "bottom-right",
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };

  const handleAddToCart = (
    id: number,
    image: string,
    title: string,
    price: number
  ) => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: { id, qty: 1, image, title, price },
    });
    Swal.fire({
      toast: true,
      position: "bottom-right",
      timerProgressBar: true,
      showConfirmButton: false,
      title: "Product Added to Cart",
      icon: "success",
      timer: 3000,
    });
  };

  if (!isLoaded) {
    return <></>;
  }

  return cartState.find((c) => c.id === item.id) ? (
    <Button
      className="cursor-pointer"
      onClick={() => handleRemoveCart(item.id)}
    >
      Remove from Cart
    </Button>
  ) : (
    <Button
      onClick={() =>
        handleAddToCart(item.id, item.image, item.title, item.price)
      }
      className="cursor-pointer"
    >
      Add To Cart
    </Button>
  );
};
