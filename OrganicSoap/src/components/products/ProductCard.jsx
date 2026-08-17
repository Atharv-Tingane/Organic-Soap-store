import { Link } from "react-router-dom";
import { FiShoppingCart, FiStar } from "react-icons/fi";
import { useCart } from "../../context/CartContext";

function ProductCard({ product }) {
  if (!product) return null;

  const { addToCart } = useCart();

  const discount = product.discount || 0;

  const discountedPrice =
    product.price - (product.price * discount) / 100;


  const handleAddToCart = () => {
    const productWithDiscount = {
      ...product,
      discountedPrice,
    };

    addToCart(productWithDiscount, 1);
  };


  return (
    <div
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-gray-100
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        sm:rounded-3xl
        sm:hover:-translate-y-2
      "
    >

      {/* ================= IMAGE ================= */}

      <Link to={`/product/${product.id}`}>

        <div className="relative overflow-hidden">

          <img
            src={product.image}
            alt={product.name}
            className="
              h-40
              w-full
              object-cover
              transition
              duration-500
              group-hover:scale-105
              sm:h-60
              lg:h-72
            "
          />


          {/* Discount */}

          {discount > 0 && (
            <div
              className="
                absolute
                left-2
                top-2
                rounded-full
                bg-green-600
                px-2
                py-1
                text-[9px]
                font-bold
                text-white
                shadow-md
                sm:left-4
                sm:top-4
                sm:px-3
                sm:py-1.5
                sm:text-xs
              "
            >
              {discount}% OFF
            </div>
          )}

        </div>

      </Link>


      {/* ================= PRODUCT INFO ================= */}

      <div className="p-3 sm:p-5">


        {/* Category */}

        <p className="truncate text-[9px] font-semibold uppercase tracking-[0.15em] text-green-600 sm:text-xs sm:tracking-[0.2em]">
          {product.category}
        </p>


        {/* Name */}

        <Link to={`/product/${product.id}`}>

          <h3
            className="
              mt-1
              truncate
              text-sm
              font-bold
              text-[#173b2c]
              transition-colors
              group-hover:text-green-700
              sm:mt-2
              sm:text-xl
            "
          >
            {product.name}
          </h3>

        </Link>


        {/* ================= RATING ================= */}

        <div className="mt-2 flex items-center gap-1 sm:mt-3">

          <div className="flex text-yellow-500">

            {[1, 2, 3, 4, 5].map((star) => (
              <FiStar
                key={star}
                size={12}
                fill="currentColor"
                className="sm:h-3.75 sm:w-3.75"
              />
            ))}

          </div>

          <span className="ml-1 text-[10px] text-gray-500 sm:text-sm">
            {product.rating}
          </span>

        </div>


        {/* ================= PRICE ================= */}

        <div className="mt-3 flex flex-wrap items-center gap-2 sm:mt-4 sm:gap-3">

          <span className="text-lg font-extrabold text-green-700 sm:text-2xl">
            ₹{discountedPrice.toFixed(0)}
          </span>

          {discount > 0 && (
            <span className="text-[10px] text-gray-400 line-through sm:text-sm">
              ₹{product.price}
            </span>
          )}

        </div>


        {/* ================= ADD TO CART ================= */}

        <button
          onClick={handleAddToCart}
          className="
            mt-3
            flex
            w-full
            items-center
            justify-center
            gap-1.5
            rounded-xl
            bg-green-600
            py-2.5
            text-xs
            font-semibold
            text-white
            shadow-sm
            transition-all
            duration-300
            hover:bg-green-700
            hover:shadow-md
            sm:mt-5
            sm:gap-2
            sm:py-3.5
            sm:text-sm
          "
        >
          <FiShoppingCart
            size={15}
            className="sm:h-4.5 sm:w-4.5"
          />

          Add to Cart

        </button>

      </div>

    </div>
  );
}

export default ProductCard;