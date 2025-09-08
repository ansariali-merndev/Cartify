import { useUser } from "@/Context/UserContext";
import { Title } from "../block/Title";
import { MdDelete } from "react-icons/md";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
} from "../ui/card";
import { Button } from "../ui/button";
import { TypographyTable } from "../block/CartTable";

export const Cart = () => {
  const { cartState, cartDispatch } = useUser();

  return (
    <section className="mt-40 md:mt-30">
      <Title title="Review Your Order" />

      <ul className="space-y-6">
        {cartState.map((item) => (
          <li key={item.id}>
            <Card className="grid grid-cols-3 relative">
              <CardHeader>
                <CardTitle className="h-20 flex items-center">
                  <img
                    src={item.image}
                    alt="Image"
                    className="h-15 md:h-20 max-w-30"
                  />
                </CardTitle>
                <CardAction
                  onClick={() =>
                    cartDispatch({
                      type: "REMOVE_FROM_CART",
                      payload: item.id,
                    })
                  }
                  className="absolute right-6 top-0 cursor-pointer"
                >
                  <MdDelete />
                </CardAction>
              </CardHeader>
              <CardContent className="flex flex-col items-start justify-center">
                <p className="text-xs md:text-base">
                  {item.title.slice(0, 12)}...
                </p>
                <p>₹{item.price}</p>
              </CardContent>
              <CardFooter className="space-x-2 px-1">
                <Button
                  size={"sm"}
                  onClick={() =>
                    cartDispatch({
                      type: "DECREASE_QUANTITY",
                      payload: item.id,
                    })
                  }
                  className="cursor-pointer"
                >
                  -
                </Button>
                <p>{item.qty}</p>
                <Button
                  size={"sm"}
                  onClick={() =>
                    cartDispatch({
                      type: "INCREASE_QUANTITY",
                      payload: item.id,
                    })
                  }
                  className="cursor-pointer"
                >
                  +
                </Button>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div></div>
        <div>
          <Title title="Cart Totals" />
          <TypographyTable />
        </div>
      </div>
    </section>
  );
};
