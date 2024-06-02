import { useEffect, useState } from "react";
import AddCommentInputs from "./AddCommentInputs";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import CommentsList from "./CommentsList";

function ProductReviews() {
  const [{ commentsList, error, loading }, setList] = useState({
    commentsList: [],
    loading: false,
    error: "",
  });
  // necessary data & hooks
  const params = useParams();

  async function fetchComments() {
    try {
      // set loading true
      setList((prev) => ({ ...prev, loading: true }));
      // fetch comments list of this product
      const commentsRef = collection(db, "comments");
      const commentsData = await getDocs(commentsRef).then(({ docs }) =>
        docs.map((doc) => doc.data())
      );
      const productComments = commentsData.filter(
        (doc) => doc.productId === params?.productId
      );
      // set list with comments data
      setList((prev) => ({ ...prev, commentsList: productComments }));
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

  return (
    <div className="px-4 py-2 lg:px-8 lg:py-4 my-4">
      <h4 className="text-xl lg:text-3xl font-bold my-2">Customer Reviews</h4>
      {/* submit new comment form */}
      <AddCommentInputs fetchComments={fetchComments} />
      {/* comments list */}
      {!loading ? (
        <CommentsList
          commentsData={commentsList}
          fetchComments={fetchComments}
        />
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}

export default ProductReviews;