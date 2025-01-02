import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "/src/config/firebase";

function SellersList({ searchQuery, onModalNavigate }) {
  //  sellers data
  const [{ sellers }, setSellers] = useState({
    sellers: [],
    loading: false,
    error: null,
  });
  const navigate = useNavigate();

  const getSellers = async () => {
    try {
      // set loading true
      setSellers((prev) => ({ ...prev, loading: true }));
      // ref to seller users data
      const sellersQuery = query(
        collection(db, "users"),
        where("userType", "in", ["both", "seller"])
      );
      // fetch all sellers data
      const sellersData = await getDocs(sellersQuery).then(({ docs }) =>
        docs.map((doc) => doc.data())
      );
      // dispatch success
      setSellers({ loading: false, sellers: sellersData, error: null });
    } catch (error) {
      console.log(error);
    } finally {
      setSellers((prev) => ({ ...prev, loading: false }));
    }
  };

  useEffect(() => {
    getSellers();
  }, []);

  // search sellers by (email,business name,id)
  function matchedSellers() {
    if (sellers.length) {
      return [...sellers].filter(
        ({ userId, personalInformation, businessInformation }) =>
          userId === searchQuery ||
          businessInformation?.business_name?.includes(searchQuery) ||
          personalInformation?.email?.includes(searchQuery)
      );
    } else return [];
  }

  return (
    <div
      className={`${
        !matchedSellers()?.length && "hidden"
      } overflow-auto w-full sellers-wrapper hidden-scroll-bar`}
    >
      <h6 className="font-bold mb-1 sticky top-0 left-0">Shops:</h6>
      <div className="inline-flex items-center gap-x-2.5">
        {matchedSellers().map(
          ({ personalInformation, businessInformation, userId }, index) => (
            <div
              key={index}
              className="bg-gray-950/10 px-2 py-1 w-48 select-none rounded-md flex items-center gap-x-1 h-20"
            >
              {/* seller profile pic */}
              <img
                draggable={false}
                src={personalInformation.profilePic}
                alt="profile-pic"
                className="size-16 min-w-16 rounded-full bg-gray-200"
              />
              {/* seller info */}
              <div className="h-full w-2/3 flex flex-col justify-evenly">
                <h6
                  onClick={() => onModalNavigate(`/EcoVibe/seller/${userId}`)}
                  className="line-clamp-1 w-11/12 break-words font-bold hover:text-primary-500"
                >
                  {businessInformation?.business_name ||
                    personalInformation?.first_name}
                </h6>
                <p className="text-sm line-clamp-1 w-11/12 break-words">
                  {personalInformation?.email || personalInformation?.last_name}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default SellersList;
