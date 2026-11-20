import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import CarsPage from "./pages/CarsPage.jsx";
import CarDetailPage from "./pages/CarDetailPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

// The route map. Layout wraps every page.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<CarsPage />} />
        <Route path="/cars/:id" element={<CarDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}