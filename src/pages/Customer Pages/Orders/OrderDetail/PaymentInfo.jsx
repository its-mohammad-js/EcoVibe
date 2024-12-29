import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function PaymentInfo({ sellerInfo, paymentInfo }) {
  const navigate = useNavigate();
  const { SellerName, SellerProfile, SellerId } = sellerInfo;

  return (
    <div className="bg-gray-50 px-2 py-1 rounded-md row-span-3 col-start-4 row-start-2 mb-16">
      <h4 className="text-xl font-medium my-1">Seller</h4>
      <div className="flex items-center justify-between">
        <img
          src={SellerProfile}
          alt="seller-avatar"
          className="size-16 gradient-background rounded-full"
        />
        <h4
          onClick={() =>
            SellerId !== "eco vibe" && navigate(`/EcoVibe/seller/${SellerId}`)
          }
          className="text-start w-full px-3 text-lg font-medium cursor-pointer hover:underline transition-all"
        >
          {SellerName}
        </h4>
        <button className="rotate-45 p-2 bg-gray-200 rounded-full">
          <BiArrowBack />
        </button>
      </div>
      <hr className="my-2" />
      <h4 className="text-xl font-medium my-1">Payment Infomtaion</h4>
      <div className="">
        {Object.entries(paymentInfo).map(([title, value], index) => (
          <div key={index} className="flex items-center justify-between">
            <p className="first-letter:uppercase font-semibold">
              {title.replace("_", " ")}
            </p>
            <p className="line-clamp-1">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaymentInfo;
