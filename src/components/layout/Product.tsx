import { useUser } from "@/Context/UserContext";
import type { ProductType } from "@/lib/type";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { StarRating } from "../block/StarRating";
import { AddToCartBtn } from "../block/AddToCartBtn";
import { Error } from "./Error";
import { ProductSkeleton } from "../block/skeleton/ProductSkelaton";

export const Product = () => {
  const { id } = useParams();
  const [itemId, setItemId] = useState(0);
  const [err, setErr] = useState(false);
  const [item, setItem] = useState<ProductType | null>(null);
  const { product } = useUser();

  useEffect(() => {
    if (id) {
      const parseId = parseInt(id);

      if (isNaN(parseId)) {
        setErr(true);
      } else {
        setItemId(parseInt(id));
      }
      if (product.length > itemId) {
        setItem(product[itemId]);
      }
    }
  }, [id, itemId, product]);

  if (err) {
    return <Error />;
  }

  return item !== null ? (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4 md:p-10">
      <img
        src={item.image}
        alt={item.title}
        className="w-full max-w-sm h-auto object-contain rounded-lg shadow-lg"
      />

      <Card className="w-full max-w-md">
        <CardHeader>
          <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
          <Badge variant="secondary">{item.category}</Badge>
        </CardHeader>

        <CardContent className="flex flex-col gap-3">
          <span className="text-xl font-semibold text-green-600">
            ${item.price}
          </span>
          <p className="text-gray-700 dark:text-gray-300">{item.description}</p>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-gray-800 dark:text-gray-200 flex gap-2 items-center">
              <StarRating rate={Math.floor(item.rating.rate)} />
              {item.rating.rate}
            </span>
            <span className="text-gray-500 dark:text-gray-400">
              ({item.rating.count} reviews)
            </span>
          </div>
        </CardContent>

        <CardFooter>
          <AddToCartBtn item={item} />
        </CardFooter>
      </Card>
    </div>
  ) : (
    <ProductSkeleton />
  );
};
