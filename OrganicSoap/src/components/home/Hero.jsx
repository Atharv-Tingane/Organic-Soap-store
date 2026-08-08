import { Link } from "react-router-dom";
import heroBanner from "../../assets/images/herobanner.png";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f4fbf5]">

      {/* Background Glow */}

      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-green-200/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-emerald-200/20 blur-3xl" />


      {/* Hero Container */}

      <div className="mx-auto flex min-h-[calc(100vh-100px)] max-w-7xl items-center px-6 py-20 lg:px-8">

        <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-20">


          {/* ================= LEFT CONTENT ================= */}

          <div className="relative z-10 text-center lg:text-left">

            {/* Badge */}

            <div className="animate-[fade-up_0.8s_ease-out_both] mb-7 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/70 px-5 py-2 text-sm font-semibold text-green-700 shadow-sm backdrop-blur-sm">

              <span className="h-2 w-2 rounded-full bg-green-500" />

              100% Natural & Handmade

            </div>


            {/* Heading */}

            <h1 className="animate-[fade-up_0.8s_ease-out_both] text-5xl font-extrabold leading-[1.05] tracking-tight text-[#173b2c] [animation-delay:150ms] sm:text-6xl lg:text-7xl">

              Nature's care.

              <br />

              <span className="text-green-600">
                Beautiful skin.
              </span>

            </h1>


            {/* Description */}

            <p className="animate-[fade-up_0.8s_ease-out_both] mx-auto mt-7 max-w-xl text-base leading-8 text-gray-600 [animation-delay:300ms] sm:text-lg lg:mx-0">

              Handcrafted organic soaps made with carefully selected natural
              ingredients to gently cleanse, nourish, and care for your skin
              every day.

            </p>


            {/* Buttons */}

            <div className="animate-[fade-up_0.8s_ease-out_both] mt-9 flex flex-col items-center gap-4 [animation-delay:450ms] sm:flex-row sm:justify-center lg:justify-start">

              <Link
                to="/shop"
                className="group flex items-center justify-center gap-2 rounded-full bg-green-600 px-8 py-4 font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
              >
                Shop Collection

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>


              <Link
                to="/shop"
                className="rounded-full border border-green-600 bg-white/70 px-8 py-4 font-semibold text-green-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Explore More
              </Link>

            </div>


            {/* Features */}

            <div className="animate-[fade-up_0.8s_ease-out_both] mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-gray-500 [animation-delay:600ms] lg:justify-start">

              <div className="flex items-center gap-2">

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700">
                  ✓
                </span>

                Natural Ingredients

              </div>


              <div className="flex items-center gap-2">

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700">
                  ✓
                </span>

                Handmade

              </div>


              <div className="flex items-center gap-2">

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700">
                  ✓
                </span>

                Chemical Free

              </div>

            </div>

          </div>


          {/* ================= RIGHT IMAGE ================= */}

          <div className="relative flex items-center justify-center">

            {/* Image Glow */}

            <div className="absolute h-[75%] w-[75%] rounded-full bg-green-200/30 blur-3xl" />


            {/* Hero Image */}

            <div className="animate-[fade-right_1s_ease-out_both] relative w-full max-w-2xl [animation-delay:200ms]">

              <div className="absolute -inset-4 rounded-4xl bg-white/40 blur-xl" />

              <img
                src={heroBanner}
                alt="Organic Soap Collection"
                className="relative w-full rounded-4xl shadow-2xl transition duration-700 hover:scale-[1.02]"
              />

            </div>


            {/* Nature Badge */}

            <div className="animate-[fade-up_0.8s_ease-out_both] absolute -bottom-5 -left-2 hidden rounded-2xl border border-white/60 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md [animation-delay:700ms] sm:block lg:-left-8">

              <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                Crafted with
              </p>

              <p className="mt-1 font-semibold text-[#173b2c]">
                Nature's Finest
              </p>

            </div>


            <div className="animate-[fade-up_0.8s_ease-out_both] absolute -right-2 top-8 hidden rounded-2xl border border-white/60 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md [animation-delay:850ms] sm:block lg:-right-6">

              <div className="flex items-center gap-1 text-yellow-500">
                ★★★★★
              </div>

              <p className="mt-1 text-xs text-gray-500">
                Loved by our customers
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;