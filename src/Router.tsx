import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Movies } from "./pages/Movies";
import { TVSeries } from "./pages/TVSeries";
import { Bookmarked } from "./pages/Bookmarked";
import { Login } from "./pages/Login";
import { LoginLayout } from "./layouts/LoginLayout";
import { SignUp } from "./pages/SignUp";

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/movies/" element={<Movies />} />
        <Route path="/tv-series/" element={<TVSeries />} />
        <Route path="/bookmarked/" element={<Bookmarked />} />
      </Route>
      <Route element={<LoginLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up/" element={<SignUp />} />
      </Route>
    </Routes>
  );
}
