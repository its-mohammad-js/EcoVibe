import CartFilters from "../../components/Cart Page/CartFilters";
import ItemsGrid from "../../components/Cart Page/ItemsGrid";
import CheckoutSummary from "../../components/Cart Page/CheckoutSummary";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function CartPage() {
  const [filters, setFilters] = useState({
    searchQuery: "",
    sortValue: "",
  });
  // necessary data & hooks
  const { cartData, loading, uid } = useSelector((state) => state.userData);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(uid);
    if (!uid) {
      toast("Looks like you're not signed in yet!");
      navigate("/EcoVibe/Sign-in");
    }
  }, []);

  function onFiltersChange(type, value) {
    setFilters((prev) => ({ ...prev, [type]: value }));
  }

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl min-h-screen">
      <div id="wrapper" className="md:w-10/12 md:mx-auto px-4 py-2">
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
