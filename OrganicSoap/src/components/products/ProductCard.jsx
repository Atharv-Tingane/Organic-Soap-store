import { Link } from "react-router-dom";
import { FiShoppingCart, FiStar } from "react-icons/fi";

function ProductCard({ product }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">


      <Link to={`/product/${product.id}`}>
  <div className="overflow-hidden">
    <img
      src={product.image}
      alt={product.name}
      className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
    />
  </div>
</Link>


      <div className="p-5">

        <p className="text-sm font-medium uppercase tracking-wider text-green-600">
          {product.category}
        </p>

    <Link to={`/product/${product.id}`}>
  <h3 className="mt-2 text-xl font-bold text-gray-800">
    {product.name}
  </h3>
</Link>


        <div className="mt-3 flex items-center gap-1 text-yellow-500">
          <FiStar fill="currentColor" />
          <FiStar fill="currentColor" />
          <FiStar fill="currentColor" />
          <FiStar fill="currentColor" />
          <FiStar fill="currentColor" />

          <span className="ml-2 text-sm text-gray-500">
            ({product.rating})
          </span>
        </div>

        
        <p className="mt-4 text-2xl font-bold text-green-700">
          ₹{product.price}
        </p>

    
        <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700">

          <FiShoppingCart />

          Add to Cart

        </button>

      </div>

    </div>
  );
}

export default ProductCard;