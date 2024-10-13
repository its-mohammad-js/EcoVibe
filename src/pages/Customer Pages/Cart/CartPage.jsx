import CartFilters from "customerPages/Cart/components/CartFilters";
import ItemsGrid from "customerPages/Cart/components/ItemsGrid";
import CheckoutSummary from "customerPages/Cart/components/CheckoutSummary";
import { useState } from "react";
import { useSelector } from "react-redux";

function CartPage() {
  const [filters, setFilters] = useState({
    searchQuery: "",
    sortValue: "",
  });
  // necessary data & hooks
  const { cartData, loading } = useSelector((state) => state.userData);

  function onFiltersChange(type, value) {
    setFilters((prev) => ({ ...prev, [type]: value }));
  }

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl min-h-screen">
      <div id="wrapper" className="md:w-10/12 md:mx-auto px-4 py-2 relative">
        {/* search & sort */}
        <CartFilters onFiltersChange={onFiltersChange} />
        {/* order's grid */}
        <ItemsGrid cartData={cartData} filters={filters} loading={loading} />
        {/* checkout summary & paginate actions */}
        <CheckoutSummary />
      </div>
    </div>
  );
}

export default CartPage;
