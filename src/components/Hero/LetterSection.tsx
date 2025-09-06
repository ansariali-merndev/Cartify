import { Button } from "../ui/button";

export const LetterSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <h2 className="font-bold text-md">Subscribe now & get 20% off</h2>
      <p className="font-semibold text-xl">
        Stay updated with our latest offers and news
      </p>
      <div className="flex gap-2 items-center justify-center border border-black dark:border-gray-200 pl-2 rounded-lg my-4">
        <input type="email" className="w-64 outline-none border-none" />
        <Button size={"lg"}>SUBSCRIBE</Button>
      </div>
    </div>
  );
};
