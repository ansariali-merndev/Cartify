import React from "react";
import { Header } from "../block/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../block/Footer";

export const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="container mx-auto px-4 my-26">
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
};
