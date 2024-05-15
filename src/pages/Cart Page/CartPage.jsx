import { useDispatch, useSelector } from "react-redux";
import CartFilters from "../../components/Cart Page/CartFilters";
import ItemsGrid from "../../components/Cart Page/ItemsGrid";
import CheckoutSummary from "../../components/Cart Page/CheckoutSummary";

function CartPage() {
  return (
    <div className="mx-auto 2xl:max-w-screen-2xl min-h-screen">
      <div id="wrapper" className="md:w-10/12 md:mx-auto px-4 py-2">
        {/* search & sort */}
        <CartFilters />
        {/* order's grid */}
        <ItemsGrid />
        {/* checkout summary & paginate actions */}
        <div className="flex flex-col md:flex-row gap-4 justify-between mt-4 md:mt-6">
          <div className="bg-purple-500 md:flex-1">paginate actions</div>

          <CheckoutSummary />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
