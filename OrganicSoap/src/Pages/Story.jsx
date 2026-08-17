import { Link } from "react-router-dom";
import {
  FiHeart,
  FiSun,
  FiDroplet,
} from "react-icons/fi";

import Reveal from "../components/common/Reveal";
import heroBanner from "../assets/images/herobanner.png";

function Story() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#f1faf4] via-[#f8fbf8] to-white">


      <section className="px-6 py-20 lg:px-8 lg:py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">


          <div>

            <Reveal>

              <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
                Our Story
              </p>

            </Reveal>

            <Reveal delay={120}>

              <h1 className="mt-4 text-5xl font-extrabold leading-tight tracking-tight text-[#173b2c] sm:text-6xl">
                Skincare that
                <br />
                <span className="text-green-600">
                  comes back to nature.
                </span>
              </h1>

            </Reveal>

            <Reveal delay={240}>

              <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
                We believe skincare doesn't need to be complicated.
                It can be simple, thoughtful, and made with ingredients
                that come from nature.
              </p>

            </Reveal>

            <Reveal delay={360}>

              <p className="mt-5 max-w-xl leading-8 text-gray-500">
                Our journey started with a simple idea — create everyday
                skincare products that feel good to use while keeping
                things honest, natural, and uncomplicated.
              </p>

            </Reveal>

            <Reveal delay={480}>

              <Link
                to="/shop"
                className="mt-8 inline-flex items-center rounded-full bg-green-600 px-8 py-4 font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
              >
                Explore Our Collection
              </Link>

            </Reveal>

          </div>


          {/* IMAGE */}

          <Reveal delay={200}>

            <div className="relative">

              <div className="absolute -inset-6 rounded-[3rem] bg-green-200/30 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/60 p-3 shadow-xl">

                <img
                  src={heroBanner}
                  alt="Our handcrafted organic soap collection"
                  className="h-120 w-full rounded-4xl object-cover"
                />

              </div>

            </div>

          </Reveal>

        </div>

      </section>


      {/* PHILOSOPHY */}

      <section className="px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="mx-auto max-w-3xl text-center">

              <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
                What We Believe
              </p>

              <h2 className="mt-3 text-4xl font-bold text-[#173b2c] sm:text-5xl">
                Less complexity.
                <br />
                More nature.
              </h2>

              <p className="mt-5 leading-8 text-gray-500">
                Every product begins with a simple goal: create
                thoughtful skincare without unnecessary complexity.
              </p>

            </div>

          </Reveal>


          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <Reveal delay={100}>

              <div className="rounded-3xl border border-green-100 bg-white/80 p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#173b2c]">
                  Natural Ingredients
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  Carefully selected ingredients inspired by nature.
                </p>

              </div>

            </Reveal>


            <Reveal delay={200}>

              <div className="rounded-3xl border border-green-100 bg-white/80 p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                  <FiHeart size={22} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#173b2c]">
                  Made With Care
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  Thoughtfully crafted with attention to every detail.
                </p>

              </div>

            </Reveal>


            <Reveal delay={300}>

              <div className="rounded-3xl border border-green-100 bg-white/80 p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                  <FiDroplet size={22} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#173b2c]">
                  Gentle Care
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  Simple everyday cleansing designed with care.
                </p>

              </div>

            </Reveal>


            <Reveal delay={400}>

              <div className="rounded-3xl border border-green-100 bg-white/80 p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                  <FiSun size={22} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#173b2c]">
                  Everyday Ritual
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  Turning a simple routine into a moment of self-care.
                </p>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* STORY */}

      <section className="px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-green-100 bg-white/70 px-7 py-14 text-center shadow-sm backdrop-blur-sm sm:px-12">

          <Reveal>

            <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
              From Simple Beginnings
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#173b2c] sm:text-4xl">
              A small idea with a natural purpose.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-500">
              What began as an appreciation for simple, natural skincare
              grew into a collection of handcrafted products made for
              everyday life. We focus on keeping our approach thoughtful,
              uncomplicated, and connected to nature.
            </p>

          </Reveal>

        </div>

      </section>


      {/* CTA */}

      <section className="px-6 pb-24 pt-10 lg:px-8">

        <Reveal>

          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#173b2c] px-8 py-16 text-center sm:px-12">

            <p className="font-semibold uppercase tracking-[0.3em] text-green-300">
              Discover the Collection
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
              Make nature part of
              <br />
              your everyday ritual.
            </h2>

            <Link
              to="/shop"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-[#173b2c] transition-all duration-300 hover:-translate-y-1 hover:bg-green-50"
            >
              Shop Now
            </Link>

          </div>

        </Reveal>

      </section>

    </main>
  );
}

export default Story;