import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiStar, FiShoppingCart, FiArrowLeft } from "react-icons/fi";
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

  return (
    <section className="min-h-screen bg-[#f8faf8] px-6 py-16">

      <div className="mx-auto max-w-7xl">

        <Reveal>
          <Link
            to="/shop"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-green-600"
          >
            <FiArrowLeft />
            Back to Shop
          </Link>
        </Reveal>



        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <Reveal delay={150}>

            <div className="group relative overflow-hidden rounded-4xl bg-white p-4 shadow-sm">


              <div className="absolute inset-8 rounded-full bg-green-100/40 blur-3xl" />

              <img
                src={product.image}
                alt={product.name}
                className="relative h-112.5 w-full rounded-3xl object-cover transition duration-700 group-hover:scale-[1.02] sm:h-137.5"
              />

            </div>

          </Reveal>

          <div>

            <Reveal delay={250}>
              <p className="font-semibold uppercase tracking-[0.25em] text-green-600">
                {product.category}
              </p>
            </Reveal>


            <Reveal delay={350}>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#173b2c] sm:text-5xl">
                {product.name}
              </h1>
            </Reveal>

            <Reveal delay={450}>
              <div className="mt-5 flex items-center gap-3">

                <div className="flex gap-1 text-yellow-500">
                  {[...Array(5)].map((_, index) => (
                    <FiStar
                      key={index}
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


            <Reveal delay={550}>
              <p className="mt-6 text-3xl font-bold text-green-700">
                ₹{product.price}
              </p>
            </Reveal>



            <Reveal delay={600}>
              <div className="my-7 h-px w-full bg-gray-200" />
            </Reveal>



            <Reveal delay={650}>
              <p className="max-w-xl leading-8 text-gray-600">
                Experience the goodness of our handcrafted{" "}
                <span className="font-medium text-gray-800">
                  {product.name.toLowerCase()}
                </span>
                . Made with carefully selected natural ingredients, it gently
                cleanses and nourishes your skin while keeping it fresh and
                healthy.
              </p>
            </Reveal>


            <Reveal delay={750}>
              <div className="mt-8">

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


            <Reveal delay={850}>
             <button
  onClick={() => addToCart(product, quantity)}
  className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 py-4 text-lg font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
>
  <FiShoppingCart size={22} />
  Add to Cart
</button>
            </Reveal>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;