import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AppLayout from "./layout/AppLayout";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductsFilterPage from "./pages/FilteredProductsPage/ProductsFilterPage";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/EcoVibe/" element={<HomePage />} />
        <Route path="/EcoVibe/Products" element={<ProductsPage />} />
        <Route
          path="/EcoVibe/Filtered-Products"
          element={<ProductsFilterPage />}
        />
      </Routes>
    </AppLayout>
  );
}

export default App;
