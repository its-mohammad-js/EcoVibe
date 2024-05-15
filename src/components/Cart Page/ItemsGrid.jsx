import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function ItemsGrid() {
  const { cartData } = useSelector((state) => state.userData);

  return (
    <div className="mt-4 md:mt-6 grid gap-4">
      {cartData.map((order, index) => (
        <CartItem key={index} orderDetails={order} />
      ))}
    </div>
  );
}

export default ItemsGrid;
