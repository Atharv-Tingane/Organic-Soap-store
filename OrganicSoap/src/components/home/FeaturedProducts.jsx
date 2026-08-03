import ProductCard from "../products/ProductCard";
import heroBanner from "../../assets/images/herobanner.png";
import products from "../../data/products";


function FeaturedProducts() {
  return (
    // <section className="bg-white py-20">
    <section className="bg-[#f4fbf5]">
      <div className="mx-auto max-w-7xl px-6">
        
     

        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
            Featured Products
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Our Best Sellers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Discover our most loved handcrafted soaps made with natural
            ingredients for healthy and glowing skin.
          </p>
        </div>

       

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
         {products.slice(0, 4).map((product) => (
  <ProductCard
    key={product.id}
    product={product}
  />
))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;