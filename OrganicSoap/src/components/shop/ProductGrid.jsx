import ProductCard from "../products/ProductCard";
import Reveal from "../common/Reveal";

function ProductGrid({ products = [] }) {
  const validProducts = products.filter(Boolean);

  return (
    <>
      {validProducts.length > 0 ? (

        <div className="grid grid-cols-2 gap-4 sm:gap-6 xl:grid-cols-3">

          {validProducts.map((product, index) => (

            <Reveal
              key={product.id || product._id}
              delay={index * 100}
            >
              <ProductCard product={product} />
            </Reveal>

          ))}

        </div>

      ) : (

        <div className="flex h-80 items-center justify-center rounded-2xl bg-white shadow-md">

          <p className="text-xl font-medium text-gray-500">
            No products found.
          </p>

        </div>

      )}
    </>
  );
}

export default ProductGrid;
