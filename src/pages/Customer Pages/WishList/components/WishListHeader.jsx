import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

function WishListHeader() {
  const { personalInformation, auth_status, wishlist } = useSelector(
    (state) => state.userData
  );

  return (
    <div className="relative">
      {/* gradient bg */}
      <div className="absolute inset-0 gradient-background rounded-md -z-10"></div>
      {/* user info */}
      <div className="w-full h-full py-2 bg-primary-50/50 backdrop-blur-sm rounded-md flex items-center justify-start gap-x-2">
        {/* profile pic */}
        <div className="size-24 md:size-28 flex items-center justify-center px-2">
          {personalInformation.profilePic ? (
            <img
              src={personalInformation.profilePic}
              alt="profile-pic"
              className="rounded-full bg-gray-50/50"
            />
          ) : (
            <FaUser className="bg-gray-50/50 text-6xl p-3 rounded-full" />
          )}
        </div>
        {/* personal information */}
        <div className="h-full w-fit flex flex-col items-start justify-start gap-y-1">
          <h4 className="text-2xl md:text-3xl font-medium">
            {auth_status === 200
              ? personalInformation.first_name || "first name not set!..."
              : "Guest User"}
          </h4>
          <p className="text-primary-800">
            wish-list&nbsp;(<span>{wishlist.length}</span>)
          </p>
        </div>
      </div>
    </div>
  );
}

export default WishListHeader;
