import StoryListModal from "../../../../../common/UI elements/StoriesList/StoryListModal";
import { calculateAverage } from "../../../../../common/utils/constants";
import { useProfileData } from "../../SellerProfilePage";
import { uniq } from "lodash";

function ProfileHeader() {
  const {
    sellerData: { userInfo, orders, products, reviews },
    storyLoading,
    storiesList,
    isStoriesShow,
    setStorieModal,
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
              if (!storyLoading && storiesList?.length > 0) {
                // it sets to 0 becuase StoryModal component logic uses isStoriesShow (in SellerProfile component) as currentListIndex
                setStorieModal(0);
              }
            }}
            className={`${
              storyLoading && "animate-pulse"
            } size-20 lg:size-[5.5rem] border-4 border-gray-50 bg-gray-50 flex items-center justify-center rounded-full overflow-hidden select-none cursor-pointer`}
          >
            {storiesList?.length > 0 && (
              <div
                className={`${
                  storiesList[0]?.isSeen
                    ? "bg-slate-400"
                    : "gradient-background"
                } absolute size-24 -z-10 rounded-full`}
              ></div>
            )}
            <img src={personalInformation?.profilePic} alt="user-avatar" />
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
        <p className="">{businessInformation?.career_title}</p>
        <p className="line-clamp-2">{businessInformation?.biography}</p>
      </div>
    </>
  );
}

export default ProfileHeader;
