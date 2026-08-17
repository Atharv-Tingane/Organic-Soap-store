import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiStar,
  FiShoppingCart,
  FiArrowLeft,
} from "react-icons/fi";

import products from "../data/products";
import Reveal from "../components/common/Reveal";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-[#f8faf8] px-6">
        <div className="text-center">

          <h1 className="text-3xl font-bold text-gray-800">
            Product not found
          </h1>

          <Link
            to="/shop"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            <FiArrowLeft />
            Back to Shop
          </Link>

        </div>
      </section>
    );
  }

  const discount = product.discount || 0;

  const discountedPrice =
    product.price - (product.price * discount) / 100;

  const handleAddToCart = () => {
    addToCart(
      {
        ...product,
        discountedPrice,
      },
      quantity
    );
  };

  return (
    <section className="min-h-screen bg-linear-to-b from-[#f1faf4] via-[#f8faf8] to-white px-4 py-10 sm:px-6 sm:py-16">

      <div className="mx-auto max-w-7xl">

        {/* Back Button */}

        <Reveal>
          <Link
            to="/shop"
            className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-green-600 sm:mb-10"
          >
            <FiArrowLeft />
            Back to Shop
          </Link>
        </Reveal>


        {/* Main Product Section */}

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-20">

          {/* ================= IMAGE ================= */}

          <Reveal delay={100}>

            <div className="group relative overflow-hidden rounded-3xl bg-white p-2.5 shadow-lg sm:rounded-4xl sm:p-4">

              <div className="absolute inset-6 rounded-full bg-green-100/40 blur-3xl sm:inset-8" />

              <img
                src={product.image}
                alt={product.name}
                className="
                  relative
                  h-80 w-full
                  rounded-2xl
                  object-cover
                  transition duration-500
                  group-hover:scale-[1.02]
                  sm:h-112.5
                  sm:rounded-3xl
                  lg:h-137.5
                "
              />

              {/* Discount Badge */}

              {discount > 0 && (
                <div className="absolute left-5 top-5 rounded-full bg-green-600 px-3 py-1.5 text-xs font-bold text-white shadow-md sm:left-7 sm:top-7">
                  {discount}% OFF
                </div>
              )}

            </div>

          </Reveal>


          {/* ================= PRODUCT INFO ================= */}

          <div>

            {/* Category */}

            <Reveal delay={200}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600 sm:tracking-[0.25em]">
                {product.category}
              </p>
            </Reveal>


            {/* Name */}

            <Reveal delay={300}>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[#173b2c] sm:mt-3 sm:text-5xl">
                {product.name}
              </h1>
            </Reveal>


            {/* Rating */}

            <Reveal delay={400}>

              <div className="mt-4 flex items-center gap-2 sm:mt-5 sm:gap-3">

                <div className="flex gap-0.5 text-yellow-500 sm:gap-1">

                  {[...Array(5)].map((_, index) => (
                    <FiStar
                      key={index}
                      size={16}
                      className="fill-yellow-400 sm:h-4.5 sm:w-4.5"
                    />
                  ))}

                </div>

                <span className="text-sm font-medium text-gray-500">
                  {product.rating} / 5
                </span>

              </div>

            </Reveal>


            {/* Price */}

            <Reveal delay={500}>

              <div className="mt-5 flex items-center gap-3 sm:mt-6">

                <p className="text-3xl font-bold text-green-700 sm:text-4xl">
                  ₹{discountedPrice.toFixed(0)}
                </p>

                {discount > 0 && (
                  <p className="text-sm text-gray-400 line-through sm:text-base">
                    ₹{product.price}
                  </p>
                )}

              </div>

            </Reveal>


            {/* Divider */}

            <Reveal delay={550}>
              <div className="my-6 h-px w-full bg-gray-200 sm:my-7" />
            </Reveal>


            {/* Description */}

            <Reveal delay={600}>

              <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                {product.description}
              </p>

            </Reveal>


            {/* Quantity */}

            <Reveal delay={700}>

              <div className="mt-7 sm:mt-8">

                <p className="mb-3 text-sm font-semibold text-gray-800">
                  Quantity
                </p>

                <div className="flex w-fit items-center overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

                  <button
                    onClick={() =>
                      setQuantity((prev) =>
                        Math.max(1, prev - 1)
                      )
                    }
                    className="px-5 py-3 text-xl text-gray-600 transition hover:bg-gray-100 active:bg-gray-200"
                  >
                    −
                  </button>

                  <span className="min-w-14 px-4 py-3 text-center font-semibold text-gray-800">
                    {quantity}
                  </span>

                  <button
                    onClick={() =>
                      setQuantity((prev) => prev + 1)
                    }
                    className="px-5 py-3 text-xl text-gray-600 transition hover:bg-gray-100 active:bg-gray-200"
                  >
                    +
                  </button>

                </div>

              </div>

            </Reveal>


            {/* Add To Cart */}

            <Reveal delay={800}>

              <button
                onClick={handleAddToCart}
                className="
                  mt-6
                  flex w-full
                  items-center justify-center gap-3
                  rounded-xl
                  bg-green-600
                  py-3.5
                  text-base font-semibold text-white
                  shadow-lg shadow-green-600/20
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-green-700
                  hover:shadow-xl
                  active:translate-y-0
                  sm:mt-8
                  sm:py-4
                  sm:text-lg
                "
              >
                <FiShoppingCart size={21} />
                Add to Cart
              </button>

            </Reveal>

          </div>

        </div>


        {/* ================= INGREDIENTS & BENEFITS ================= */}

        <div className="mt-16 border-t border-gray-200 pt-12 sm:mt-20 sm:pt-16">

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">

            {/* Ingredients */}

            <Reveal>

              <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm sm:p-9">

                <p className="font-semibold uppercase tracking-[0.25em] text-green-600">
                  What's Inside
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#173b2c]">
                  Ingredients
                </h2>

                {product.ingredients?.length > 0 ? (

                  <ul className="mt-6 space-y-3">

                    {product.ingredients.map((ingredient, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-gray-600"
                      >
                        <span className="h-2 w-2 shrink-0 rounded-full bg-green-500" />
                        {ingredient}
                      </li>
                    ))}

                  </ul>

                ) : (

                  <p className="mt-6 text-gray-500">
                    Ingredient information coming soon.
                  </p>

                )}

              </div>

            </Reveal>


            {/* Benefits */}

            <Reveal delay={150}>

              <div className="rounded-3xl bg-[#123f2d] p-7 text-white shadow-sm sm:p-9">

                <p className="font-semibold uppercase tracking-[0.25em] text-green-300">
                  Why You'll Love It
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  Benefits
                </h2>

                {product.benefits?.length > 0 ? (

                  <ul className="mt-6 space-y-3">

                    {product.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-green-50"
                      >
                        <span className="h-2 w-2 shrink-0 rounded-full bg-green-300" />
                        {benefit}
                      </li>
                    ))}

                  </ul>

                ) : (

                  <p className="mt-6 text-green-100/70">
                    Benefit information coming soon.
                  </p>

                )}

              </div>

            </Reveal>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;