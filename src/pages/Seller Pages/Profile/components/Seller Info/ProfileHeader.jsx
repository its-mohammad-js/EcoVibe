import { useState } from "react";
import StoryListModal from "../../../../../common/UI elements/StoriesList/List/StoryListModal";
import { calculateAverage } from "../../../../../common/utils/constants";
import { useProfileData } from "../../SellerProfilePage";
import { uniq } from "lodash";

function ProfileHeader() {
  // seller stories modal state
  const [isStoriesShow, setStorieModal] = useState(null);
  const {
    sellerData: { userInfo, orders, products, reviews },
    sellerStories: { storiesList, loading },
  } = useProfileData();
  const { personalInformation, businessInformation } = userInfo || {};

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
            onClick={() => {
              if (!loading && storiesList[0].length > 0) {
                // it sets to 0 becuase StoryModal component logic uses isStoriesShow (in SellerProfile component) as currentListIndex
                setStorieModal(0);
              }
            }}
            className={`${loading && "animate-pulse"} ${
              !loading && storiesList[0]?.length > 0 && "ring-4 ring-red-500"
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
    </>
  );
}

export default ProfileHeader;
