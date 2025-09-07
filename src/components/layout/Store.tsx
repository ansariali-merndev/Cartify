import { useUser } from "@/Context/UserContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { StarRating } from "../block/StarRating";
import { Button } from "../ui/button";
import Swal from "sweetalert2";

export const Store = () => {
  const { product, cartDispatch } = useUser();

  const handleAddToCart = (id: number) => {
    cartDispatch({ type: "ADD_TO_CART", payload: { id, qty: 1 } });
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

  return (
    <section>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {product.map((item, idx) => (
          <li key={`${item.id}-index-${idx}`}>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="h-50 flex items-center justify-center border border-indigo-600 dark:border-green-500">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-40 w-auto"
                    />
                  </div>
                </CardTitle>
                <CardDescription className="h-12">{item.title}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <p>₹{item.price}</p>
                <Button
                  onClick={() => handleAddToCart(item.id)}
                  className="cursor-pointer"
                >
                  Add To Cart
                </Button>
              </CardContent>
              <CardFooter>
                <div>
                  <span className="text-indigo-500 dark:text-yellow-500 font-semibold">
                    {item.rating.count} Rating
                  </span>
                  <div className="flex items-center gap-1 font-semibold">
                    {item.rating.rate}
                    <StarRating rate={item.rating.rate} />
                  </div>
                </div>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};
