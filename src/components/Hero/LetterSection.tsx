import React, { useState } from "react";
import { Button } from "../ui/button";
import Swal from "sweetalert2";

export const LetterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("I am executong");
    Swal.fire({
      toast: true,
      position: "bottom-right",
      icon: "success",
      title: `Subscribed successfully with ${email}!`,
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 3000,
    });

    setEmail("");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <h2 className="font-bold text-md">Subscribe now & get 20% off</h2>
      <p className="font-semibold text-xl">
        Stay updated with our latest offers and news
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 items-center justify-center border border-black dark:border-gray-200 pl-2 rounded-lg my-4"
      >
        <input
          name="email"
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          autoComplete="off"
          className="w-64 outline-none border-none"
        />
        <Button size={"lg"}>SUBSCRIBE</Button>
      </form>
    </div>
  );
};
