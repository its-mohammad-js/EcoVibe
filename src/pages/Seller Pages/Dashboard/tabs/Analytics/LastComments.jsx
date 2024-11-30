import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "src/config/firebase";
import CommentsTabLoader from "UI/Loaders/CommentsTabLoader";
import { useNavigate } from "react-router-dom";

function LastComments() {
  const [{ commentsList, loading }, setComments] = useState({
    commentsList: [],
    loading: false,
  }); // reviews data
  // necessary data & hooks
  const { userId } = useSelector((state) => state.userData);
  const navigate = useNavigate();

  // get reviews from firestore
  async function fetchComments() {
    try {
      // set loading true
      setComments((prev) => ({ ...prev, loading: true }));
      // ref to comments data
      const commentsRef = query(
        collection(db, "comments"),
        where("sellerId", "==", userId)
      );
      // get all comment's from data base
      const reqponse = await getDocs(commentsRef);
      // read comments related to this seller
      const comments = reqponse.docs.map((doc) => doc.data());
      // dispatch success
      setComments({ loading: false, commentsList: comments, error: null });
    } catch (error) {
      setComments({ loading: false, commentsList: [], error: error });
      console.log(error);
    }
  }

  // get comments on comp render
  useEffect(() => {
    fetchComments();
  }, []);

  // loading screen
  if (loading) return <CommentsTabLoader animate />;

  // main components
  if (commentsList.length && !loading)
    return (
      <>
        {/* review title */}
        <h4 className="text-xl font-bold">Last Comments</h4>
        {/* comments list */}
        <div className="overflow-auto h-[90%] styled-scroll-bar px-1">
          <div className="flex flex-col gap-y-4">
            {commentsList.map((comment, index) => (
              <div
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate(`/EcoVibe/Products/${comment.productId}`);
                }}
                key={index}
                className="w-full h-24 bg-gray-200 flex items-center px-2 py-1 rounded-md gap-2 hover:bg-gray-300/50 cursor-pointer transition-all"
              >
                <div className="size-20 bg-gray-300 rounded-full">
                  <img
                    src={comment.authorProfile}
                    alt="author-prfile"
                    className="size-full rounded-full"
                  />
                </div>
                <div className="h-full w-3/5 flex flex-col justify-evenly">
                  <h4 className="line-clamp-1 text-xl font-bold">
                    {comment.content.header}
                  </h4>
                  <h6 className="line-clamp-1 font-medium">
                    {comment.content.first_name} {comment.content.last_name}
                  </h6>
                  <p className="line-clamp-2 text-sm">
                    {comment.content.review}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );

  // no comments screen
  if (!loading && !commentsList.length)
    return (
      <>
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-tr from-gray-50/10 via-gray-800/20 rounded-md to-gray-50/10 backdrop-blur-sm">
          <h4 className="text-3xl font-bold text-primary-900">
            No Comment's yet...
          </h4>
        </div>
        <CommentsTabLoader />
      </>
    );
}

export default LastComments;
