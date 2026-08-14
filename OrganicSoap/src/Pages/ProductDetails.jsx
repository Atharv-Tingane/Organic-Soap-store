import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiStar,
  FiShoppingCart,
  FiArrowLeft,
  FiCheck,
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

  const ingredients = product.ingredients || [];
  const benefits = product.benefits || [];

  return (
    <section className="min-h-screen bg-linear-to-b from-[#f1faf4] via-[#f8fbf8] to-white px-6 py-12 lg:py-16">

      <div className="mx-auto max-w-7xl">

        {/* Back to Shop */}

        <Reveal>
          <Link
            to="/shop"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-green-600"
          >
            <FiArrowLeft />
            Back to Shop
          </Link>
        </Reveal>



        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">


          <Reveal delay={100}>

            <div className="group relative overflow-hidden rounded-4xl bg-white p-4 shadow-xl">

              {discount > 0 && (
                <div className="absolute left-8 top-8 z-10 rounded-full bg-green-600 px-4 py-2 text-sm font-bold text-white shadow-lg">
                  {discount}% OFF
                </div>
              )}

              <div className="absolute inset-12 rounded-full bg-green-100/40 blur-3xl" />

              <img
                src={product.image}
                alt={product.name}
                className="relative h-120 w-full rounded-3xl object-cover transition duration-700 group-hover:scale-[1.02] sm:h-144"
              />

            </div>

          </Reveal>


          <div>

            <Reveal delay={150}>
              <p className="font-semibold uppercase tracking-[0.25em] text-green-600">
                {product.category}
              </p>
            </Reveal>


            <Reveal delay={200}>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#173b2c] sm:text-5xl">
                {product.name}
              </h1>
            </Reveal>



            <Reveal delay={250}>

              <div className="mt-5 flex items-center gap-3">

                <div className="flex gap-1 text-yellow-500">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar
                      key={star}
                      size={18}
                      className="fill-yellow-400"
                    />
                  ))}

                </div>

                <span className="text-sm font-medium text-gray-500">
                  {product.rating} / 5
                </span>

              </div>

            </Reveal>


            <Reveal delay={300}>

              <div className="mt-6 flex flex-wrap items-center gap-3">

                <span className="text-3xl font-extrabold text-green-700">
                  ₹{discountedPrice.toFixed(0)}
                </span>

                {discount > 0 && (
                  <>
                    <span className="text-lg text-gray-400 line-through">
                      ₹{product.price}
                    </span>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                      {discount}% OFF
                    </span>
                  </>
                )}

              </div>

            </Reveal>



            <Reveal delay={350}>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-600">
                {product.description ||
                  "A thoughtfully handcrafted product made for your everyday skincare ritual."}
              </p>

            </Reveal>


            <div className="my-7 h-px w-full bg-gray-200" />



            <Reveal delay={400}>

              <div>

                <p className="mb-3 text-sm font-semibold text-gray-800">
                  Quantity
                </p>

                <div className="flex w-fit items-center overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

                  <button
                    onClick={() =>
                      setQuantity((prev) => Math.max(1, prev - 1))
                    }
                    className="px-5 py-3 text-xl text-gray-600 transition hover:bg-gray-100"
                  >
                    −
                  </button>

                  <span className="min-w-14 px-5 py-3 text-center font-semibold text-gray-800">
                    {quantity}
                  </span>

                  <button
                    onClick={() =>
                      setQuantity((prev) => prev + 1)
                    }
                    className="px-5 py-3 text-xl text-gray-600 transition hover:bg-gray-100"
                  >
                    +
                  </button>

                </div>

              </div>

            </Reveal>


            <Reveal delay={450}>

              <button
                onClick={() => addToCart(product, quantity)}
                className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 py-4 text-lg font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
              >
                <FiShoppingCart size={22} />
                Add to Cart
              </button>

            </Reveal>

          </div>

        </div>


        <div className="mt-16 grid gap-6 border-t border-gray-200 pt-12 md:grid-cols-2">


          <Reveal>

            <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600">
                What's inside
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#173b2c]">
                Ingredients
              </h2>

              <div className="mt-6 space-y-3">

                {ingredients.length > 0 ? (
                  ingredients.map((ingredient, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-xl bg-[#f5faf6] px-4 py-3"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                        <FiCheck size={15} />
                      </span>

                      <span className="font-medium text-gray-700">
                        {ingredient}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">
                    Ingredient information coming soon.
                  </p>
                )}

              </div>

            </div>

          </Reveal>



          <Reveal delay={100}>

            <div className="rounded-3xl bg-[#173b2c] p-7 text-white shadow-sm">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-300">
                Why you'll love it
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Benefits
              </h2>

              <div className="mt-6 space-y-3">

                {benefits.length > 0 ? (
                  benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-400/15 text-green-300">
                        <FiCheck size={15} />
                      </span>

                      <span className="font-medium text-white/90">
                        {benefit}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-white/60">
                    Benefit information coming soon.
                  </p>
                )}

              </div>

            </div>

          </Reveal>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;