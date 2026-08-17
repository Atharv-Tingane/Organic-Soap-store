import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiCheck,
  FiCreditCard,
  FiMapPin,
  FiShoppingBag,
} from "react-icons/fi";

import { useCart } from "../context/CartContext";
import Reveal from "../components/common/Reveal";

function Checkout() {
  const { cart, cartTotal } = useCart();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
  };


  const originalTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );



  const totalDiscount = originalTotal - cartTotal;

  if (cart.length === 0 && !orderPlaced) {
    return (
      <section className="min-h-[calc(100vh-100px)] bg-linear-to-b from-[#f1faf4] via-[#f8fbf8] to-white px-4 py-16 sm:px-6 sm:py-20">

        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center py-16 text-center sm:py-20">

          <Reveal>
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-700 sm:h-24 sm:w-24">
              <FiShoppingBag size={34} />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="mt-7 text-3xl font-extrabold text-[#173b2c] sm:text-4xl">
              Your Cart is Empty
            </h1>
          </Reveal>

          <Reveal delay={250}>
            <p className="mt-4 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
              Add some products before proceeding to checkout.
            </p>
          </Reveal>

          <Reveal delay={350}>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3.5 font-semibold text-white transition hover:bg-green-700 sm:px-7"
            >
              <FiArrowLeft />
              Continue Shopping
            </Link>
          </Reveal>

        </div>

      </section>
    );
  }


  if (orderPlaced) {
    return (
      <section className="min-h-[calc(100vh-100px)] bg-linear-to-b from-[#f1faf4] via-[#f8fbf8] to-white px-4 py-16 sm:px-6 sm:py-20">

        <div className="mx-auto flex min-h-[65vh] max-w-3xl flex-col items-center justify-center text-center">

          <Reveal>
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 sm:h-24 sm:w-24">
              <FiCheck size={38} />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-green-600 sm:mt-8 sm:tracking-[0.25em]">
              Order Confirmed
            </p>
          </Reveal>

          <Reveal delay={250}>
            <h1 className="mt-3 text-4xl font-extrabold text-[#173b2c] sm:mt-4 sm:text-6xl">
              Thank You!
            </h1>
          </Reveal>

          <Reveal delay={350}>
            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:mt-6 sm:text-lg sm:leading-8">
              Your order has been successfully placed.
              We will send the order details to your email shortly.
            </p>
          </Reveal>

          <Reveal delay={450}>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 sm:mt-10 sm:px-10 sm:py-4"
            >
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


        <Reveal>

          <div className="mb-8 sm:mb-12">

            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Almost There
            </p>

            <h1 className="mt-2 text-3xl font-extrabold text-[#173b2c] sm:text-5xl">
              Checkout
            </h1>

            <p className="mt-3 text-sm text-gray-500 sm:text-base">
              Complete your details to place your order.
            </p>

          </div>

        </Reveal>


        <div className="grid gap-7 lg:grid-cols-3 lg:gap-10">



          <div className="lg:col-span-2">

            <Reveal>

              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-9"
              >


                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <FiMapPin />
                  </div>

                  <div>

                    <h2 className="text-xl font-bold text-[#173b2c] sm:text-2xl">
                      Delivery Details
                    </h2>

                    <p className="text-xs text-gray-500 sm:text-sm">
                      Where should we deliver your order?
                    </p>

                  </div>

                </div>



                <div className="mt-7 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5">

                  <div className="sm:col-span-2">

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 sm:text-base"
                    />

                  </div>


                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 sm:text-base"
                    />

                  </div>


                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter phone number"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 sm:text-base"
                    />

                  </div>

                  <div className="sm:col-span-2">

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Address
                    </label>

                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows="3"
                      placeholder="House no., street, area"
                      className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 sm:text-base"
                    />

                  </div>


                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="City"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 sm:text-base"
                    />

                  </div>



                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      State
                    </label>

                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      placeholder="State"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 sm:text-base"
                    />

                  </div>


                  <div className="sm:col-span-2">

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Pincode
                    </label>

                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                      maxLength="6"
                      inputMode="numeric"
                      placeholder="6-digit pincode"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 sm:text-base"
                    />

                  </div>

                </div>


                <div className="mt-8 border-t border-gray-100 pt-7 sm:mt-10 sm:pt-8">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <FiCreditCard />
                    </div>

                    <div>

                      <h2 className="text-xl font-bold text-[#173b2c] sm:text-2xl">
                        Payment
                      </h2>

                      <p className="text-xs text-gray-500 sm:text-sm">
                        Payment options will be available soon.
                      </p>

                    </div>

                  </div>

                </div>


                <button
                  type="submit"
                  className="mt-7 w-full rounded-full bg-green-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 sm:mt-8 sm:py-4 sm:text-base"
                >
                  Place Order
                </button>

              </form>

            </Reveal>

          </div>



          <Reveal delay={200}>

            <div className="h-fit rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-7 lg:sticky lg:top-28">

              <h2 className="text-xl font-bold text-[#173b2c] sm:text-2xl">
                Your Order
              </h2>



              <div className="mt-6 space-y-4 sm:mt-7 sm:space-y-5">

                {cart.map((item) => {

                  const itemPrice =
                    item.discountedPrice ?? item.price;

                  const itemTotal =
                    itemPrice * item.quantity;

                  return (
                    <div
                      key={item.id}
                      className="flex gap-3 sm:gap-4"
                    >

                      {/* Image */}

                      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-gray-100 sm:h-16 sm:w-16 sm:rounded-xl">

                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />

                      </div>


            

                      <div className="min-w-0 flex-1">

                        <h3 className="truncate text-sm font-semibold text-gray-800 sm:text-base">
                          {item.name}
                        </h3>

                        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                          Qty: {item.quantity}
                        </p>

                      </div>


           

                      <div className="text-right">

                        <p className="text-sm font-semibold text-gray-800 sm:text-base">
                          ₹{itemTotal.toFixed(0)}
                        </p>

                        {item.discount > 0 && (
                          <p className="text-[10px] text-gray-400 line-through sm:text-xs">
                            ₹{(
                              item.price * item.quantity
                            ).toFixed(0)}
                          </p>
                        )}

                      </div>

                    </div>
                  );
                })}

              </div>


              <div className="my-6 border-t border-gray-100 sm:my-7" />


              <div className="space-y-3 sm:space-y-4">

                <div className="flex justify-between text-sm text-gray-600 sm:text-base">

                  <span>Subtotal</span>

                  <span>
                    ₹{originalTotal.toFixed(0)}
                  </span>

                </div>


                <div className="flex justify-between text-sm text-gray-600 sm:text-base">

                  <span>Discount</span>

                  <span className="font-semibold text-green-600">
                    -₹{totalDiscount.toFixed(0)}
                  </span>

                </div>


                <div className="flex justify-between text-sm text-gray-600 sm:text-base">

                  <span>Shipping</span>

                  <span className="font-semibold text-green-600">
                    Free
                  </span>

                </div>

              </div>


              <div className="my-5 border-t border-gray-100 sm:my-6" />


              <div className="flex items-center justify-between">

                <span className="text-base font-semibold text-gray-800 sm:text-lg">
                  Total
                </span>

                <span className="text-xl font-extrabold text-green-700 sm:text-2xl">
                  ₹{cartTotal.toFixed(0)}
                </span>

              </div>

            </div>

          </Reveal>

        </div>

      </div>

    </section>
  );
}

export default Checkout;