import { FaCreditCard, FaMoneyBill, FaUser } from "react-icons/fa";

function SellersSection() {
  return (
    <div className="mx-auto 2xl:max-w-screen-2xl mt-6 md:mt-8">
      <div id="wrapper" className="px-4 py-2">
        {/* introduce selling feature */}
        <div className="flex flex-col items-center gap-y-4 md:flex-row w-full md:h-64 md:gap-x-16">
          {/* title & description */}
          <div className="text-center md:text-start flex flex-col md:h-full md:justify-start gap-y-1.5 md:gap-y-2 md:w-2/5">
            <p className="text-base md:text-xl text-primary-400 font-semibold">
              Green Living Market
            </p>
            <h4 className="text-3xl md:text-5xl font-bold">
              Becoming a Seller on Eco Vibe
            </h4>
            <span className="text-sm text-gray-600 md:text-lg">
              Welcome to Eco Vibe, your eco-friendly haven for handpicked
              sustainable treasures! 🌿 From biodegradable household essentials
              to ethically sourced fashion pieces.
            </span>
          </div>
          {/* step icons */}
          <div className="md:w-3/5 flex flex-col md:flex-row flex-wrap md:items-start md:h-full items-center justify-evenly gap-y-16 md:gap-0 py-2 px-4">
            <div className="flex items-start justify-center gap-x-3 md:w-1/2 md:h-20">
              <div className="w-16 h-16 bg-primary-700 rounded-xl text-white flex items-center justify-center">
                <span className="text-2xl">
                  <FaUser />
                </span>
              </div>
              <div className="w-2/3 flex flex-col gap-y-2">
                <h6 className="text-xl font-bold">Create Your Account</h6>
                <span className="text-sm">
                  📝 Sign up on Soc Vibe as a seller by providing necessary
                  details such as your store name.
                </span>
              </div>
            </div>
            <div className="flex items-start justify-center gap-x-3 md:w-1/2 md:h-20">
              <div className="w-16 h-16 bg-primary-700 rounded-xl text-white flex items-center justify-center">
                <span className="text-2xl">
                  <FaCreditCard />
                </span>
              </div>
              <div className="w-2/3 flex flex-col gap-y-2">
                <h6 className="text-xl font-bold">Set Up Your Store</h6>
                <span className="text-sm">
                  🛍️ Customize your store on Soc Vibe by adding products,
                  setting prices, uploading images.
                </span>
              </div>
            </div>
            <div className="flex items-start justify-center gap-x-3 md:w-1/2 md:h-20">
              <div className="w-16 h-16 bg-primary-700 rounded-xl text-white flex items-center justify-center">
                <span className="text-2xl">
                  <FaMoneyBill />
                </span>
              </div>
              <div className="w-2/3 flex flex-col gap-y-2">
                <h6 className="text-xl font-bold">Start Selling & Promoting</h6>
                <span className="text-sm">
                  📈 Begin listing your products for sale, engage with
                  customers, offer promotions.
                </span>
              </div>
            </div>
            <div className="flex items-start justify-center gap-x-3 md:w-1/2 md:h-20">
              <div className="w-16 h-16 bg-primary-700 rounded-xl text-white flex items-center justify-center">
                <span className="text-2xl">
                  <FaMoneyBill />
                </span>
              </div>
              <div className="w-2/3 flex flex-col gap-y-2">
                <h6 className="text-xl font-bold">Start Selling & Promoting</h6>
                <span className="text-sm">
                  📈 Begin listing your products for sale, engage with
                  customers, offer promotions.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellersSection;
