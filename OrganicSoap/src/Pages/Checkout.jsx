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

  // Original price before discount
  const originalTotal = cart.reduce(
    (total, item) =>
      total +
      (item.originalPrice ?? item.price) * item.quantity,
    0
  );

  // Total savings
  const totalDiscount = originalTotal - cartTotal;


  // EMPTY CART

  if (cart.length === 0 && !orderPlaced) {
    return (
      <section className="min-h-[calc(100vh-100px)] bg-linear-to-b from-[#f1faf4] via-[#f8fbf8] to-white px-6 py-20">

        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center py-20 text-center">

          <Reveal>
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-green-700">
              <FiShoppingBag size={38} />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="mt-7 text-4xl font-extrabold text-[#173b2c]">
              Your Cart is Empty
            </h1>
          </Reveal>

          <Reveal delay={250}>
            <p className="mt-4 text-gray-500">
              Add some products before proceeding to checkout.
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


  // ORDER SUCCESS

  if (orderPlaced) {
    return (
      <section className="min-h-[calc(100vh-100px)] bg-linear-to-b from-[#f1faf4] via-[#f8fbf8] to-white px-6 py-20">

        <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center text-center">

          <Reveal>
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-green-600">
              <FiCheck size={42} />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-8 font-semibold uppercase tracking-[0.25em] text-green-600">
              Order Confirmed
            </p>
          </Reveal>

          <Reveal delay={250}>
            <h1 className="mt-4 text-4xl font-extrabold text-[#173b2c] sm:text-6xl">
              Thank You!
            </h1>
          </Reveal>

          <Reveal delay={350}>
            <p className="mt-6 max-w-xl text-base leading-8 text-gray-500 sm:text-lg">
              Your order has been successfully placed.
              We will send the order details to your email shortly.
            </p>
          </Reveal>

          <Reveal delay={450}>
            <Link
              to="/shop"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-green-600 px-10 py-4 font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
            >
              Continue Shopping
            </Link>
          </Reveal>

        </div>

      </section>
    );
  }


  return (
    <section className="min-h-[calc(100vh-100px)] bg-linear-to-b from-[#f1faf4] via-[#f8fbf8] to-white px-6 py-16 lg:px-8">

      <div className="mx-auto max-w-7xl">


        <Reveal>

          <div className="mb-12">

            <p className="font-semibold uppercase tracking-[0.25em] text-green-600">
              Almost There
            </p>

            <h1 className="mt-2 text-4xl font-extrabold text-[#173b2c] sm:text-5xl">
              Checkout
            </h1>

            <p className="mt-3 text-gray-500">
              Complete your details to place your order.
            </p>

          </div>

        </Reveal>


        <div className="grid gap-10 lg:grid-cols-3">

          {/* FORM */}

          <div className="lg:col-span-2">

            <Reveal>

              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm sm:p-9"
              >

                {/* DELIVERY */}

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <FiMapPin />
                  </div>

                  <div>

                    <h2 className="text-2xl font-bold text-[#173b2c]">
                      Delivery Details
                    </h2>

                    <p className="text-sm text-gray-500">
                      Where should we deliver your order?
                    </p>

                  </div>

                </div>


                <div className="mt-8 grid gap-5 sm:grid-cols-2">


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
                      className="w-full rounded-xl border border-gray-200 px-4 py-3.5 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
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
                      className="w-full rounded-xl border border-gray-200 px-4 py-3.5 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
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
                      className="w-full rounded-xl border border-gray-200 px-4 py-3.5 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
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
                      className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3.5 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
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
                      className="w-full rounded-xl border border-gray-200 px-4 py-3.5 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
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
                      className="w-full rounded-xl border border-gray-200 px-4 py-3.5 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
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
                      placeholder="6-digit pincode"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3.5 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    />

                  </div>

                </div>


                <div className="mt-10 border-t border-gray-100 pt-8">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <FiCreditCard />
                    </div>

                    <div>

                      <h2 className="text-2xl font-bold text-[#173b2c]">
                        Payment
                      </h2>

                      <p className="text-sm text-gray-500">
                        Payment options will be available soon.
                      </p>

                    </div>

                  </div>

                </div>


                <button
                  type="submit"
                  className="mt-8 w-full rounded-full bg-green-600 py-4 font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
                >
                  Place Order
                </button>

              </form>

            </Reveal>

          </div>



          <Reveal delay={200}>

            <div className="h-fit rounded-3xl border border-gray-100 bg-white p-7 shadow-sm lg:sticky lg:top-28">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
                Summary
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#173b2c]">
                Your Order
              </h2>



              <div className="mt-7 space-y-5">

                {cart.map((item) => {

                  const itemPrice = item.price;

                  const itemTotal =
                    itemPrice * item.quantity;

                  const originalPrice =
                    item.originalPrice ?? item.price;

                  const hasDiscount =
                    originalPrice > item.price;

                  return (
                    <div
                      key={item.id}
                      className="flex gap-4"
                    >

                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-gray-100">

                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />

                      </div>


                      <div className="min-w-0 flex-1">

                        <h3 className="truncate font-semibold text-gray-800">
                          {item.name}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>

                      </div>


                      <div className="text-right">

                        <p className="font-semibold text-gray-800">
                          ₹{itemTotal.toFixed(0)}
                        </p>

                        {hasDiscount && (
                          <p className="text-xs text-gray-400 line-through">
                            ₹{(
                              originalPrice * item.quantity
                            ).toFixed(0)}
                          </p>
                        )}

                      </div>

                    </div>
                  );
                })}

              </div>


              <div className="my-7 border-t border-gray-100" />



              <div className="space-y-4">

                <div className="flex justify-between text-gray-600">

                  <span>Subtotal</span>

                  <span>
                    ₹{originalTotal.toFixed(0)}
                  </span>

                </div>


                {totalDiscount > 0 && (
                  <div className="flex justify-between text-gray-600">

                    <span>Discount</span>

                    <span className="font-semibold text-green-600">
                      -₹{totalDiscount.toFixed(0)}
                    </span>

                  </div>
                )}


                <div className="flex justify-between text-gray-600">

                  <span>Shipping</span>

                  <span className="font-semibold text-green-600">
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