import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { get, getDatabase, ref, set } from "firebase/database";
import { useProfileData } from "../SellerProfilePage";
import { uniq } from "lodash";
import { calculateAverage } from "constants";
import toast from "react-hot-toast";
import { useState } from "react";
import StoryListModal from "/src/common/UI elements/StoriesList/StoryListModal";

function SellerInfo({ onEditHandler }) {
  // seller stories modal state
  const [isStoriesShow, setStorieModal] = useState(null);
  // seller profile data
  const {
    sellerData: { userInfo, orders, products, reviews },
    sellerStories: { storiesList, loading },
    currentUserId,
    isOwner,
  } = useProfileData();
  // current user data
  const { personalInformation, businessInformation } = userInfo || {};
  const currentUserData = useSelector((state) => state.userData);
  // nevessary data & hooks
  const params = useParams();
  const navigate = useNavigate();

  // calculate cutomers count
  function calculateCustomers() {
    const customersId = uniq(orders.map((order) => order.customerId));

    return customersId.length;
  }

  // calculate stars
  function calculateStars() {
    const averageStars = calculateAverage(
      reviews.map(({ content }) => content?.stars)
    );

    return isNaN(averageStars) ? 0 : averageStars;
  }

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
      <div className="flex items-center justify-evenly gap-x-4 lg:gap-x-8 lg:w-fit">
        {/* profile & stories section */}
        <>
          {/* profile pic */}
          <div
            onClick={() => {
              if (!loading && storiesList.length > 0) {
                // it sets to 0 becuase StoryModal component logic uses isStoriesShow (in SellerProfile component) as currentListIndex
                setStorieModal(0);
              }
            }}
            className={`${loading && "animate-pulse"} ${
              !loading && storiesList.length > 0 && "ring-4 ring-red-500"
            } size-20 lg:size-24 bg-gray-100 rounded-full overflow-hidden select-none cursor-pointer`}
          >
            <img src={personalInformation?.profilePic} alt="user-avatar" />
          </div>

          {/* seller stories modal */}
          {isStoriesShow !== null && (
            <StoryListModal
              {...{
                currentListIndex: isStoriesShow,
                setList: setStorieModal,
                storiesList,
              }}
            />
          )}
        </>
        {/* stars, products, customers count */}
        <div className="flex items-center justify-evenly gap-x-4">
          <div className="flex items-center justify-center flex-col font-medium">
            <h6 className="text-center">{calculateStars()}</h6>
            <p className="text-center ">stars</p>
          </div>
          <div className="flex items-center justify-center flex-col font-medium">
            <h6 className="text-center">{products.length}</h6>
            <p className="text-center ">products</p>
          </div>
          <div className="flex items-center justify-center flex-col font-medium">
            <h6 className="text-center">{calculateCustomers()}</h6>
            <p className="text-center ">customers</p>
          </div>
        </div>
      </div>
      {/* biography */}
      <div className="my-2">
        <h4 className="text-lg font-bold">
          {personalInformation?.first_name +
            " " +
            personalInformation?.last_name}
        </h4>
        <p className="">{businessInformation?.business_name}</p>
        <p className="">{businessInformation?.career_title}</p>
        <p className="line-clamp-2">{businessInformation?.biography}</p>
      </div>
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
