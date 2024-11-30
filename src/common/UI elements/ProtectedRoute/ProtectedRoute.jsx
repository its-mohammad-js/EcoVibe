import { useEffect, useState } from "react";
import toast, { LoaderIcon } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { errorIconUrl } from "constants";
import { getUserData } from "src/reducers/auth/userDataSlice";

function ProtectedRoute() {
  // necessary data & hooks
  const { loading, userId, auth_status, error } = useSelector(
    (state) => state.userData
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [failures, setFailures] = useState(0);

  // reload page on fourth try
  useEffect(() => {
    if (failures >= 4) {
      window.location.reload();
    }

    if (error && failures < 4) {
      setFailures((prev) => prev + 1);
    }
  }, [error, loading]);

  // navigate unauthorized users to sign-in page
  useEffect(() => {
    if (!loading && auth_status === 401) {
      toast.error("You need to be logged in to access this page.");
      navigate("/EcoVibe/");
    }
  }, [loading, auth_status]);

  // dispaly error state on error case
  if (!loading && error)
    return (
      <div className="h-screen flex flex-col gap-y-4 items-center justify-center">
        <div className="">
          <img
            src={errorIconUrl}
            alt="error-icon"
            className="size-56 xl:size-64 object-cover"
          />
        </div>
        <div className="flex items-center justify-center flex-col gap-y-4">
          <p className="text-6xl font-bold text-primary-600">Oops!</p>
          <h4 className="text-lg font-bold text-primary-900 text-center">
            {error?.message || "Failed To Read User Data"}
          </h4>
          <button
            onClick={() => {
              if (failures >= 4) window.location.reload();
              else dispatch(getUserData());
            }}
            className="px-4 py-2 bg-primary-500 rounded-md text-gray-50 border-2 border-primary-500 hover:bg-gray-50 hover:text-primary-500 hover:border-primary-500 transition-all"
          >
            Try Again
          </button>
        </div>
      </div>
    );

  // loading user data case
  if (!userId && loading)
    return (
      <div className="h-screen flex flex-col gap-y-8 items-center justify-center">
        <LoaderIcon className="size-24" />
        <h4 className="text-2xl xl:text-4xl font-bold text-center animate-pulse">
          Getting ready to display your info...
        </h4>
      </div>
    );
  // render child component after loading
  else if ((!loading && userId) || auth_status === 200) return <Outlet />;
}

export default ProtectedRoute;
