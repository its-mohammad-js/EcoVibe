import { useEffect, useRef, useState } from "react";
import { LoaderIcon } from "react-hot-toast";
import { useSlide } from "../StoryListModal";

function SlideContent({
  setRemainingTime, // set remian time befor change slide
  loading, // loading process state
  changeStoryHandler, // change list || slide handler
  pause, // pause state
  handlePause, // change pause handler
  contextMenuShow, // context menu state
}) {
  const { story, slideindex, currentSlideIndex } = useSlide(); // slide data
  const videoRef = useRef(); // ref to video content
  const [isLoaded, setLoaded] = useState(false); // load content state

  // on loading content handler
  function handleLoadContent() {
    setLoaded(true);
    handlePause();
  }

  // Update video playback based on pause state
  useEffect(() => {
    if (videoRef.current) {
      if (pause) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  }, [pause]);

  return (
    <div className="size-full relative z-40 overflow-hidden flex items-center justify-center p-6">
      {/* content loading icon */}
      {!isLoaded && <LoaderIcon className="size-20 absolute" />}
      {/* slide content */}
      {story.type?.startsWith("image/") ? (
        <img
          src={story.contentUrl}
          alt="story-content"
          className="size-full object-contain"
          onLoad={() => handleLoadContent()}
        />
      ) : (
        <video
          ref={videoRef}
          onLoadedData={() => handleLoadContent()}
          onPlaying={(e) => {
            const currentDuration = Math.max(
              0,
              (e.target.duration - e.target.currentTime) * 1000
            );

            setRemainingTime(currentDuration);
          }}
          autoPlay={currentSlideIndex === slideindex}
          className="size-full object-cover"
          src={story.contentUrl}
        ></video>
      )}
      {/* loading screen */}
      {loading && (
        <div className="absolute z-50 inset-0 flex flex-col text-gray-200 gap-y-4 font-medium bg-gray-900/80 rounded-xl items-center justify-center">
          <LoaderIcon className="size-24" />
          <p>Deleting story, please dont refresh page</p>
        </div>
      )}
      {/* touch blocks (next || prev) */}
      <div
        onTouchStart={() => handlePause(true)}
        onTouchEnd={() => handlePause(false)}
        className="absolute z-50 inset-0 flex"
      >
        <div
          onClick={() =>
            !contextMenuShow && !loading && changeStoryHandler("prev")
          }
          className="h-full w-2/5"
        ></div>
        <div
          onClick={() =>
            !contextMenuShow && !loading && changeStoryHandler("next")
          }
          className="h-full w-3/5"
        ></div>
      </div>
    </div>
  );
}

export default SlideContent;
