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
import { AddToCartBtn } from "../block/AddToCartBtn";
import { FilterFunctionality } from "../block/FilterFunctionality";

export const Store = () => {
  const { productState } = useUser();

  return (
    <section>
      <FilterFunctionality />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productState.map((item, idx) => (
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
                <AddToCartBtn item={item} />
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
