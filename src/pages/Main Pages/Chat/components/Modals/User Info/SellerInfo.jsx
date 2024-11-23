import { query } from "firebase/database";
import { collection, getDocs, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import UserInfoSellerReviewsLoader from "UI/Loaders/UserInfoSellerReviewsLoader";
import { db } from "/src/config/firebase";
import { useRoomsData } from "../../RoomsContext";

const SellerInfo = () => {
  const {
    selectedRoom: { reciver: seller },
  } = useRoomsData();

  return (
    <div className="size-full relative">
      {/* seller profile summary */}
      <div className="flex flex-col items-center pt-4 pb-2 mb-3.5 gap-y-4 border-b border-gray-300">
        <div className="size-24 gradient-background rounded-full">
          <img
            src={seller?.profilePic}
            alt="seller-avatar"
            className="size-full rounded-full"
          />
        </div>

        <div className="flex items-center gap-x-2">
          <button className="p-1.5 text-gray-800 hover:bg-gray-300 transition-all bg-gray-200 text-2xl rounded-lg">
            <AiOutlineMail />
          </button>
          <button className="p-1.5 text-gray-800 hover:bg-gray-300 transition-all bg-gray-200 text-2xl rounded-lg">
            <AiOutlineUser />
          </button>
        </div>
      </div>
      {/* seller primary information */}
      <div className="flex flex-col gap-y-2 h-1/3">
        {/* seller business informations */}
        <div className="flex items-center justify-center gap-x-3">
          <p className="text-lg font-semibold w-3/5">Shop Name</p>
          <p className="w-2/5 line-clamp-1 break-words">
            {seller?.business_name}
          </p>
        </div>
        <div className="flex items-center justify-center gap-x-3">
          <p className="text-lg font-semibold w-3/5">Career Title</p>
          <p className="w-2/5 line-clamp-1 break-words">
            {seller?.career_title}
          </p>
        </div>
        <div className="flex items-center justify-center gap-x-3">
          <p className="text-lg font-semibold w-3/5">Email</p>
          <p className="w-2/5 line-clamp-1 break-words">{seller?.email}</p>
        </div>
        <div>
          {/* seller biography */}
          <h4 className="text-lg font-bold">Biography</h4>
          <p className="line-clamp-4 lg:line-clamp-4 mt-1">
            {seller?.biography ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident blanditiis sed velit, doloribus ipsam possimus tenetur autem! Amet dolorum excepturi earum, tempore exercitationem in quos sapiente voluptates nam aperiam molestiae"}
          </p>
        </div>
      </div>
      {/* seller testimonials */}
      <div className="w-full h-1/3 justify-self-end">
        <LastReviews seller={seller} />
      </div>
    </div>
  );
};

const LastReviews = ({ seller }) => {
  const [{ error, loading, reviews }, setReviews] = useState({
    reviews: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    async function readSellerReviews() {
      try {
        // set loading
        setReviews((prev) => ({ ...prev, loading: true }));
        // ref to comments related to this seller
        const reviewsQuery = query(
          collection(db, "comments"),
          where("sellerId", "==", seller.reciverId)
        );
        // fetch comments
        const reviews = await getDocs(reviewsQuery).then(({ docs }) =>
          docs.map((doc) => doc.data())
        );
        // dispatch success
        setReviews({ loading: false, error: null, reviews });
      } catch (error) {
        console.log(error);
        // dispatch error
        setReviews({ loading: false, error: error, reviews: [] });
      }
    }

    readSellerReviews();
  }, []);

  function getReviewDate(stamp) {
    const time = new Date(stamp);
    return time.toLocaleDateString();
  }

  if (loading) return <UserInfoSellerReviewsLoader />;

  if (!loading && reviews.length)
    return (
      <div className="flex flex-col h-full">
        <h4 className="text-lg font-bold z-10 bg-gray- 100">
          {reviews?.length} Reviews
        </h4>
        <div className="lg:h-2/5 bg-gray-100 overflow-auto styled-scroll-bar pb-6 lg:pb-0">
          <div className="flex flex-col gap-y-4 py-2 px-1">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="h-32 flex flex-col items-start py-1.5 cursor-pointer border-b border-gray-300 hover:border-none hover:bg-gray-200 rounded-md p-1.5"
              >
                {/* rerview summary */}
                <div className="flex items-center justify-between w-full gap-x-2">
                  <div className="size-8 rounded-full gradient-background bg-opacity-80">
                    <img
                      src={review.authorProfile}
                      alt="author-profile"
                      className="size-full rounded-full"
                    />
                  </div>
                  <h2 className="line-clamp-1 w-3/5 font-bold text-start">
                    {review.content.first_name}
                  </h2>
                  <p className="">{getReviewDate(review.date)}</p>
                </div>
                <div className="line-clamp-2 lg:line-clamp-3 mt-0.5 text-pretty py-1.5">
                  {review.content.review}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default SellerInfo;
