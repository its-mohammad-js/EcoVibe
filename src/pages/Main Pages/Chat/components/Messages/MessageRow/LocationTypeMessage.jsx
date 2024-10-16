import { Map, Marker } from "pigeon-maps";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function LocationTypeMessage({ message }) {
  // location modal state
  const [fullScreenMap, setFullScreen] = useState(false);

  return (
    <div className="w-64 lg:min-w-96">
      {/* main location */}
      <div
        className={`${
          fullScreenMap && "fixed inset-0 h-auto z-40"
        } w-full h-80 lg:h-96 rounded-lg overflow-hidden`}
      >
        <div onClick={() => setFullScreen(true)} className="size-full">
          <Map
            defaultCenter={[message.location[0], message.location[1]]}
            defaultZoom={11}
            mouseEvents={fullScreenMap}
            touchEvents={fullScreenMap}
          >
            {message.location && (
              <Marker color="#1632e9" width={50} anchor={message.location} />
            )}
          </Map>
        </div>

        {fullScreenMap && (
          <button
            onClick={() => setFullScreen(false)}
            className="absolute top-2 right-2 p-2.5 bg-gray-50 rounded-full text-2xl z-50"
          >
            <AiOutlineClose />
          </button>
        )}
      </div>
    </div>
  );
}

export default LocationTypeMessage;
