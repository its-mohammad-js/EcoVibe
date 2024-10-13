import { Map, Marker } from "pigeon-maps";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiPlus } from "react-icons/bi";
import { MdOutlineFullscreen } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "src/reducers/auth/userDataSlice";

function Locations() {
  // map full screen mode state
  const [selectMode, setMode] = useState(false);
  // selected location data
  const [location, setLocation] = useState({});
  // get seller location's
  const { businessInformation } = useSelector((state) => state.userData);
  // necessary data & hooks
  const dispatch = useDispatch();

  function addLocation() {
    if (location.lat && location.lng) {
      const updatedInfo = {
        ...businessInformation,
        locations: [...businessInformation.locations, location],
      };
      dispatch(
        updateUserData({ field: "businessInformation", data: updatedInfo })
      );
    } else {
      toast.error("Please select a location first");
    }
  }

  if (businessInformation?.locations?.length)
    return (
      <div
        className={`${
          selectMode && "!fixed inset-0 z-50 [&>h4]:hidden [&>div]:h-full"
        } size-full relative flex flex-col justify-end`}
      >
        <h4 className="text-xl font-bold my-2 absolute -top-2 left-0 z-10">
          Location's
        </h4>
        <div className="h-5/6 [&>div]:!rounded-md">
          <Map
            onClick={(e) => {
              if (selectMode)
                setLocation({ lat: e.latLng[0], lng: e.latLng[1] });
            }}
            defaultCenter={[
              businessInformation.locations[0].lat,
              businessInformation.locations[0].lng,
            ]}
            defaultZoom={4}
          >
            {location.lat && location.lng && (
              <Marker
                anchor={[location.lat, location.lng]}
                color="#7384f2"
                width={50}
              />
            )}

            {businessInformation.locations.map(({ lat, lng }, index) => (
              <Marker
                key={index}
                anchor={[lat, lng]}
                color="#1632e9"
                width={50}
              />
            ))}
          </Map>
          <button
            onClick={() => {
              if (selectMode) {
                setLocation({});
              }
              setMode(!selectMode);
            }}
            className="absolute bottom-2 z-10 right-2 bg-primary-500 rounded-full text-gray-50 transition-all hover:bg-gray-50 hover:text-primary-500"
          >
            <MdOutlineFullscreen className="text-5xl p-1" />
          </button>
          <button
            onClick={addLocation}
            className={`${
              selectMode
                ? "translate-x-0 visible opacity-100"
                : "translate-x-12 invisible opacity-0"
            } absolute bottom-2 z-10 right-16 bg-primary-500 rounded-full text-gray-50 transition-all duration-200 hover:bg-gray-50 hover:text-primary-500`}
          >
            <BiPlus className="text-5xl p-1" />
          </button>
        </div>
      </div>
    );
}

export default Locations;
