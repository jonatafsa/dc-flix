import { Route, Routes as BrowserRoutes } from 'react-router-dom';

import Home from "./pages/Home";
import InitPage from './pages/Init';
import Movies from "./pages/Movies";
import Signin from "./pages/Signin";

export default function Routes() {
  return (
    <BrowserRoutes>
      {/* <RouterProvider router={router} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/shows" element={<InitPage />} />
      <Route path="/shop" element={<InitPage />} />
      <Route path="/games" element={<InitPage />} />
      <Route path="/signin" element={<Signin />} />
    </BrowserRoutes>
  )
}