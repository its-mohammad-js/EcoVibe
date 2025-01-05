import StoryListModal from "UI/StoriesList/StoryListModal";
import { calculateAverage } from "helpers";
import { useProfileData } from "../../SellerProfilePage";
import { uniq } from "lodash";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import AddStoryModal from "../../../../../common/UI elements/AddStoryModal/AddStoryModal";

function ProfileHeader() {
  const {
    sellerData: { userInfo, orders, products, reviews },
    storyLoading,
    storiesList,
    isStoriesShow,
    setStorieModal,
    isOwner,
  } = useProfileData();
  const { personalInformation, businessInformation } = userInfo || {};
  const [showAddStory, setModal] = useState(false);

  function onOpenStoryHanlder() {
    if (!storyLoading && storiesList?.length > 0) {
      // it sets to 0 becuase StoryModal component logic uses isStoriesShow (in SellerProfile component) as currentListIndex
      setStorieModal(0);
    }
  }

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

  return (
    <>
      {/* profile & stories section */}
      <div className="flex items-center justify-evenly gap-x-4 lg:gap-x-8 lg:w-fit">
        <>
          {/* profile pic */}
          <div
            className={`${
              storyLoading && "animate-pulse"
            } size-20 flex-none lg:size-[5.5rem] relative border-4 border-gray-50 bg-gray-50 flex items-center justify-center rounded-full select-none cursor-pointer`}
          >
            {storiesList?.length > 0 && (
              <div
                className={`${
                  storiesList[0]?.isSeen
                    ? "bg-slate-400"
                    : "gradient-background"
                } absolute size-[5.5rem] lg:size-24 -z-10 rounded-full`}
              ></div>
            )}
            <img
              onClick={onOpenStoryHanlder}
              src={personalInformation?.profilePic}
              alt="user-avatar"
              className="rounded-full"
            />
            <button
              disabled={!isOwner}
              onClick={() => setModal(true)}
              className="absolute disabled:hidden hover:scale-125 transition-all -bottom-1 -right-1 p-1.5 bg-primary-500 rounded-full text-gray-50"
            >
              <FaPlus />
            </button>
          </div>

          {/* add story for owners */}
          <div
            className={`${
              showAddStory ? "opacity-100 visible" : "opacity-0 invisible"
            } transition-all fixed inset-0 z-50 flex items-center justify-center`}
          >
            <AddStoryModal onModalChange={() => setModal(false)} />
            <div
              onClick={() => setModal(false)}
              className="absolute inset-0 bg-gray-950/80"
            ></div>
          </div>
          {/* seller stories modal */}
          {isStoriesShow !== null && (
            <StoryListModal
              {...{
                currentListIndex: isStoriesShow,
                setList: setStorieModal,
                storiesList: [storiesList[0]],
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
        <p className="line-clamp-2">{businessInformation?.biography}</p>
      </div>
    </>
  );
}

export default ProfileHeader;
