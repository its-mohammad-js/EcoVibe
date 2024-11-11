import { useProfileData } from "../SellerProfilePage";

function Reviews() {
  const {
    sellerData: { reviews },
  } = useProfileData();

  function timestampToDate(createdAt) {
    // Create a Date object from the timestamp
    const date = new Date(createdAt);

    return date.toLocaleTimeString("en-us", {
      year: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <div className="flex flex-col gap-y-2 pb-2">
      {reviews.map((review, i) => (
        <div key={i} className="flex items-start w-full px-2 py-1 relative">
          {/* author profile pic */}
          <div className="size-16 bg-gray-200 rounded-full overflow-hidden">
            <img src={review.authorProfile} alt="author-profile" />
          </div>
          {/* header & main content also review data */}
          <div className="flex-1 px-2">
            <h4 className="font-bold">{review.content.header}</h4>
            <h6 className="text-sm font-medium line-clamp-1">
              {review.content.first_name + " " + review.content.last_name}
            </h6>
            <p className="line-clamp-2 text-xs">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              debitis accusamus, at omnis nobis inventore, corporis tenetur
              vitae dolorum rem earum blanditiis porro nulla necessitatibus
              exercitationem explicabo consectetur reiciendis consequatur.
            </p>
            <p className="absolute top-2 right-2 text-sm text-gray-800">
              {timestampToDate(review.date)}
            </p>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Reviews;
