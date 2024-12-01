function ProductsList({ filteredItems, setDetail }) {
  return (
    <>
      {/* main grid */}
      {filteredItems.length ? (
        <div className="bg-white grid gap-4 grid-cols-1 px-4 py-2 lg:grid-cols-4 max-h-[80vh] overflow-auto styled-scroll-bar">
          {filteredItems.map((item, index) => (
            <div
              onClick={() =>
                setDetail({ modalIsShow: true, selectedItem: item })
              }
              key={index}
              className="h-32 lg:h-64 xl:h-96 cursor-pointer flex lg:flex-col items-center gap-x-3 bg-gray-100 border border-gray-200 rounded-md px-2 py-1"
            >
              {/* item thumbnail */}
              <div className="h-full w-5/12 lg:w-full lg:max-h-[60%] bg-gray-200 rounded-md">
                <img
                  src={item.Thumbnail}
                  alt="product-thumbnail"
                  className="size-full object-cover rounded-md"
                />
              </div>
              {/* item details */}
              <div className="w-6/12 lg:w-full flex flex-col justify-evenly h-full lg:max-h-[40%] xl:justify-between xl:pt-3.5">
                <h4 className="text-lg xl:text-xl line-clamp-1 font-medium">
                  {item.Name}
                </h4>
                <p className="line-clamp-3 py-1 text-xs xl:text-base xl:flex-1">
                  {item.Description}
                </p>
                <p className="text-primary-700 font-bold xl:text-lg">
                  ${item.Price}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // on not found product
        <div className="h-screen flex items-center justify-center text-3xl font-bold text-primary-500 text-center">
          <h4>There is no product with this name or category</h4>
        </div>
      )}
    </>
  );
}

export default ProductsList;
