import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { IoCart } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useUser } from "@/Context/UserContext";

export const Header = () => {
  const navigate = useNavigate();
  const { isDark, handleToggle } = useUser();

  return (
    <header className="fixed top-0 left-0 right-0 bg-neutral-700 h-[12vh] flex items-center justify-between px-4 md:px-12">
      <NavLink
        to={"/"}
        className="text-zinc-200 text-2xl font-bold cursor-pointer tracking-wider"
      >
        Cartify
      </NavLink>
      <div className="space-x-6">
        <Button
          onClick={handleToggle}
          variant={"destructive"}
          className="cursor-pointer"
        >
          {!isDark ? (
            <span>
              <MdDarkMode />
            </span>
          ) : (
            <span>
              <MdLightMode />
            </span>
          )}
        </Button>
        <Button
          onClick={() => navigate("/cart")}
          variant={"destructive"}
          className="cursor-pointer"
        >
          <span>
            <IoCart />
          </span>
        </Button>
      </div>
    </header>
  );
};
