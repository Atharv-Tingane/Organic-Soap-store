import { Link } from "react-router-dom";
import heroBanner from "../../assets/images/herobanner.png";

function Hero() {
  return (
  //  <section className="w-full bg-linear-to-br from-white via-green-50 to-green-100">
  <section className="w-full bg-[#f4fbf5]">
      {/* <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col-reverse items-center justify-between gap-14 px-6 py-16 lg:flex-row lg:px-8"> */}
      {/* <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-14 px-6 py-20 lg:flex-row lg:px-8"> */}
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-14 px-6 py-20 lg:flex-row lg:px-8">

       

        <div className="max-w-xl text-center lg:text-left">

          <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700 shadow-sm">
             100% Natural & Handmade
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
            Organic Soap
            <br />
            for Healthy Skin
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience the goodness of handcrafted organic soaps made with
            natural ingredients that gently cleanse, nourish, and protect your
            skin every day.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

            <Link
              to="/shop"
              className="rounded-full bg-green-600 px-8 py-4 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
            >
              Shop Now
            </Link>

            <Link
              to="/shop"
              className="rounded-full border-2 border-green-600 px-8 py-4 text-center font-semibold text-green-600 transition-all duration-300 hover:bg-green-600 hover:text-white"
            >
              Learn More
            </Link>

          </div>

        </div>

      

        <div className="flex justify-center">

          <img
            src={heroBanner}
            alt="Organic Soap Collection"
            className="w-full max-w-xl rounded-3xl shadow-2xl transition duration-500 hover:scale-105"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;