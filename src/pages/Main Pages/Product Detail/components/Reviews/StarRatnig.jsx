import ReactStars from "react-stars";

function StarRatnig({
  submitLoading,
  getValues,
  setValue,
  register,
  loading,
  mode,
  errors,
}) {
  if (mode !== "reply")
    return (
      <div className="flex flex-col">
        <div className="flex items-center justify-between lg:flex-col lg:items-start">
          <h6 className="text-sm font-medium lg:text-base">
            Click on start to review :
          </h6>
          {!loading && !submitLoading && (
            <ReactStars
              size={25}
              {...register("stars", {
                required: { value: true, message: "Please Rate Product" },
              })}
              value={getValues("stars")}
              onChange={(e) => setValue("stars", e)}
            />
          )}
        </div>
        <p className="mx-1 text-sm text-red-500 font-semibold">
          {errors?.stars?.message}
        </p>
      </div>
    );
}

export default StarRatnig;
