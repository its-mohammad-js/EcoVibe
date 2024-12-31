import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SideMenuProfileLoader from "UI/Loaders/SideMenuProfileLoader";
import useDisableScroll from "hooks/UseDisableScroll";
import { TbUser } from "react-icons/tb";
import { menuOptions } from "./menuOptions";

function SideMenu({ sideMenuShow, setSideMenu }) {
  // necessary hooks & data
  const { personalInformation, loading, auth_status, userType } = useSelector(
    (state) => state.userData
  );
  const navigate = useNavigate(); // navigate hook
  useDisableScroll(Infinity, !sideMenuShow); // disable scroll on side menu

  // navigate functionality
  function sideMenuNavigate(path) {
    if (sideMenuShow) {
      navigate(path);
      setSideMenu(false);
    }
  }

  return (
    <div
      className={`${
        sideMenuShow ? "opacity-100 visible" : "opacity-0 invisible"
      } fixed inset-0 z-[60] transition-all duration-500`}
    >
      {/* main menu */}
      <div
        className={`${
          sideMenuShow ? "translate-x-0" : "-translate-x-44"
        } w-3/4 bg-gray-50 z-10 relative h-screen transition-all duration-500 flex flex-col items-center`}
      >
        {/* user profile information */}
        {loading ? (
          <SideMenuProfileLoader />
        ) : (
          <div
            onClick={() => {
              sideMenuNavigate(
                auth_status === 200
                  ? "/EcoVibe/profile"
                  : "/EcoVibe/Customers/sign-up"
              );
            }}
            className="w-full shadow-md flex items-center justify-between p-2"
          >
            <div className="flex items-center justify-center gap-x-3">
              <div className="size-16 pt-2 bg-gray-200 rounded-full overflow-hidden flex items-center justify-between">
                {auth_status === 200 ? (
                  <img
                    src={personalInformation?.profilePic}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                ) : (
                  <TbUser className="size-full text-gray-600 mt-2" />
                )}
              </div>
              <div className="max-w-[70%] flex flex-col justify-between items-start">
                <h2 className="text-lg font-medium line-clamp-1 w-9/12 break-words">
                  {auth_status === 200
                    ? personalInformation?.first_name?.trim() || ""
                    : "Guest user"}
                </h2>
                <p className="text-sm line-clamp-1 w-9/12 break-words">
                  {auth_status === 200
                    ? personalInformation?.email || ""
                    : "Click to sign-up"}
                </p>
              </div>
            </div>
          </div>
        )}
        {/* menu options and links */}
        <div className="overflow-auto w-full h-[90%]">
          <div className="flex flex-col gap-y-2">
            {menuOptions({ auth_status, userType }).map(
              ({ label, icon: Icon, path }, index) => (
                <div
                  key={index}
                  onClick={() => sideMenuNavigate(path)}
                  className="flex items-center justify-start gap-x-2 px-4 py-4 w-full flex-none"
                >
                  <span className="text-3xl">
                    <Icon />
                  </span>
                  <h3 className="text-base">{label}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      {/* menu background */}
      <div
        onClick={() => setSideMenu(false)}
        className="size-full bg-black backdrop-blur-sm bg-opacity-30 absolute inset-0"
      ></div>
    </div>
  );
}

export default SideMenu;
