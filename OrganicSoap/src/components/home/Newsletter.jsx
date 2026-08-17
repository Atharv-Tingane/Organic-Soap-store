import { useState } from "react";
import { FiMail } from "react-icons/fi";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setMessage("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Frontend-only for now
    setMessage("Thank you for subscribing! ");
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#e6f4e9] via-[#f5f8ed] to-[#dcefe2] px-6 py-16 sm:py-20">

      {/* Soft Background Glows */}

      <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-green-300/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-100/20 blur-3xl" />


      <div className="relative mx-auto max-w-4xl text-center">

        {/* Mail Icon */}

        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-green-700/10 bg-white/60 shadow-sm backdrop-blur-md">

          <FiMail className="text-2xl text-green-700" />

        </div>


        {/* Label */}

        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-green-700 sm:text-sm">
          Newsletter
        </p>


        {/* Heading */}

        <h2 className="mt-4 text-3xl font-bold text-[#173b2c] sm:text-4xl">
          Stay Updated with OrganicSoap
        </h2>


        {/* Description */}

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
          Subscribe to receive exclusive offers, skincare tips, and updates on
          our newest handcrafted products.
        </p>


        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-9 flex max-w-2xl flex-col gap-3 sm:flex-row"
        >

          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setMessage("");
            }}
            placeholder="Enter your email"
            className="
              flex-1
              rounded-full
              border
              border-green-900/10
              bg-white/60
              px-6
              py-4
              text-gray-700
              outline-none
              shadow-sm
              backdrop-blur-md
              placeholder:text-gray-400
              transition
              focus:border-green-600/30
              focus:bg-white/80
            "
          />


          <button
            type="submit"
            className="
              rounded-full
              bg-[#173b2c]
              px-8
              py-4
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-green-700
              hover:shadow-xl
            "
          >
            Subscribe
          </button>

        </form>


        {/* Message */}

        {message && (
          <p className="mt-4 text-sm font-medium text-green-700">
            {message}
          </p>
        )}

      </div>

    </section>
  );
}

export default Newsletter;