import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { get, getDatabase, ref, set } from "firebase/database";
import { useProfileData } from "../../SellerProfilePage";
import toast from "react-hot-toast";
import ProfileHeader from "./ProfileHeader";

function SellerInfo({ onEditHandler }) {
  // seller profile data
  const {
    sellerData: { userInfo },
    isOwner,
  } = useProfileData();
  // current user data
  const { personalInformation } = userInfo || {};
  const currentUserData = useSelector((state) => state.userData);
  // nevessary data & hooks
  const params = useParams();
  const navigate = useNavigate();
  const currentUserId = JSON.parse(localStorage.getItem("userData"))?.userId;

  // send message handler
  async function sendMessage() {
    if (isOwner) {
      toast("you cant message your self!");
      return;
    }

    if (!currentUserId) {
      toast("you should sign up first");
    }

    const roomId = `FROM:${currentUserId}&TO:${params.id}`;
    const dbRef = getDatabase();

    const room = await get(ref(dbRef, "rooms")).then((res) =>
      Object?.entries(res.val() || {}).find(
        ([k, v]) =>
          v.members?.includes(currentUserId) &&
          v.members?.includes("j3zLI30uZAhzpzJzbi9a5Ccr9fJ3")
      )
    );
    if (!room) {
      await set(ref(dbRef, `rooms/${roomId}`), {
        roomId,
        // customer data
        [currentUserId]: {
          ...currentUserData.personalInformation,
          ...currentUserData?.businessInformation,
          currentUserId,
        },
        // seller data
        [params?.id]: {
          ...userInfo.personalInformation,
          ...userInfo.businessInformation,
          userType: userInfo.userType,
        },
        members: [currentUserId, params.id],
      });
      navigate(`/EcoVibe/Messages/`, { state: { roomId: roomId } });
    } else {
      navigate(`/EcoVibe/Messages/`, { state: { roomId: room[1].roomId } });
    }
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
