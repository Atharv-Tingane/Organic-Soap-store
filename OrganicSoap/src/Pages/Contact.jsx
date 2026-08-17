import { Link } from "react-router-dom";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
} from "react-icons/fi";

import Reveal from "../components/common/Reveal";

function Contact() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#f1faf4] via-[#f8fbf8] to-white">

      <section className="px-6 pb-16 pt-20 lg:px-8 lg:pb-20 lg:pt-28">

        <div className="mx-auto max-w-7xl text-center">

          <Reveal>

            <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
              Get In Touch
            </p>

          </Reveal>

          <Reveal delay={120}>

            <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-[#173b2c] sm:text-6xl">
              We'd love to
              <br />
              <span className="text-green-600">hear from you.</span>
            </h1>

          </Reveal>

          <Reveal delay={240}>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
              Have a question about our products, your order, or anything
              else? Reach out and we'll be happy to help.
            </p>

          </Reveal>

        </div>

      </section>


      <section className="px-6 pb-24 lg:px-8">

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">


          <div className="space-y-5">

            <Reveal delay={100}>

              <div className="rounded-3xl border border-green-100 bg-white/80 p-7 shadow-sm backdrop-blur-sm">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                  <FiMapPin size={22} />
                </div>

                <h2 className="mt-6 text-xl font-bold text-[#173b2c]">
                  Visit Us
                </h2>

                <p className="mt-2 leading-7 text-gray-500">
                  Nagpur, Maharashtra,
                  <br />
                  India
                </p>

              </div>

            </Reveal>


            <Reveal delay={200}>

              <div className="rounded-3xl border border-green-100 bg-white/80 p-7 shadow-sm backdrop-blur-sm">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                  <FiPhone size={22} />
                </div>

                <h2 className="mt-6 text-xl font-bold text-[#173b2c]">
                  Call Us
                </h2>

                <p className="mt-2 text-gray-500">
                  +91 98765 43210
                </p>

              </div>

            </Reveal>


            <Reveal delay={300}>

              <div className="rounded-3xl border border-green-100 bg-white/80 p-7 shadow-sm backdrop-blur-sm">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                  <FiMail size={22} />
                </div>

                <h2 className="mt-6 text-xl font-bold text-[#173b2c]">
                  Email Us
                </h2>

                <p className="mt-2 break-all text-gray-500">
                  support@organicsoap.com
                </p>

              </div>

            </Reveal>


            <Reveal delay={400}>

              <div className="rounded-3xl border border-green-100 bg-white/80 p-7 shadow-sm backdrop-blur-sm">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                  <FiClock size={22} />
                </div>

                <h2 className="mt-6 text-xl font-bold text-[#173b2c]">
                  Support Hours
                </h2>

                <p className="mt-2 leading-7 text-gray-500">
                  Monday – Saturday
                  <br />
                  10:00 AM – 6:00 PM
                </p>

              </div>

            </Reveal>

          </div>


          {/* CONTACT FORM */}

          <div className="lg:col-span-2">

            <Reveal delay={200}>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="rounded-4xl border border-green-100 bg-white/90 p-7 shadow-sm backdrop-blur-sm sm:p-10"
              >

                <div>

                  <p className="font-semibold uppercase tracking-[0.25em] text-green-600">
                    Send a Message
                  </p>

                  <h2 className="mt-3 text-3xl font-bold text-[#173b2c]">
                    How can we help?
                  </h2>

                  <p className="mt-3 text-gray-500">
                    Fill out the form and we'll get back to you as soon
                    as possible.
                  </p>

                </div>


                <div className="mt-8 grid gap-5 sm:grid-cols-2">

                  {/* NAME */}

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-[#fbfdfb] px-4 py-3.5 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    />

                  </div>


                  {/* EMAIL */}

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-[#fbfdfb] px-4 py-3.5 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    />

                  </div>


                  {/* PHONE */}

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      className="w-full rounded-xl border border-gray-200 bg-[#fbfdfb] px-4 py-3.5 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    />

                  </div>


                  {/* SUBJECT */}

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Subject
                    </label>

                    <input
                      type="text"
                      placeholder="How can we help?"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-[#fbfdfb] px-4 py-3.5 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    />

                  </div>


                  {/* MESSAGE */}

                  <div className="sm:col-span-2">

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Message
                    </label>

                    <textarea
                      rows="6"
                      placeholder="Tell us how we can help..."
                      required
                      className="w-full resize-none rounded-xl border border-gray-200 bg-[#fbfdfb] px-4 py-3.5 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    />

                  </div>

                </div>


                <button
                  type="submit"
                  className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#173b2c] px-8 py-4 font-semibold text-white shadow-lg shadow-[#173b2c]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#214b38] hover:shadow-xl"
                >
                  Send Message

                  <FiSend
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    size={18}
                  />

                </button>

              </form>

            </Reveal>

          </div>

        </div>

      </section>


      {/* BOTTOM CTA */}

      <section className="px-6 pb-24 lg:px-8">

        <Reveal>

          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-linear-to-br from-[#173b2c] via-[#214b38] to-[#31583f] px-8 py-14 text-center sm:px-12">

            <p className="font-semibold uppercase tracking-[0.3em] text-green-300">
              Explore OrganicSoap
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Looking for something natural?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-[#C4D4C9]">
              Discover our handcrafted collection and find something
              made for your everyday skincare ritual.
            </p>

            <Link
              to="/shop"
              className="mt-7 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-[#173b2c] transition-all duration-300 hover:-translate-y-1 hover:bg-green-50"
            >
              Explore Collection
            </Link>

          </div>

        </Reveal>

      </section>

    </main>
  );
}

export default Contact;