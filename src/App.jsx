import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home Page/HomePage";
import AppLayout from "./layout/AppLayout";
import ShopPage from "./pages/Shop Page/ShopPage";
import ExploreProducts from "./pages/Explore Products Page/ExploreProductsPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductDetailsPage from "./pages/Product Detail Page/ProductDetailsPage";

function App() {
  return (
    <Provider store={store}>
      <AppLayout>
        <Routes>
          <Route path="/EcoVibe/" element={<HomePage />} />
          <Route path="/EcoVibe/Shop" element={<ShopPage />} />
          <Route
            path="/EcoVibe/Explore-Products/:filters?"
            element={<ExploreProducts />}
          />
          <Route
            path="/EcoVibe/Products/:productId?"
            element={<ProductDetailsPage />}
          />
        </Routes>
      </AppLayout>
    </Provider>
  );
}

export default App;
