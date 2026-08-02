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
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">


        <div>
          <h2 className="text-3xl font-bold text-white">
             OrganicSoap
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            Handcrafted organic skincare products made with natural ingredients
            for healthy, glowing skin.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#"
              className="rounded-full bg-gray-800 p-3 transition hover:bg-green-600"
            >
              <FiFacebook size={20} />
            </a>

            <a
              href="#"
              className="rounded-full bg-gray-800 p-3 transition hover:bg-green-600"
            >
              <FiInstagram size={20} />
            </a>

            <a
              href="#"
              className="rounded-full bg-gray-800 p-3 transition hover:bg-green-600"
            >
              <FiTwitter size={20} />
            </a>
          </div>
        </div>


        <div>
          <h3 className="text-xl font-semibold text-white">
            Quick Links
          </h3>

          <ul className="mt-5 space-y-3">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/">Our Story</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>


        <div>
          <h3 className="text-xl font-semibold text-white">
            Shop
          </h3>

          <ul className="mt-5 space-y-3">
            <li>Organic Soaps</li>
            <li>Face Packs</li>
            <li>Herbal Care</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">
            Contact
          </h3>

          <div className="mt-5 space-y-4">

            <div className="flex items-start gap-3">
              <FiMapPin className="mt-1 text-green-500" />
              <p>Nagpur, Maharashtra, India</p>
            </div>

            <div className="flex items-center gap-3">
              <FiPhone className="text-green-500" />
              <p>+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-3">
              <FiMail className="text-green-500" />
              <p>support@organicsoap.com</p>
            </div>

          </div>
        </div>

      </div>


      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © 2026 OrganicSoap. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;