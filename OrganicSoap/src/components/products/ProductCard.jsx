import { Link } from "react-router-dom";
import { FiShoppingCart, FiStar } from "react-icons/fi";
import { useCart } from "../../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const discount = product.discount || 0;

  const discountedPrice =
    product.price - (product.price * discount) / 100;

  const handleAddToCart = () => {
    const productWithDiscount = {
      ...product,
      price: discountedPrice,
    };

    addToCart(productWithDiscount, 1);
  };

  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">


      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">

          <img
            src={product.image}
            alt={product.name}
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
          />

          {discount > 0 && (
            <div className="absolute left-4 top-4 rounded-full bg-green-600 px-3 py-1.5 text-xs font-bold text-white shadow-md">
              {discount}% OFF
            </div>
          )}

        </div>
      </Link>


      <div className="p-5">

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-600">
          {product.category}
        </p>


        <Link to={`/product/${product.id}`}>
          <h3 className="mt-2 text-xl font-bold text-[#173b2c] transition-colors group-hover:text-green-700">
            {product.name}
          </h3>
        </Link>


        <div className="mt-3 flex items-center gap-1">

          <div className="flex text-yellow-500">
            {[1, 2, 3, 4, 5].map((star) => (
              <FiStar
                key={star}
                size={15}
                fill="currentColor"
              />
            ))}
          </div>

          <span className="ml-1 text-sm text-gray-500">
            {product.rating}
          </span>

        </div>


        <div className="mt-4 flex items-center gap-3">

          <span className="text-2xl font-extrabold text-green-700">
            ₹{discountedPrice.toFixed(0)}
          </span>

          {discount > 0 && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.price}
            </span>
          )}

        </div>


        <button
          onClick={handleAddToCart}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3.5 font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-md"
        >
          <FiShoppingCart size={18} />
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;