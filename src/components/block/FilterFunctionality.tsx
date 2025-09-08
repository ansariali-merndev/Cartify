import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { useUser } from "@/Context/UserContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const FilterFunctionality = () => {
  const [search, setSearch] = useState("");
  const { productDispatch, product } = useUser();

  const handleChange = (v: string) => {
    if (v === "LOW_TO_HIGH") {
      productDispatch({ type: "LOW_TO_HIGH", payload: product });
    } else if (v === "HIGH_TO_LOW") {
      productDispatch({ type: "HIGH_TO_LOW", payload: product });
    } else {
      productDispatch({ type: "BY_DEFAULT", payload: product });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      productDispatch({
        type: "SEARCH_FUNCTIONALITY",
        payload: search,
        original: product,
      });
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [search, productDispatch, product]);

  return (
    <div className="my-8 flex justify-between items-center">
      <Input
        className="w-[60%]"
        type="text"
        placeholder="Search here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required
        autoComplete="off"
        name="search"
        id="search"
      />

      <Select onValueChange={(v) => handleChange(v)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="LOW_TO_HIGH">Ascending order</SelectItem>
          <SelectItem value="HIGH_TO_LOW">Descending Order </SelectItem>
          <SelectItem value="BY_DEFAULT">By Default</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
