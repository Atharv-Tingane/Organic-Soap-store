import { FiMail } from "react-icons/fi";

function Newsletter() {
  return (
   <section className="bg-green-600 pt-10 pb-20">

      <div className="mx-auto max-w-4xl px-6 text-center">

        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
          <FiMail className="text-3xl text-white" />
        </div>

        <p className="font-semibold uppercase tracking-[0.3em] text-green-100">
          Newsletter
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Stay Updated with OrganicSoap
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-green-100">
          Subscribe to receive exclusive offers, skincare tips, and updates on
          our newest handcrafted products.
        </p>

        <form className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">

         <input
  type="email"
  placeholder="Enter your email"
  className="flex-1 rounded-full bg-green-200 px-6 py-4 text-gray-700 placeholder:text-gray-500 outline-none ring-2 ring-green-200 focus:ring-green-400"
/>

          <button
            type="submit"
            className="rounded-full bg-white px-8 py-4 font-semibold text-green-700 transition hover:bg-green-100"
          >
            Subscribe
          </button>

        </form>

      </div>

    </section>
  );
}

export default Newsletter;