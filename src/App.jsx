import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AppLayout from "./layout/AppLayout";
import ShopPage from "./pages/ProductsPage/ShopPage";
import ProductsFilterPage from "./pages/FilteredProductsPage/ProductsFilterPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Provider store={store}>
      <AppLayout>
        <Routes>
          <Route path="/EcoVibe/" element={<HomePage />} />
          <Route path="/EcoVibe/Shop" element={<ShopPage />} />
          <Route
            path="/EcoVibe/Filtered-Products"
            element={<ProductsFilterPage />}
          />
        </Routes>
      </AppLayout>
    </Provider>
  );
}

export default App;
