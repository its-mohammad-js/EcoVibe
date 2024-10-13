import { BsShopWindow } from "react-icons/bs";
import { motion } from "framer-motion";
import {
  FaBitcoin,
  FaCcMastercard,
  FaCopyright,
  FaDollarSign,
  FaInstagram,
  FaMailBulk,
  FaMapMarked,
  FaPaypal,
  FaPhone,
  FaTelegram,
  FaVoicemail,
  FaWhatsapp,
} from "react-icons/fa";
import { routesInfo } from "constants";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl mt-6 md:mt-8">
      <div
        id="wrapper"
        className="flex flex-col px-4 py-2 md:px-6 md:py-3 bg-primary-900 text-white"
      >
        {/* newsletter */}
        <div className="order-2 md:order-1 flex flex-col gap-y-4 md:flex-row md:items-center justify-between md:h-28 border-b-2 border-gray-600/35 py-4">
          <h4 className="text-xl text-center md:text-start md:text-4xl">
            Join Our Newsletter
          </h4>

          <div className="w-full md:w-1/2 flex items-center justify-center gap-x-3">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-3/4 px-4 py-2 md:py-4 focus:outline-none rounded-lg bg-white/15"
            />
            <button className="px-4 py-2 md:px-8 md:py-4 bg-primary-500 rounded-lg">
              subscribe
            </button>
          </div>
        </div>
        {/* content wrapper */}
        <div className="flex flex-col gap-y-6 md:flex-row items-center justify-between w-full order-1 md:order-2 md:h-60">
          {/* main information */}
          <div className="w-full md:w-1/5 md:px-4 py-2 flex flex-col gap-y-4 md:gap-y-0 items-start justify-evenly h-full">
            {/* logo */}
            <div
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/EcoVibe/");
              }}
              className="flex items-end w-full md:w-fit justify-center gap-x-2.5 cursor-pointer"
            >
              <motion.p
                initial={{ y: 10 }}
                whileInView={{ y: 0 }}
                className="text-2xl lg:text-4xl text-white mb-1"
              >
                <BsShopWindow />
              </motion.p>
              <motion.p
                initial={{ x: -40 }}
                whileInView={{ x: 0 }}
                className="lg:text-3xl whitespace-nowrap font-bold"
              >
                Eco Vibe
              </motion.p>
            </div>
            {/* description */}
            <p className="text-gray-200">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem,
            </p>
            {/* social media links */}
            <div className="w-full flex items-center justify-center md:justify-start gap-x-4 text-2xl">
              <FaTelegram />
              <FaWhatsapp />
              <FaVoicemail />
              <FaInstagram />
            </div>
          </div>
          {/* payment methods */}
          <div className="w-full h-full md:w-1/5 flex flex-col justify-evenly gap-y-4 md:gap-y-0">
            <h4 className="text-2xl font-bold cursor-pointer">
              Payment Details
            </h4>
            <p className="flex items-center gap-x-1.5 text-lg cursor-pointer hover:text-primary-300 transition-all">
              <FaPaypal className="text-2xl" />
              <span>PayPal</span>
            </p>
            <p className="flex items-center gap-x-1.5 text-lg cursor-pointer hover:text-primary-300 transition-all">
              <FaCcMastercard className="text-2xl" />
              <span>Master Card</span>
            </p>
            <p className="flex items-center gap-x-1.5 text-lg cursor-pointer hover:text-primary-300 transition-all">
              <FaBitcoin className="text-2xl" />
              <span>Crypto Currency</span>
            </p>
            <p className="flex items-center gap-x-1.5 text-lg cursor-pointer hover:text-primary-300 transition-all">
              <FaDollarSign className="text-2xl" />
              <span>Cash</span>
            </p>
          </div>
          {/* pages */}
          <div className="w-full md:w-1/5 flex flex-col justify-evenly h-full gap-y-4 md:gap-y-0">
            <h4 className="text-2xl font-bold cursor-pointer">Pages</h4>
            {routesInfo.map((route, index) => (
              <button
                key={index}
                onClick={() => {
                  window.scroll(0, 0);
                  navigate(route.path);
                }}
                className="text-lg odd:hidden text-start cursor-pointer hover:text-primary-300 transition-all"
              >
                {route.title}
              </button>
            ))}
          </div>
          {/* info */}
          <div className="w-full md:w-1/5 flex flex-col justify-evenly h-full gap-y-4 md:gap-y-0">
            <h4 className="text-2xl font-bold cursor-pointer">Info</h4>
            <p className="text-lg cursor-pointer hover:text-primary-300 transition-all">
              Shipping Policy
            </p>
            <p className="text-lg cursor-pointer hover:text-primary-300 transition-all">
              Seller Solution's
            </p>
            <p className="text-lg cursor-pointer hover:text-primary-300 transition-all">
              Support
            </p>
            <p className="text-lg cursor-pointer hover:text-primary-300 transition-all">
              Faqs
            </p>
          </div>
          {/* contact info */}
          <div className="w-full md:w-1/5 flex flex-col justify-evenly h-full gap-y-4 md:gap-y-0 line-clamp-1">
            <h4 className="text-2xl font-bold cursor-pointer">Contact Info</h4>
            <p className="flex items-center gap-x-1.5 text-lg cursor-pointer hover:text-primary-300 transition-all">
              <FaMailBulk className="text-2xl" />
              <span>mohammadreactjs@gmail.com</span>
            </p>
            <p className="flex items-center gap-x-1.5 text-lg cursor-pointer hover:text-primary-300 transition-all">
              <FaPhone className="text-2xl" />
              <span>+98-939-635-6829</span>
            </p>
            <p className="flex items-center gap-x-1.5 text-lg cursor-pointer hover:text-primary-300 transition-all">
              <FaMapMarked className="text-2xl" />
              <span>Iran, Tehran</span>
            </p>
          </div>
        </div>
      </div>
      {/* privacy & policy */}
      <div className="bg-primary-900 flex flex-col gap-y-4 md:flex-row items-center justify-between px-4 pb-2 pt-6 text-white">
        <p className="flex items-center gap-x-2 cursor-pointer hover:text-primary-300 transition-all">
          <FaCopyright />
          <span>Copyright 2024 - Eco Vibe</span>
        </p>

        <div className="flex w-full md:w-1/3 text-sm cursor-pointer items-center justify-center md:justify-end gap-x-4">
          <p>Privacy policy</p>
          <p>Legal notice</p>
          <p>Terms of services</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
