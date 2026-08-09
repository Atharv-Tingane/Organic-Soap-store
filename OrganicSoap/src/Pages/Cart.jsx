import { Link } from "react-router-dom";
import { FiMinus, FiPlus, FiTrash2, FiArrowLeft } from "react-icons/fi";
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

  if (cart.length === 0) {
    return (
      <section className="min-h-[calc(100vh-100px)] bg-[#f8fbf8] px-6 py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center py-20 text-center">

          <Reveal>
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-4xl">
            </div>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="text-4xl font-extrabold text-[#173b2c]">
              Your Cart is Empty
            </h1>
          </Reveal>

          <Reveal delay={250}>
            <p className="mt-4 max-w-md text-gray-500">
              Looks like you haven't added anything to your cart yet.
              Explore our collection and find something you love.
            </p>
          </Reveal>

          <Reveal delay={350}>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
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
    <section className="min-h-[calc(100vh-100px)] bg-[#f8fbf8] px-6 py-16 lg:px-8">

      <div className="mx-auto max-w-7xl">


        <Reveal>
          <div className="mb-12">
            <p className="font-semibold uppercase tracking-widest text-green-600">
              Your Shopping Bag
            </p>

            <h1 className="mt-2 text-4xl font-extrabold text-[#173b2c] sm:text-5xl">
              Your Cart
            </h1>

            <p className="mt-3 text-gray-500">
              {cartCount} {cartCount === 1 ? "item" : "items"} in your cart
            </p>
          </div>
        </Reveal>


        <div className="grid gap-10 lg:grid-cols-3">


          <div className="space-y-5 lg:col-span-2">

            {cart.map((item, index) => (
              <Reveal key={item.id} delay={index * 100}>

                <div className="flex gap-5 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md">

                  <div className="h-32 w-32 shrink-0 overflow-hidden rounded-2xl bg-gray-100 sm:h-40 sm:w-40">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />

                  </div>



                  <div className="flex min-w-0 flex-1 flex-col">

                    <div className="flex items-start justify-between gap-4">

                      <div>

                        <p className="text-xs font-semibold uppercase tracking-widest text-green-600">
                          {item.category}
                        </p>

                        <h2 className="mt-1 text-xl font-bold text-gray-900">
                          {item.name}
                        </h2>

                      </div>


                

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="rounded-full p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                        aria-label={`Remove ${item.name}`}
                      >
                        <FiTrash2 size={19} />
                      </button>

                    </div>


                    <div className="mt-auto flex flex-wrap items-center justify-between gap-4">


                      <div className="flex items-center overflow-hidden rounded-full border border-gray-200">

                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity - 1
                            )
                          }
                          className="p-2.5 text-gray-600 transition hover:bg-gray-100"
                          aria-label="Decrease quantity"
                        >
                          <FiMinus size={16} />
                        </button>


                        <span className="min-w-10 text-center font-semibold text-gray-800">
                          {item.quantity}
                        </span>


                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity + 1
                            )
                          }
                          className="p-2.5 text-gray-600 transition hover:bg-gray-100"
                          aria-label="Increase quantity"
                        >
                          <FiPlus size={16} />
                        </button>

                      </div>


                      <div className="text-right">

                        <p className="text-xl font-bold text-green-700">
                          ₹{item.price * item.quantity}
                        </p>

                        {item.quantity > 1 && (
                          <p className="text-xs text-gray-400">
                            ₹{item.price} each
                          </p>
                        )}

                      </div>

                    </div>

                  </div>

                </div>

              </Reveal>
            ))}

          </div>


          <Reveal delay={200}>

            <div className="h-fit rounded-3xl border border-gray-100 bg-white p-7 shadow-sm lg:sticky lg:top-28">

              <h2 className="text-2xl font-bold text-[#173b2c]">
                Order Summary
              </h2>


              <div className="mt-7 space-y-4">

                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{cartTotal}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium text-green-600">
                    Free
                  </span>
                </div>

              </div>


              <div className="my-6 border-t border-gray-100" />


              <div className="flex items-center justify-between">

                <span className="text-lg font-semibold text-gray-800">
                  Total
                </span>

                <span className="text-2xl font-extrabold text-green-700">
                  ₹{cartTotal}
                </span>

              </div>


              <Link
                to="/checkout"
                className="mt-7 flex w-full items-center justify-center rounded-full bg-green-600 py-4 font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
              >
                Proceed to Checkout
              </Link>


              <Link
                to="/shop"
                className="mt-4 flex items-center justify-center gap-2 py-3 text-sm font-semibold text-gray-500 transition hover:text-green-600"
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