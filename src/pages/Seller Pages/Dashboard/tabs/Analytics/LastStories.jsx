import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { db, storage } from "src/config/firebase";
import Slider from "react-slick";
import { BsTrash } from "react-icons/bs";
import toast, { LoaderIcon } from "react-hot-toast";
import { timestampToDate } from "constants";
import IconicWarningAlert from "UI/Alerts/IconicAlert";
import { deleteObject, ref } from "firebase/storage";

function LastStories() {
  const [{ error, loading, storyList }, setLastStories] = useState({
    storyList: [],
    loading: false,
    error: null,
  });
  const {
    userId,
    personalInformation: { first_name, last_name },
  } = useSelector((state) => state.userData);
  const sliderRef = useRef();
  const [{ currentStory, deleting }, setCurrentStory] = useState({
    currentStory: {},
    deleting: false,
  });
  const [alertIsShow, setAlert] = useState(false);

  async function getLastStories() {
    try {
      // dispatch loading
      setLastStories((prev) => ({ ...prev, loading: true }));
      // ref to current seller stories in firestore
      const storyRef = query(
        collection(db, "Stories"),
        where("authorId", "==", userId)
      );
      // get last story
      const lastStories = await getDocs(storyRef).then(({ docs }) =>
        docs.map((doc) => doc.data()).sort((a, b) => a.createdAt > b.createdAt)
      );
      // dispatch success
      setLastStories({ error: null, loading: false, storyList: lastStories });
      setCurrentStory((prev) => ({ ...prev, currentStory: lastStories[0] }));
    } catch (error) {
      // dispatch failure
      setLastStories({ error, loading: false, storyList: null });
      console.log(error);
    }
  }

  useEffect(() => {
    getLastStories();
  }, []);

  async function deleteStory() {
    try {
      // dispatch loading
      setCurrentStory((prev) => ({ ...prev, deleting: true }));
      // ref to story content on storage
      const contentRef = ref(storage, currentStory.contentUrl);
      // delete story content from storage
      await deleteObject(contentRef);
      // ref to story on firestore
      const docRef = doc(collection(db, "Stories"), currentStory.id);
      // delete story from firestore
      await deleteDoc(docRef);
      // dispatch success
      setCurrentStory((prev) => ({ ...prev, deleting: false }));
      setAlert(false);
      getLastStories();
    } catch (error) {
      // dispatch error
      toast.error("There was an error on delete story, please try again later");
      setCurrentStory((prev) => ({ ...prev, deleting: false }));
      setAlert(false);
      console.log(error);
    }
  }

  if (loading)
    return (
      <div className="size-full overflow-hidden rounded-xl relative animate-pulse">
        <div className="h-96 w-full bg-gradient-to-br from-gray-300 to-gray-700"></div>

        <div className="absolute bottom-0 w-full h-20 bg-gray-900/80 backdrop-blur px-4 py-2 flex flex-col justify-evenly">
          <p className="w-48 rounded-md h-2 bg-gray-400"></p>
          <p className="w-24 rounded-md h-2 bg-gray-400"></p>
        </div>
      </div>
    );

  if (!loading && storyList.length)
    return (
      <>
        <div className="size-full overflow-hidden rounded-xl relative">
          <Slider
            autoplay={true}
            speed={1500}
            className="h-full"
            ref={sliderRef}
            onSwipe={() => {
              setCurrentStory((prev) => ({
                ...prev,
                currentStory:
                  storyList[sliderRef.current.innerSlider.state.currentSlide],
              }));
            }}
          >
            {storyList.map((story, i) => (
              <div key={i} className="h-96">
                {story.type.includes("image") ? (
                  <img
                    src={story?.contentUrl}
                    alt="story thumnail"
                    className="size-full object-cover"
                  />
                ) : (
                  <video
                    width="400"
                    controls={false}
                    preload="metadata"
                    className="object-contain size-full"
                  >
                    <source
                      src={`${story?.contentUrl}#t=0.1`}
                      type="video/mp4"
                    ></source>
                  </video>
                )}
              </div>
            ))}
          </Slider>

          <div className="absolute bottom-0 w-full h-20 bg-gray-900/80 backdrop-blur px-4 py-2 flex flex-col justify-evenly">
            <h4 className="text-lg lg:text-xl font-bold text-gray-200">
              created at: {timestampToDate(currentStory.createdAt)}
            </h4>
            <p className="font-semibold text-gray-300">
              created by {first_name + " " + (last_name ? last_name : "")}
            </p>

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
              callBack={() => deleteStory()}
              onClose={() => setAlert(false)}
            />
          )}

          <div
            onClick={() => setAlert(false)}
            className="absolute inset-0 bg-gray-950/80 backdrop-blur -z-10"
          ></div>
        </div>
      </>
    );

  if (!loading && !storyList.length)
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
