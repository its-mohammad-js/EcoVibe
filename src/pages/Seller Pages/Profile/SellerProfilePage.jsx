import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "src/config/firebase";
import SellerInfo from "./components/SellerInfo";
import LastProducts from "./components/LastProducts";
import Testimonials from "mainPages/Home/components/Testimonials";
import EditBusinessInfoForm from "./components/EditBusinessInfoForm";
import SellerProfilePageLoader from "UI/Loaders/SellerProfilePageLoader";

function SellerProfilePage() {
  // seller data state
  const [seller, setSellerData] = useState({
    sellerData: {},
    loading: false,
    error: null,
  });
  // params (seller id)
  const params = useParams();
  // edit modal state
  const [isEdit, setEdit] = useState(false);

  // fetch seller data from data base
  async function getSellerData() {
    try {
      // set loading true
      setSellerData((prev) => ({ ...prev, loading: true }));
      // ref to user data on data base
      const userRef = doc(db, "users", params.id);
      // get user data from data base
      const userData = await getDoc(userRef);
      // set user data to app state
      setSellerData({
        loading: false,
        sellerData: userData.data(),
        error: null,
      });
    } catch (error) {
      setSellerData({
        loading: false,
        sellerData: [],
        error: error,
      });
      console.log(error);
    }
  }

  // fetch seller data on app mount
  useEffect(() => {
    getSellerData();
  }, [params]);

  if (seller.loading) return <SellerProfilePageLoader />;

  if (!seller.loading && seller.sellerData)
    return (
      <div className="mx-auto 2xl:max-w-screen-2xl">
        {/* profile  */}
        <SellerInfo seller={seller} onEditHandler={() => setEdit(true)} />
        {/* last seller products */}
        <LastProducts />
        {/* testimonials (static) */}
        <Testimonials />
        {/* edit business information modal */}

        <div
          className={`${
            isEdit ? "opacity-100 visible" : "invisible opacity-0"
          } fixed inset-0 flex items-center justify-center transition-all z-50`}
        >
          <EditBusinessInfoForm onModalClose={() => setEdit(false)} />
          <div
            onClick={() => setEdit(false)}
            className="absolute inset-0 bg-gray-900/70 backdrop-blur"
          ></div>
        </div>
      </div>
    );
}

export default SellerProfilePage;
