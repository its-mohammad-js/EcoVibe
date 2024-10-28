import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import QuickAccessMenu from "./modals/QuickAccessMenu";
import AddEditProductForm from "./modals/Add Product Modal/AddEditProductForm";
import DashboardContext from "./DashboardContext";
import AddStoryModal from "./modals/AddStoryModal";
import ProtectedRoute from "UI/ProtectedRoute/ProtectedRoute";

function SellerDashboardPage() {
  // modal's state
  const [modal, setModal] = useState(null);
  const params = useParams();
  const { userType } = useSelector((state) => state.userData);
  const navigate = useNavigate();

  useEffect(() => {
    if (userType === "customer") {
      toast.error("You aren't a selller yet please sign up as a seller");
      navigate("/EcoVibe/sellers-solutions");
    }
  }, [userType]);

  // quick access to modals (with url query)
  useEffect(() => {
    if (
      params.modalKey &&
      (params.modalKey === "add-product" || params.modalKey === "add-story")
    ) {
      setModal(params?.modalKey);
    }
  }, [params]);

  // open / close modal's function
  function onModalChange(modalKey) {
    setModal(modal === modalKey ? null : modalKey);
  }

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl -mb-4 relative min-h-screen">
      {/* quick access */}
      <QuickAccessMenu onModalChange={onModalChange} />
      {/* dashboard tabs */}
      <DashboardContext>
        <ProtectedRoute>
          <Outlet />
        </ProtectedRoute>
      </DashboardContext>
      {/* modals */}
      <div
        className={`${
          modal ? "visible opacity-100" : "invisible opacity-0"
        } transition-all fixed inset-0 flex items-center justify-center px-2 z-50`}
      >
        {modal === "add-product" && (
          <AddEditProductForm onModalChange={onModalChange} />
        )}

        {modal === "add-story" && (
          <AddStoryModal onModalChange={onModalChange} />
        )}

        <div
          onClick={() => setModal(null)}
          className="absolute inset-0 bg-gray-950/70 backdrop-blur cursor-pointer -z-10"
        ></div>
      </div>
    </div>
  );
}

export default SellerDashboardPage;
