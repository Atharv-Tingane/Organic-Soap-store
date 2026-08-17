import { Link } from "react-router-dom";
import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiArrowLeft,
} from "react-icons/fi";

import { useCart } from "../context/CartContext";
import Reveal from "../components/common/Reveal";

function Cart() {
  const {
    cart,
    cartCount,
    cartTotal,
    updateQuantity,
    removeFromCart,
  } = useCart();

  /* ================= EMPTY CART ================= */

  if (cart.length === 0) {
    return (
      <section className="min-h-[calc(100vh-100px)] bg-linear-to-b from-[#f1faf4] via-[#f8fbf8] to-white px-4 py-16 sm:px-6 sm:py-20">

        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center py-16 text-center sm:py-20">

          <Reveal>
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-700 sm:h-24 sm:w-24">
            </div>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="text-3xl font-extrabold text-[#173b2c] sm:text-4xl">
              Your Cart is Empty
            </h1>
          </Reveal>

          <Reveal delay={250}>
            <p className="mt-4 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
              Looks like you haven't added anything to your cart yet.
              Explore our collection and find something you love.
            </p>
          </Reveal>

          <Reveal delay={350}>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 sm:px-7"
            >
              <FiArrowLeft />
              Continue Shopping
            </Link>
          </Reveal>

        </div>

      </section>
    );
  }


  return (
    <section className="min-h-[calc(100vh-100px)] bg-linear-to-b from-[#f1faf4] via-[#f8fbf8] to-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <Reveal>

          <div className="mb-8 sm:mb-12">

            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Your Shopping Bag
            </p>

            <h1 className="mt-2 text-3xl font-extrabold text-[#173b2c] sm:text-5xl">
              Your Cart
            </h1>

            <p className="mt-3 text-sm text-gray-500 sm:text-base">
              {cartCount} {cartCount === 1 ? "item" : "items"} in your cart
            </p>

          </div>

        </Reveal>


        {/* ================= MAIN GRID ================= */}

        <div className="grid gap-7 lg:grid-cols-3 lg:gap-10">


          {/* ================= CART ITEMS ================= */}

          <div className="space-y-4 lg:col-span-2 sm:space-y-5">

            {cart.map((item, index) => {

              const itemPrice =
                item.discountedPrice ?? item.price;

              const itemTotal =
                itemPrice * item.quantity;

              return (
                <Reveal
                  key={item.id}
                  delay={index * 100}
                >

                  <div className="
                    rounded-2xl
                    border border-gray-100
                    bg-white
                    p-4
                    shadow-sm
                    transition-shadow duration-300
                    hover:shadow-md
                    sm:rounded-3xl
                    sm:p-5
                  ">

                    {/* ================= PRODUCT ================= */}

                    <div className="flex gap-4 sm:gap-5">

                      {/* Image */}

                      <div className="
                        h-24 w-24
                        shrink-0
                        overflow-hidden
                        rounded-xl
                        bg-gray-100
                        sm:h-40 sm:w-40
                        sm:rounded-2xl
                      ">

                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />

                      </div>


                      {/* Product Info */}

                      <div className="min-w-0 flex-1">

                        <div className="flex items-start justify-between gap-2">

                          <div className="min-w-0">

                            <p className="truncate text-[10px] font-semibold uppercase tracking-widest text-green-600 sm:text-xs">
                              {item.category}
                            </p>

                            <h2 className="mt-1 truncate text-base font-bold text-gray-900 sm:text-xl">
                              {item.name}
                            </h2>

                          </div>


                          {/* Remove */}

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="
                              shrink-0
                              rounded-full
                              p-2
                              text-gray-400
                              transition
                              hover:bg-red-50
                              hover:text-red-500
                            "
                            aria-label={`Remove ${item.name}`}
                          >
                            <FiTrash2 size={17} />
                          </button>

                        </div>


                        {/* Price */}

                        <div className="mt-3 sm:hidden">

                          <p className="text-lg font-bold text-green-700">
                            ₹{itemTotal.toFixed(0)}
                          </p>

                          {item.discount > 0 ? (

                            <p className="text-[10px] text-gray-400">

                              <span className="line-through">
                                ₹{item.price * item.quantity}
                              </span>

                              <span className="ml-2 text-green-600">
                                {item.discount}% OFF
                              </span>

                            </p>

                          ) : (

                            <p className="text-[10px] text-gray-400">
                              ₹{item.price} each
                            </p>

                          )}

                        </div>

                      </div>

                    </div>


                    {/* ================= BOTTOM CONTROLS ================= */}

                    <div className="
                      mt-4
                      flex
                      items-center
                      justify-between
                      gap-3
                      border-t
                      border-gray-100
                      pt-4
                      sm:mt-auto
                      sm:border-0
                      sm:pt-4
                    ">

                      {/* Quantity */}

                      <div className="flex items-center overflow-hidden rounded-full border border-gray-200">

                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity - 1
                            )
                          }
                          className="p-2.5 text-gray-600 transition hover:bg-gray-100 active:bg-gray-200 sm:p-3"
                          aria-label="Decrease quantity"
                        >
                          <FiMinus size={15} />
                        </button>

                        <span className="min-w-9 text-center text-sm font-semibold text-gray-800 sm:min-w-10">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity + 1
                            )
                          }
                          className="p-2.5 text-gray-600 transition hover:bg-gray-100 active:bg-gray-200 sm:p-3"
                          aria-label="Increase quantity"
                        >
                          <FiPlus size={15} />
                        </button>

                      </div>


                      {/* Desktop Price */}

                      <div className="hidden text-right sm:block">

                        <p className="text-xl font-bold text-green-700">
                          ₹{itemTotal.toFixed(0)}
                        </p>

                        {item.discount > 0 ? (

                          <p className="text-xs text-gray-400">

                            <span className="line-through">
                              ₹{item.price * item.quantity}
                            </span>

                            <span className="ml-2 text-green-600">
                              {item.discount}% OFF
                            </span>

                          </p>

                        ) : (

                          <p className="text-xs text-gray-400">
                            ₹{item.price} each
                          </p>

                        )}

                      </div>

                    </div>

                  </div>

                </Reveal>
              );
            })}

          </div>


          {/* ================= ORDER SUMMARY ================= */}

          <Reveal delay={200}>

            <div className="
              h-fit
              rounded-2xl
              border border-gray-100
              bg-white
              p-5
              shadow-sm
              sm:rounded-3xl
              sm:p-7
              lg:sticky
              lg:top-28
            ">

              <h2 className="text-xl font-bold text-[#173b2c] sm:text-2xl">
                Order Summary
              </h2>


              <div className="mt-6 space-y-4">

                {/* Original Subtotal */}

                <div className="flex justify-between text-sm text-gray-600 sm:text-base">

                  <span>Subtotal</span>

                  <span>
                    ₹
                    {cart
                      .reduce(
                        (total, item) =>
                          total +
                          item.price * item.quantity,
                        0
                      )
                      .toFixed(0)}
                  </span>

                </div>


                {/* Discount */}

                <div className="flex justify-between text-sm text-gray-600 sm:text-base">

                  <span>Discount</span>

                  <span className="font-medium text-green-600">
                    -₹
                    {(
                      cart.reduce(
                        (total, item) =>
                          total +
                          item.price * item.quantity,
                        0
                      ) - cartTotal
                    ).toFixed(0)}
                  </span>

                </div>


                {/* Shipping */}

                <div className="flex justify-between text-sm text-gray-600 sm:text-base">

                  <span>Shipping</span>

                  <span className="font-medium text-green-600">
                    Free
                  </span>

                </div>

              </div>


              <div className="my-5 border-t border-gray-100 sm:my-6" />


              {/* Total */}

              <div className="flex items-center justify-between">

                <span className="text-base font-semibold text-gray-800 sm:text-lg">
                  Total
                </span>

                <span className="text-xl font-extrabold text-green-700 sm:text-2xl">
                  ₹{cartTotal.toFixed(0)}
                </span>

              </div>


              {/* Checkout */}

              <Link
                to="/checkout"
                className="
                  mt-6
                  flex w-full
                  items-center justify-center
                  rounded-full
                  bg-green-600
                  py-3.5
                  text-sm font-semibold text-white
                  shadow-lg
                  shadow-green-600/20
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-green-700
                  sm:mt-7
                  sm:py-4
                  sm:text-base
                "
              >
                Proceed to Checkout
              </Link>


              {/* Continue Shopping */}

              <Link
                to="/shop"
                className="
                  mt-3
                  flex items-center
                  justify-center
                  gap-2
                  py-3
                  text-sm
                  font-semibold
                  text-gray-500
                  transition
                  hover:text-green-600
                "
              >
                <FiArrowLeft size={16} />
                Continue Shopping
              </Link>

            </div>

          </Reveal>

        </div>

      </div>

    </section>
  );
}

export default Cart;