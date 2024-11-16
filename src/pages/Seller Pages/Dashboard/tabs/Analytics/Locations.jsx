import { Map, Marker } from "pigeon-maps";
import { useState } from "react";
import toast, { LoaderIcon } from "react-hot-toast";
import { BiPlus } from "react-icons/bi";
import { MdOutlineFullscreen } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "src/reducers/auth/userDataSlice";
import { validateLocation } from "../../../../../common/utils/constants";

function Locations() {
  // map full screen mode state
  const [selectMode, setMode] = useState(false);
  // selected location data
  const [location, setLocation] = useState({});
  // get seller location's
  const { businessInformation } = useSelector((state) => state.userData);
  // necessary data & hooks
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // add location to seller profile information
  async function addLocation() {
    // check user selected location
    if (!location.lat && !location.lng) {
      toast.error("Please select a location first");
    }
    // limit seller locations count
    if (businessInformation?.location?.length >= 4) {
      toast("you've already set 4 locations");
    }
    // validate location and update user profile info with new data
    try {
      // dispatch loading
      setLoading(true);
      // check location is valid
      const isValidatedLocation = await validateLocation(
        location.lat,
        location.lng
      );
      // update seller pofile
      if (isValidatedLocation) {
        // update user data with new location
        const updatedInfo = {
          ...businessInformation,
          locations: [...(businessInformation?.locations || []), location],
        };
        // add seller location to data base
        dispatch(
          await updateUserData({
            field: "businessInformation",
            data: updatedInfo,
          })
        );
        // reset location state
        setLocation({});
        // dispatch success
        toast.success("location added to your profile");
        setMode(!selectMode);
      } else {
        // dispatch error on seleted location
        toast("please select a valid location");
      }
    } catch (error) {
      toast("there was an error on process please try again later");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className={`${
        selectMode && "!fixed inset-0 z-50 [&>h4]:hidden [&>div]:h-full"
      } size-full relative flex flex-col justify-end`}
    >
      <h4 className="text-xl font-bold my-2 absolute -top-2 left-0 z-10">
        Location's
      </h4>
      <div className="h-5/6 [&>div]:!rounded-md ">
        <Map
          onClick={(e) => {
            if (selectMode) setLocation({ lat: e.latLng[0], lng: e.latLng[1] });
          }}
          defaultCenter={[
            businessInformation?.locations
              ? businessInformation?.locations[0]?.lat
              : 30,
            businessInformation?.locations
              ? businessInformation?.locations[0]?.lng
              : 50,
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
          {businessInformation.locations?.map(({ lat, lng }, index) => (
            <Marker
              key={index}
              anchor={[lat, lng]}
              color="#1632e9"
              width={50}
            />
          ))}
        </Map>
        {/* action buttons */}
        <div className="absolute bottom-2 flex items-center gap-x-2 right-2">
          {/* add new location action */}
          <button
            disabled={loading}
            onClick={addLocation}
            className={`${
              selectMode
                ? "translate-x-0 visible opacity-100"
                : "translate-x-12 invisible opacity-0"
            } flex items-center z-10 bg-primary-500 rounded-full disabled:opacity-80 disabled:cursor-wait text-gray-50 transition-all duration-200 hover:bg-gray-50 hover:text-primary-500`}
          >
            {location?.lat && location?.lng && (
              <p className="px-4">
                {loading ? "Add location..." : "Add new location"}
              </p>
            )}
            {loading ? (
              <p className="p-2">
                <LoaderIcon className="size-8" />
              </p>
            ) : (
              <BiPlus className="text-5xl p-1" />
            )}
          </button>
          {/* toggle modal  */}
          <button
            disabled={loading}
            onClick={() => {
              if (selectMode) {
                setLocation({});
              }
              setMode(!selectMode);
            }}
            className="z-10 right-2 bg-primary-500 rounded-full disabled:opacity-80 disabled:cursor-wait text-gray-50 transition-all hover:bg-gray-50 hover:text-primary-500"
          >
            <MdOutlineFullscreen className="text-5xl p-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Locations;
