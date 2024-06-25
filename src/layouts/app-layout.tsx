import React from "react";

import { Outlet } from "react-router-dom";
import Header from "./header/header";
import Hero from "./hero/hero";
import Filter from "./filter/filter";

export default function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}