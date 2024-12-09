import { createContext, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditBusinessInfoForm from "./components/Modals/EditBusinessInfoForm";
import SellerProfilePageLoader from "UI/Loaders/SellerProfilePageLoader";
import { AiOutlineLeft } from "react-icons/ai";
import SellerContents from "./components/Contents/SellerContents";
import { useSelector } from "react-redux";
import SellerInfo from "./components/Seller Info/SellerInfo";
import HighLights from "./components/Seller Info/HighLights";
import useSellerProfile from "./Profile.hooks";

// create context provider for profile
const SellerProfileContext = createContext();

function SellerProfilePage() {
  const params = useParams(); // params (seller id)
  const currentUserId = JSON.parse(localStorage.getItem("userData"))?.userId; // get current user id from local storage
  const isOwner = params.id === currentUserId; // check user is owner of this profile
  const ownerData = useSelector((state) => state.userData); // user data from global state (used only on isOwner true)
  // seller profile data
  const { sellerData } = useSellerProfile(
    params.id,
    currentUserId,
    isOwner,
    ownerData
  );
  // display what type of content ? modes: products || last seller reviews || last orders of this seller
  // product || reviews || orders
  const [currentMode, setContentMode] = useState("products");
  // edit business information
  const [isEditShow, setEditModal] = useState(false);
  const navigate = useNavigate(); // navigate hook

  if (
    ownerData.loading &&
    sellerData.loading
    // !sellerData.userInfo?.personalInformation?.first_name
  )
    return <SellerProfilePageLoader />;

  if (!ownerData.loading && !sellerData.loading)
    return (
      <SellerProfileContext.Provider
        value={{
          sellerData,
          isOwner,
          setContentMode,
          currentMode,
          currentUserId,
        }}
      >
        <div className="mx-auto 2xl:max-w-screen-2xl flex flex-col justify-between">
          <div id="wrapper" className="size-full lg:w-8/12 lg:mx-auto">
            {/* header */}
            {/* <div className="flex items-center justify-between px-4 py-2 relative">
              <button onClick={() => navigate(-1)} className="text-2xl">
                <AiOutlineLeft />
              </button>
              <h6 className="font-bold flex-1 text-center">
                {sellerData.userInfo.businessInformation?.business_name}
              </h6>
            </div> */}
            {/* seller info */}
            <SellerInfo onEditHandler={() => setEditModal(true)} />
            {/* highlights */}
            {/* <HighLights /> */}
            {/* products / reviews / orders */}
            {/* <SellerContents /> */}
            {/* edit seller businnes information form */}
            {/* <div
              className={`${
                isEditShow ? "opacity-100 visible" : "opacity-0 invisible"
              } fixed z-50 inset-0 flex items-center justify-center transition-all`}
            >
              <EditBusinessInfoForm onModalClose={() => setEditModal(false)} />

              <div
                onClick={() => setEditModal(false)}
                className="absolute bg-gray-950/80 backdrop-blur inset-0"
              ></div>
            </div> */}
          </div>
        </div>
      </SellerProfileContext.Provider>
    );
}

export default SellerProfilePage;

// return profile data as a hook
export const useProfileData = () => {
  return useContext(SellerProfileContext);
};
