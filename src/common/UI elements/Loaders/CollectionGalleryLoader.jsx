import ReactStars from "react-stars";

function CollectionGalleryLoader() {
  return (
    <div className="mx-auto 2xl:max-w-screen-2xl mt-6 bg-gray-50 py-4 lg:py-6 lg:px-4">
      {/* title */}
      <h2 className="px-2 text-2xl font-bold my-1 md:my-2 md:text-3xl">
        SPRING/SUMMER 2024
      </h2>
      {/* Gallery Wrapper */}
      <div
        id="wrapper"
        className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-3 items-center px-1 py-0.5 lg:px-4 lg:py-2"
      >
        <CustomeProductCardLoader />

        <div className="flex items-center gap-x-3 w-full">
          <CustomeProductCardLoader />
          <CustomeProductCardLoader />
        </div>

        <CustomeProductCardLoader />
      </div>
    </div>
  );
}

export default CollectionGalleryLoader;

const CustomeProductCardLoader = () => {
  return (
    <div className="w-full h-72 bg-gray-300/35 rounded-xl animate-pulse">
      <div className="w-full h-3/5 relative">
        <div className="w-full h-full rounded-t-md object-cover bg-gray-400"></div>
      </div>

      <div className="flex flex-col items-start justify-evenly h-2/5 px-4 py-2">
        <span className="my-0.5 w-1/4 p-0.5 rounded-full bg-gray-400"></span>
        <h2 className="w-3/4 p-0.5 rounded-full bg-gray-400"></h2>

        <p className="mt-1 font-bold flex items-center w-full justify-between">
          <span className="w-1/4 rounded-full h-2 bg-gray-400"></span>
          <div>
            <ReactStars count={5} size={18} color2={"red"} edit={false} />
          </div>
        </p>
      </div>
    </div>
  );
};
