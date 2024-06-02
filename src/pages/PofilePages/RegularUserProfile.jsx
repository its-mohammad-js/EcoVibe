import ProfilePicEdit from "../../components/ProfilePage/RegularUser/ProfilePicEdit";
import PersonalInformationForm from "../../components/ProfilePage/RegularUser/PersonalInformationForm";
import UserInterests from "../../components/ProfilePage/RegularUser/UserInterests";
import CreditCardEdit from "../../components/ProfilePage/RegularUser/CreditCardEdit";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/regularUsers/regluarUsersSlice";
import { useNavigate } from "react-router-dom";

function RegularUserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logoutHandler() {
    dispatch(logout());
    navigate("/EcoVibe/");
    window.location.reload();
  }

  return (
    <div
      id="wrapper"
      className="2xl:max-w-screen-2xl mx-auto relative md:px-4 md:py-2 gradient-background -mb-8"
    >
      {/* header */}
      <div className="w-full h-16 bg-primary-200/50 lg:h-40 lg:rounded-t-md lg:rounded-lg flex items-center justify-between px-2">
        <h4 className="text-white text-xl">
          MY PROFILE <br />
          <span className="text-sm hidden md:inline text-gray-200">
            Change Your Personal Information, <br /> Add Credit Card, Enjoy Eco
            Vibe
          </span>
        </h4>
        <button
          onClick={logoutHandler}
          className="px-3 py-1.5 text-sm md:text-lg bg-gray-300/50 text-white rounded-md"
        >
          Log out
        </button>
      </div>

      <div className="bg-gray-100/70 px-4 py-2 lg:w-4/12 lg:mx-auto lg:-mt-32 md:rounded-md">
        {/* profile picture */}
        <ProfilePicEdit />
        {/* personal information */}
        <PersonalInformationForm />
        {/* credit cards */}
        <CreditCardEdit />
        {/* user interests */}
        <UserInterests />
      </div>
    </div>
  );
}

export default RegularUserProfile;
