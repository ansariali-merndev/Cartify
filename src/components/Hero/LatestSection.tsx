import React from "react";
import { useUser } from "@/Context/UserContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Title } from "../block/Title";

export const LatestSection = () => {
  const { product } = useUser();

  return (
    <React.Fragment>
      <Title title="LATEST COLLECTIONS" />
      <ul className="grid grid-cols-1 md:grid-cols-3 my-12 gap-8">
        {product.slice(0, 3).map((item, idx) => (
          <li key={`${item.id}-${idx}`}>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="h-60 flex justify-center items-center">
                    <img src={item.image} alt={item.title} className="h-50" />
                  </div>
                </CardTitle>
                <CardDescription>{item.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>₹{item.price}</p>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
