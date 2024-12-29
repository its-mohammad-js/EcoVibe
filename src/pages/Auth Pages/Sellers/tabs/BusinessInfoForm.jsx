import { useState } from "react";
import { Map, Marker } from "pigeon-maps";
import { MdOutlineFullscreen } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "authActions/updateUserData";
import TextInput from "UI/Forms/TextInput";
import { validateLocation } from "helpers";

// inputs information
const inputsInfo = [
  { name: "business_name", placeholder: "enter your business name" },
  { name: "career_title", placeholder: "what is your services ?" },
  { name: "slogan", placeholder: "enter your slogan" },
];

function BusinessInfoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm(); // form data
  // map & location data
  const [location, setLocation] = useState(null);
  const [mapFullScreen, setMapFull] = useState(false);
  // necessary data & hooks
  const { loading, userType } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  // handle submit business form
  async function submitBusinessInfo(formData) {
    // check validation of form & selected location
    const locationIsValid = await validateLocation(location[0], location[1]);
    if (!locationIsValid) {
      toast.remove();
      toast.error("Please select a valid location");
      return;
    }
    if (isValid && !location) {
      toast("Please Add Your Location");
      return;
    } else {
      // add business information to seller data
      const sellerBusinessInfo = {
        ...formData,
        locations: [{ lat: location[0], lng: location[1] }],
      };
      // update seller data with new data
      dispatch(
        updateUserData({
          userType:
            userType === "customer" || userType === "both" ? "both" : "seller",
          seller_step: "third-step",
          field: "businessInformation",
          data: sellerBusinessInfo,
        })
      );
    }
  }

  return (
    <div className="relative lg:px-6">
      {/* information form */}
      <form
        onSubmit={handleSubmit((e) => submitBusinessInfo(e))}
        className={`${
          loading && "animate-pulse"
        } px-4 py-2 flex flex-col gap-4 lg:w-[48%] lg:bg-gray-50/30 lg:border lg:rounded-xl lg:py-4`}
      >
        <h4 className="text-xl lg:text-2xl font-semibold text-gray-800">
          Tell Us About Your Business ;)
        </h4>
        {/* map component */}
        <div
          className={`${
            mapFullScreen
              ? "fixed inset-0 h-full"
              : "border-2  rounded-xl relative lg:absolute lg:top-0 lg:w-1/2 lg:right-4 h-80 lg:h-full"
          }`}
        >
          <button
            type="button"
            disabled={loading}
            onClick={() => setMapFull(!mapFullScreen)}
            className="absolute bottom-2 z-10 right-2 bg-gray-50 rounded-full text-primary-400 transition-all"
          >
            {location && mapFullScreen ? (
              <FaCheck className="text-5xl p-2" />
            ) : (
              <MdOutlineFullscreen className="text-5xl p-1" />
            )}
          </button>

          <Map
            onClick={(e) => setLocation(e.latLng)}
            // height={mapFullScreen ? 1000 : 300}
            defaultCenter={[35.77142984637282, 51.46089654722849]}
            defaultZoom={11}
          >
            {location && (
              <Marker color="#1632e9" width={50} anchor={location} />
            )}
          </Map>
        </div>
        {/* main input's */}
        {inputsInfo.map(({ name, placeholder }, index) => (
          <>
            <label
              htmlFor={name}
              className="font-semibold first-letter:uppercase -mb-2"
            >
              {name.replace("_", " ")} :
            </label>
            <TextInput
              name={name}
              id={name}
              placeholder={placeholder}
              register={register(name, {
                required: { value: true, message: "this field is required" },
              })}
              errors={errors}
              disabled={loading}
              key={index}
              style="!h-10 bg-white"
            />
          </>
        ))}
        {/* biography text area */}
        <div className="">
          <div>
            <h4 className="font-semibold mb-2">Biography :</h4>

            <textarea
              type="text"
              disabled={loading}
              {...register("biography", {
                required: { value: true, message: "this field is required" },
              })}
              placeholder="About you..."
              rows={5}
              className="w-full border border-gray-300 px-2 disabled:animate-ping py-2 rounded-lg outline-none placeholder:text-gray-400 focus:border-gray-300 transition-all resize-none"
            />

            <p className="text-sm text-red-500 mt-1">
              {errors.biography?.message}
            </p>
          </div>
        </div>
        {/* location picker */}
        <button className="px-4 py-2 bg-primary-500 w-fit rounded-md text-gray-50 self-end">
          Submit
        </button>
      </form>
    </div>
  );
}

export default BusinessInfoForm;
