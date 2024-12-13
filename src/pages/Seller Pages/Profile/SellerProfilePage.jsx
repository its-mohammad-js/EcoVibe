import { createContext, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditBusinessInfoForm from "./components/Modals/EditBusinessInfoForm";
import SellerProfilePageLoader from "UI/Loaders/SellerProfilePageLoader";
import { AiOutlineLeft } from "react-icons/ai";
import SellerContents from "./components/Contents/SellerContents";
import { useSelector } from "react-redux";
import SellerInfo from "./components/Seller Info/SellerInfo";
import useSellerProfile from "./useGetSellerInfo";
import Highlights from "./components/Seller Info/HighLights";

// create context provider for profile
const SellerProfileContext = createContext();

function SellerProfilePage() {
  const params = useParams();
  const navigate = useNavigate();
  const [isEditShow, setEditModal] = useState(false);
  const {
    sellerData,
    storyLoading,
    storiesList,
    isStoriesShow,
    setStorieModal,
    isOwner,
  } = useSellerProfile(params.id);


  if (sellerData.loading) return <SellerProfilePageLoader />;

  if (!sellerData.loading)
    return (
      <SellerProfileContext.Provider
        value={{
          sellerData,
          isOwner,
          storyLoading,
          storiesList,
          isStoriesShow,
          setStorieModal,
        }}
      >
        <div className="mx-auto 2xl:max-w-screen-2xl flex flex-col justify-between">
          <div id="wrapper" className="size-full lg:w-8/12 lg:mx-auto">
            {/* header */}
            <div className="flex items-center justify-between px-4 py-2 relative">
              <button onClick={() => navigate(-1)} className="text-2xl">
                <AiOutlineLeft />
              </button>
              <h6 className="font-bold flex-1 text-center">
                {sellerData.userInfo.businessInformation?.business_name}
              </h6>
            </div>
            {/* seller info */}
            <SellerInfo onEditHandler={() => setEditModal(true)} />
            {/* highlights */}
            <Highlights />
            {/* products / reviews / orders */}
            <SellerContents />
            {/* edit seller businnes information form */}
            <div
              className={`${
                isEditShow ? "opacity-100 visible" : "opacity-0 invisible"
              } fixed z-50 inset-0 flex items-center justify-center transition-all`}
            >
              <EditBusinessInfoForm onModalClose={() => setEditModal(false)} />

              <div
                onClick={() => setEditModal(false)}
                className="absolute bg-gray-950/80 backdrop-blur inset-0"
              ></div>
            </div>
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
