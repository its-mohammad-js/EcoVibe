function ProductTypeMessage({ message }) {
  return (
    <div className="h-72 lg:h-80 flex flex-col justify-evenly w-64 lg:w-96">
      {/* product details */}
      <div className="w-full h-64 relative group rounded-md overflow-hidden">
        <img
          src={message.product.thumbnail}
          alt="product-thumbnail"
          className="size-full object-cover max-w-full "
        />

        <div className="absolute inset-0 bg-gray-950/80 backdrop-blur flex items-center justify-center px-4 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <p className="line-clamp-[10] text-gray-50 text-center">
            {message.product.desc}
          </p>
        </div>
      </div>

      <div className="px-2 py-1">
        <h4 className="text-lg line-clamp-1 font-bold">
          {message.product.name}
        </h4>
        <p className="font-semibold">Price: ${message.product.price}</p>
      </div>
    </div>
  );
}

export default ProductTypeMessage;
