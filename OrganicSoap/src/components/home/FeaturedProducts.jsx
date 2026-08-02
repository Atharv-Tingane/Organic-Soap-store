import ProductCard from "../products/ProductCard";
import heroBanner from "../../assets/images/herobanner.png";

const products = [
  {
    id: 1,
    name: "Turmeric Soap",
    category: "Organic Soap",
    price: 249,
    rating: 4.9,
    image: heroBanner,
  },
  {
    id: 2,
    name: "Aloe Vera Soap",
    category: "Organic Soap",
    price: 299,
    rating: 4.8,
    image: heroBanner,
  },
  {
    id: 3,
    name: "Coffee Soap",
    category: "Organic Soap",
    price: 279,
    rating: 4.7,
    image: heroBanner,
  },
  {
    id: 4,
    name: "Rose Soap",
    category: "Organic Soap",
    price: 259,
    rating: 4.9,
    image: heroBanner,
  },
];

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
          {products.map((product) => (
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