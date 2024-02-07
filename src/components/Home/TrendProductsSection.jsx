import ProductCard from "../Products/ProductCard";

function TrendProductsSection({ isLoading, products }) {
  if (!isLoading && products.length)
    return (
      <div className="mx-auto 2xl:max-w-screen-2xl my-4">
        <h2 className="px-2 text-2xl font-bold my-1">Trend Products</h2>

        <div className="w-full overflow-auto scroll-smooth">
          <div className="inline-flex items-center gap-x-8 px-4 py-2">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    );
}

export default TrendProductsSection;
