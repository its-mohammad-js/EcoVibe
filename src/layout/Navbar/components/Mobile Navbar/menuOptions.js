import { MdChatBubbleOutline } from "react-icons/md";
import {
  TbCards,
  TbCategory,
  TbChartHistogram,
  TbClock,
  TbCreditCard,
  TbEyeQuestion,
  TbHeart,
  TbHome,
  TbLogin2,
  TbShoppingBag,
  TbShoppingCart,
} from "react-icons/tb";

export const menuOptions = ({ auth_status, userType }) => {
  return [
    { label: "Home", path: "/EcoVibe/", icon: TbHome },
    { label: "Shop", path: "/EcoVibe/Shop", icon: TbShoppingCart },
    {
      label: "Shop By Category",
      path: "/EcoVibe/Explore-Products/",
      icon: TbCategory,
    },
    { label: "My Orders", path: "/EcoVibe/bag/orders", icon: TbClock },
    { label: "Cart", path: "/EcoVibe/bag/cart", icon: TbShoppingBag },
    { label: "Wish List", path: "/EcoVibe/bag/wish-list", icon: TbHeart },
    {
      label: "Messages",
      path: "/EcoVibe/Messages",
      icon: MdChatBubbleOutline,
      hidden: auth_status !== 200,
    },
    {
      label: "Dashboard",
      path: "/EcoVibe/dashboard",
      icon: TbChartHistogram,
      hidden: auth_status !== 200 || userType === "customer",
    },
    {
      label: "Seller Solutions",
      path: "/EcoVibe/sellers-solutions",
      icon: TbCreditCard,
    },
    { label: "About Developer", path: "/EcoVibe/", icon: TbCards },
    {
      label: auth_status === 200 ? "My Profile" : "Sign-in",
      path: auth_status === 200 ? "/EcoVibe/profile" : "/EcoVibe/sign-in",
      icon: TbLogin2,
    },
    { label: "FAQs", path: "/EcoVibe/", icon: TbEyeQuestion },
  ];
};
