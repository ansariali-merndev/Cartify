import { useUser } from "@/Context/UserContext";
import { useEffect, useState } from "react";

export function TypographyTable() {
  const { cartState } = useUser();
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState));
    const price: number = cartState.reduce(
      (acc, item) => acc + item.qty * item.price,
      0
    );
    setSubtotal(price);
  }, [cartState]);

  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="even:bg-muted m-0 border-t p-0">
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              Subtotal
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              ₹{subtotal.toFixed(2)}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-muted m-0 border-t p-0">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Shipping Fee
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              ₹{cartState.length === 0 ? "0" : "200"}
            </td>
          </tr>
          <tr className="even:bg-muted m-0 border-t p-0">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              <span className="font-extrabold">Total</span>
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              ₹{cartState.length === 0 ? 0 : (subtotal + 200).toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
