import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import hero from "../../assets/hero.png";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border border-neutral-900 dark:border-gray-600 mb-30">
      <div className="flex flex-col justify-center items-center py-28 text-gray-700 dark:text-gray-200">
        <div className="flex items-center gap-2">
          <p className="h-0.5 w-16 bg-black dark:bg-zinc-200"></p>
          <p className="font-semibold text-xl md:text-2xl">OUR BESTSELLERS</p>
        </div>
        <p className="font-semibold text-3xl md:text-6xl">Latest Arrivals</p>
        <div className="flex items-center gap-2 mt-2">
          <p className="font-semibold text-xl md:text-2xl">SHOP NOW</p>
          <p className="h-0.5 w-16 bg-black dark:bg-zinc-200"></p>
        </div>

        <Button
          onClick={() => navigate("/store")}
          className="mt-6 cursor-pointer"
        >
          Explore more
        </Button>
      </div>
      <div>
        <img
          src={hero}
          alt="Hero Images"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};
