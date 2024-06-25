import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";

import AppLayout from "../layouts/app-layout";
import { HomePage } from "../pages";

export const Router = () => {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Routers>
  );
};
