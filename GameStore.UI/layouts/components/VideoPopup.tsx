import { useState } from "react";

function VideoPopup({ id, thumbnail, width = 700, height = 394 }) {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="animate relative  flex overflow-hidden rounded-2xl">
      {showPopup ? (
        <div>
          <LiteYoutubeEmbed id={id} defaultPlay={true} />
        </div>
      ) : (
        <div className="relative inline-block w-full">
          <ImageFallback
            className="w-full"
            src={thumbnail}
            width={width}
            height={height}
            alt=""
          />
          <button
            onClick={() => setShowPopup(true)}
            className="intro-play-btn absolute top-1/2 left-1/2 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-2xl text-body lg:h-[90px] lg:w-[90px]"
          >
            <FeatherIcon icon="play" size={32} />
          </button>
        </div>
      )}
    </div>
  );
}

export default VideoPopup;
