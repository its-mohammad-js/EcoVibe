import { useEffect, useRef, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineMail } from "react-icons/ai";
import { getDatabase, ref, set } from "firebase/database";
import { useProfileData } from "../SellerProfilePage";
import { uniq } from "lodash";
import { calculateAverage } from "../../../../common/utils/constants";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "/src/config/firebase";
import toast from "react-hot-toast";
import StoryModal from "../../../../common/UI elements/StoriesList/StoryModal";

function SellerInfo({ seller, onEditHandler }) {
  const [{ loading, storiesList, currentListIndex }, setList] = useState({
    storiesList: [],
    loading: false,
    currentListIndex: null,
  });
  const [isStoriesShow, setStorieModal] = useState(null);
  const navigate = useNavigate();
  const {
    sellerData: { userInfo, orders, products, reviews },
  } = useProfileData();
  const { personalInformation, businessInformation } = userInfo || {};
  const params = useParams();

  useEffect(() => {
    const fetchSellerStories = async () => {
      try {
        setList((prev) => ({ ...prev, loading: true }));
        const storiesQuery = query(
          collection(db, "Stories"),
          where("authorId", "==", params.id)
        );
        const storiesList = await getDocs(storiesQuery).then(({ docs }) =>
          docs.map((doc) => doc.data())
        );

        setList({
          loading: false,
          storiesList: [storiesList],
          currentListIndex: 0,
        });
      } catch (error) {
        toast.error("there was an error on fetching proccess");
        console.log(error);
      }
    };

    fetchSellerStories();
  }, []);

  // calculate cutomers count
  function calculateCustomers() {
    const customersId = uniq(orders.map((order) => order.customerId));

    return customersId.length;
  }

  // calculate stars
  function calculateStars() {
    const averageStars = calculateAverage(
      reviews.map(({ content }) => content.stars)
    );

    return averageStars;
  }

  async function sendMessage() {
    const roomId = `FROM:${userId}&TO:${params.id}`;
    const dbRef = getDatabase();
    await set(ref(dbRef, `rooms/${roomId}`), {
      roomId,
      // customer data
      [userId]: { ...personalInformation, ...businessInformation, userType },
      // seller data
      [params?.id]: {
        ...sellerData.personalInformation,
        ...sellerData.businessInformation,
        userType: sellerData.userType,
      },
      members: [userId, params.id],
    });
    navigate(`/EcoVibe/Messages/`);
  }

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
                setStorieModal(0);
              }
            }}
            className={`${loading && "animate-pulse"} ${
              !loading && storiesList.length > 0 && "ring-4 ring-red-500"
            } size-16 lg:size-24 bg-gray-100 rounded-full overflow-hidden select-none cursor-pointer`}
          >
            <img src={personalInformation?.profilePic} alt="user-avatar" />
          </div>

          {/* seller stories modal */}
          {isStoriesShow !== null && (
            <StoryModal
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
        <button className="px-4 py-2 text-sm lg:text-base bg-gray-300 hover:bg-opacity-50 transition-all text-gray-950 rounded-lg">
          Products
        </button>
        <button className="px-4 py-2 text-sm lg:text-base bg-gray-300 hover:bg-opacity-50 transition-all text-gray-950 rounded-lg">
          Message
        </button>
        <button className="px-4 py-2 text-sm lg:text-base bg-gray-300 hover:bg-opacity-50 transition-all text-gray-950 rounded-lg">
          Email
        </button>
      </div>
    </div>
  );
}

export default SellerInfo;
