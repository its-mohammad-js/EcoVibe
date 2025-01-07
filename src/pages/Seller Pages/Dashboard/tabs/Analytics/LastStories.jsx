import { useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { BsTrash } from "react-icons/bs";
import { timestampToDate } from "helpers";
import IconicWarningAlert from "UI/Alerts/IconicAlert";
import LastStoriesLoader from "UI/Loaders/LastStoriesLoader";
import LoaderIcon from "UI/Loaders/LoaderIcon";
import useGetStories from "hooks/useGetStories";
import useRemoveStory from "hooks/useRemoveSlide";
import { AiFillHeart, AiOutlineEye } from "react-icons/ai";
import ContentSwitcher from "UI/ContentSwitcher/ContentSwitcher";

function LastStories() {
  const [alertIsShow, setAlert] = useState(false); // delete story alert state
  // current user data
  const { userId } = useSelector((state) => state.userData);
  // current story slide state
  const [currentStory, setCurrentStory] = useState(null);
  // get stories hook
  const { loading, groupedStories: storyList } = useGetStories(userId);
  // remove slide handler
  const { loading: deleting, onDeleteSlide } = useRemoveStory();

  // handle slide stories change
  function onChangeSlide(slideIndex) {
    setCurrentStory(storyList[0]?.slides[slideIndex]);
  }

  if (loading)
    // loading screen
    return <LastStoriesLoader />;

  if (!loading && storyList?.length)
    // main component
    return (
      <>
        <div className="size-full overflow-hidden rounded-xl relative">
          {/* main slider */}
          <Slider
            autoplay={true}
            speed={1500}
            className="h-full rounded-lg overflow-hidden bg-gray-200"
            onInit={() => onChangeSlide(0)}
            afterChange={(e) => onChangeSlide(e)}
          >
            {storyList[0]?.slides.map((story, i) => (
              <div key={i} className="h-96">
                <ContentSwitcher
                  contentType={story.type}
                  contentUrl={story?.contentUrl}
                />
              </div>
            ))}
          </Slider>
          {/* story info */}
          <div className="absolute bottom-0 w-full h-20 bg-gray-900/80 backdrop-blur px-4 py-2 flex flex-col justify-evenly">
            <h4 className="text-lg lg:text-xl font-bold text-gray-200">
              created at: &nbsp;
              {timestampToDate(currentStory?.createdAt, null, "database")}
            </h4>
            <div className="flex items-center gap-x-2">
              <p className={"flex items-center gap-x-1 text-gray-400"}>
                <AiOutlineEye className="text-gray-300 text-2xl" />
                {currentStory?.seenBy?.length || 0}
              </p>
              <p className={"flex items-center gap-x-1 text-gray-400"}>
                <AiFillHeart className="text-gray-300 text-2xl" />
                {currentStory?.seenBy?.length || 0}
              </p>
            </div>

            <button
              onClick={() => {
                setAlert(true);
              }}
              className="absolute right-5 text-3xl text-gray-300"
            >
              <BsTrash />
            </button>
          </div>
        </div>
        {/* warning alert on delete story */}
        <div
          className={`${
            alertIsShow ? "opacity-100 visible" : "invisible opacity-0"
          } fixed inset-0  z-50 flex items-center justify-center transition-all`}
        >
          {deleting ? (
            <div className="flex flex-col items-center gap-y-6">
              <LoaderIcon className="size-24" />
              <h4 className="text-gray-300 animate-pulse text-2xl text-center font-bold">
                Please Dont Refresh The Page While Deleting Story...
              </h4>
            </div>
          ) : (
            <IconicWarningAlert
              title="Are you sure you want to delete this story?"
              subTitle="Cancel"
              callBack={() =>
                onDeleteSlide(currentStory, () => setAlert(false))
              }
              onClose={() => setAlert(false)}
            />
          )}
          {/* delete action button */}
          <div
            onClick={() => setAlert(false)}
            className="absolute inset-0 bg-gray-950/80 backdrop-blur -z-10"
          ></div>
        </div>
      </>
    );

  if (!loading && !storyList?.length)
    // 404 error screen
    return (
      <div className="size-full overflow-hidden rounded-xl relative">
        <div className="h-96 w-full px-4 bg-gray-200 flex items-center justify-center">
          <h4 className="mb-28 text-2xl text-center font-bold text-gray-900">
            You Have No Story yet, you can add a new story from side menu
          </h4>
        </div>

        <div className="absolute bottom-0 w-full h-20 bg-gray-900/80 backdrop-blur px-4 py-2 flex flex-col justify-evenly">
          <p className="w-48 rounded-md h-2 bg-gray-400"></p>
          <p className="w-24 rounded-md h-2 bg-gray-400"></p>
        </div>
      </div>
    );
}

export default LastStories;
