import { useProfileData } from "../../SellerProfilePage";

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

  if (!reviews?.length)
    return (
      <div className="size-full flex justify-center">
        <h2 className="my-32 text-xl font-semibold">
          There isn't any review for this seller...
        </h2>
      </div>
    );

  if (reviews?.length)
    return (
      <div className="flex flex-col gap-y-2 pb-2 w-full">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="flex items-start w-full px-2 py-1 relative border-b  hover:bg-gray-200  cursor-pointer transition-all last-of-type:border-none lg:py-2"
          >
            {/* author profile pic */}
            <div className="size-16 lg:size-20 bg-gray-200 rounded-full overflow-hidden">
              <img src={review.authorProfile} alt="author-profile" />
            </div>
            {/* header & main content also review data */}
            <div className="flex-1 px-2">
              <h4 className="font-bold lg:text-lg">{review.content.header}</h4>
              <h6 className="text-sm lg:text-base font-medium line-clamp-1">
                {review.content.first_name + " " + review.content.last_name}
              </h6>
              <p className="line-clamp-2 lg:line-clamp-4 break-words text-xs lg:text-base">
                {review.content.review}
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
