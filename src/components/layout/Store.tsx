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

export const Store = () => {
  const { product } = useUser();

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
                <Button className="cursor-pointer">Add To Cart</Button>
              </CardContent>
              <CardFooter>
                <p>
                  <p className="text-indigo-500 dark:text-yellow-500 font-semibold">
                    {item.rating.count} Rating
                  </p>
                  <div className="flex items-center gap-1 font-semibold">
                    {item.rating.rate}
                    <StarRating rate={item.rating.rate} />
                  </div>
                </p>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};
