import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-linear-to-br from-[#102D23] via-[#173B2C] to-[#294936] text-[#DCE8DF]">

      {/* Background atmosphere */}

      <div className="pointer-events-none absolute -left-40 -top-40 h-120 w-120 rounded-full bg-green-400/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-128 w-lg rounded-full bg-[#A6C48A]/10 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.06),transparent_35%)]" />


      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">


        {/* BRAND */}

        <div>

          <h2 className="text-3xl font-bold text-[#F4F8F3]">
            OrganicSoap
          </h2>

          <p className="mt-5 leading-7 text-[#B7C8BC]">
            Handcrafted organic skincare products made with natural
            ingredients for healthy, glowing skin.
          </p>


          {/* Social */}

          <div className="mt-6 flex gap-4">

            <a
              href="#"
              aria-label="Facebook"
              className="rounded-full border border-white/10 bg-white/10 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-green-500 hover:text-white"
            >
              <FiFacebook size={20} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="rounded-full border border-white/10 bg-white/10 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-green-500 hover:text-white"
            >
              <FiInstagram size={20} />
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="rounded-full border border-white/10 bg-white/10 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-green-500 hover:text-white"
            >
              <FiTwitter size={20} />
            </a>

          </div>

        </div>


        {/* QUICK LINKS */}

        <div>

          <h3 className="text-xl font-semibold text-[#F4F8F3]">
            Quick Links
          </h3>

          <ul className="mt-5 space-y-3 text-[#B7C8BC]">

            <li>
              <Link
                to="/"
                className="transition hover:text-green-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/shop"
                className="transition hover:text-green-300"
              >
                Shop
              </Link>
            </li>

            <li>
              <Link
                to="/story"
                className="transition hover:text-green-300"
              >
                Our Story
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="transition hover:text-green-300"
              >
                Contact
              </Link>
            </li>

          </ul>

        </div>


        {/* SHOP */}

        <div>

          <h3 className="text-xl font-semibold text-[#F4F8F3]">
            Shop
          </h3>

          <ul className="mt-5 space-y-3 text-[#B7C8BC]">

            <li className="transition hover:text-green-300">
              Organic Soaps
            </li>

            <li className="transition hover:text-green-300">
              Face Packs
            </li>

            <li className="transition hover:text-green-300">
              Herbal Care
            </li>

          </ul>

        </div>


        {/* CONTACT */}

        <div>

          <h3 className="text-xl font-semibold text-[#F4F8F3]">
            Contact
          </h3>

          <div className="mt-5 space-y-4 text-[#B7C8BC]">

            <div className="flex items-start gap-3">

              <FiMapPin className="mt-1 shrink-0 text-green-400" />

              <p>
                Nagpur, Maharashtra, India
              </p>

            </div>


            <div className="flex items-center gap-3">

              <FiPhone className="shrink-0 text-green-400" />

              <p>
                +91 98765 43210
              </p>

            </div>


            <div className="flex items-center gap-3">

              <FiMail className="shrink-0 text-green-400" />

              <p>
                support@organicsoap.com
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* BOTTOM BAR */}

      <div className="relative border-t border-white/10 bg-black/10 py-6 text-center text-sm text-[#91A99A]">

        © 2026 OrganicSoap. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;