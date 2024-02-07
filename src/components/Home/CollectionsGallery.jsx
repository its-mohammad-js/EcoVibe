function CollectionsGallery() {
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
        <div className="w-full h-60 bg-yellow-400 rounded-xl"></div>

        <div className="flex items-center gap-x-3 w-full">
          <div className="w-1/2 h-48 md:h-60 rounded-xl bg-red-300"></div>
          <div className="w-1/2 h-48 md:h-60 rounded-xl bg-red-300"></div>
        </div>

        <div className="w-full h-60 bg-blue-400 rounded-xl"></div>
      </div>
    </div>
  );
}

export default CollectionsGallery;
