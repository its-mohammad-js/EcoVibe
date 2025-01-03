import { useEffect, useState } from "react";
import AddCommentInputs from "./AddCommentInputs";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "src/config/firebase";
import CommentsList from "./CommentsList";
import ProductReviewLoader from "UI/Loaders/ProductReviewLoader";
import { useSelector } from "react-redux";

function ProductReviews({ productData }) {
  const [{ commentsList, loading }, setList] = useState({
    commentsList: [],
    loading: false,
    error: "",
  });
  // necessary data & hooks
  const params = useParams();
  const { loading: productLoad, data } = useSelector((state) => state.products);

  async function fetchComments() {
    try {
      // set loading true
      setList((prev) => ({ ...prev, loading: true }));
      // fetch comments list of this product
      const commentRefQuery = query(
        collection(db, "comments"),
        where("productId", "==", params?.productId)
      );
      const commentsData = await getDocs(commentRefQuery).then(({ docs }) =>
        docs.map((doc) => doc.data())
      );
      // set list with comments data
      setList((prev) => ({ ...prev, commentsList: commentsData }));
    } catch (error) {
      console.log(error);
    } finally {
      setList((prev) => ({ ...prev, loading: false }));
    }
  }

  // fetch comments on app mount
  useEffect(() => {
    fetchComments();
  }, []);

  if (!productLoad && data?.length)
    return (
      <div className="px-4 py-2 lg:px-8 lg:py-4 my-4">
        <h4 className="text-xl lg:text-3xl font-bold my-2">Customer Reviews</h4>
        {/* submit new comment form */}
        <AddCommentInputs
          fetchComments={fetchComments}
          loading={loading}
          productData={productData}
        />
        {/* comments list */}
        {commentsList.length ? (
          !loading ? (
            <CommentsList
              commentsData={commentsList}
              fetchComments={fetchComments}
            />
          ) : (
            <ProductReviewLoader />
          )
        ) : (
          <div className="flex items-center justify-center py-2 h-44">
            <p className="text-lg font-medium">
              Be the first one to share your thoughts about this product! Write
              a review now and help others make informed decisions!... 💬
            </p>
          </div>
        )}
      </div>
    );
}

export default ProductReviews;
