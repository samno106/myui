import React from "react";

import { Outlet } from "react-router-dom";
import Header from "./header/header";
import Hero from "./hero/hero";
import Filter from "./filter/filter";
import Footer from "./footer/footer";

export default function AppLayout() {
  return (
    <div>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
