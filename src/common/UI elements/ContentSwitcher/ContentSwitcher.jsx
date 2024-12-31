import { useEffect, useRef } from "react";

function ContentSwitcher({
  contentType,
  contentUrl,
  autoPlayCondition = false,
  loadingCallBack = () => {},
  setRemainingTime = () => {},
  pause,
  loading,
  controls = false,
}) {
  const videoRef = useRef(); // ref to video content

  // Update video playback based on pause state
  useEffect(() => {
    if (pause === undefined) return;

    if (videoRef.current) {
      if (pause) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  }, [pause]);

  return (
    <>
      {contentType.startsWith("image/") ? (
        <img
          src={contentUrl}
          alt="story-content"
          className={`${loading && "animate-pulse"} size-full object-contain`}
          onLoad={() => loadingCallBack()}
        />
      ) : (
        <video
          ref={videoRef}
          onLoadedData={() => loadingCallBack()}
          onPlaying={(e) => {
            const currentDuration = Math.max(
              0,
              (e.target.duration - e.target.currentTime) * 1000
            );

            setRemainingTime(currentDuration);
          }}
          controls={controls}
          autoPlay={autoPlayCondition}
          className={`${loading && "animate-pulse"} size-full object-cover`}
          src={contentUrl}
        ></video>
      )}
    </>
  );
}

export default ContentSwitcher;
