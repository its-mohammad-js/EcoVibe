import { useNavigate, useParams } from "react-router-dom";
import { useProfileData } from "../../SellerProfilePage";
import ProfileHeader from "./ProfileHeader";
import useCreateChatRoom from "hooks/useCreateChatRoom";

function SellerInfo({ onEditHandler }) {
  // seller profile data
  const {
    sellerData: { userInfo },
    isOwner,
  } = useProfileData();
  // current user data
  const { personalInformation } = userInfo || {};
  // nevessary data & hooks
  const params = useParams();
  const navigate = useNavigate();
  const { createRoom } = useCreateChatRoom();

  // send message handler
  function sendMessage() {
    const contactData = {
      ...userInfo.personalInformation,
      ...userInfo.businessInformation,
      userType: userInfo.userType,
      userId: params?.id,
    };

    createRoom(contactData, ({ roomId }) => {
      navigate(`/EcoVibe/Messages/`, { state: { roomId } });
    });
  }

  // open mail handler
  const handleEmailClick = () => {
    window.location.href = `mailto:${personalInformation.email}?subject=Hi%20There!&body=Wrote%20Something%20a%20here!.`;
  };

  return (
    <div className="px-4 py-2">
      {/* header */}
      <ProfileHeader />
      {/* action btns */}
      <div className="flex items-center justify-around my-2 lg:w-fit lg:gap-x-4">
        <button
          onClick={() => (!isOwner ? sendMessage() : onEditHandler())}
          className="px-4 py-2 text-sm lg:text-base bg-gray-300 hover:bg-opacity-50 transition-all text-gray-950 rounded-lg"
        >
          {isOwner ? "Edit" : "Message"}
        </button>
        <button
          onClick={() =>
            navigate(
              isOwner
                ? `/EcoVibe/Dashboard/Products`
                : `/EcoVibe/Explore-Products/seller=${params.id}`
            )
          }
          className="px-4 py-2 text-sm lg:text-base bg-gray-300 hover:bg-opacity-50 transition-all text-gray-950 rounded-lg"
        >
          {isOwner ? "My Products" : "All Products"}
        </button>
        <button
          onClick={() =>
            isOwner ? navigate(`/EcoVibe/Dashboard/`) : handleEmailClick()
          }
          className="px-4 py-2 text-sm lg:text-base bg-gray-300 hover:bg-opacity-50 transition-all text-gray-950 rounded-lg"
        >
          {isOwner ? "Dashboard" : "Email"}
        </button>
      </div>
    </div>
  );
}

export default SellerInfo;
