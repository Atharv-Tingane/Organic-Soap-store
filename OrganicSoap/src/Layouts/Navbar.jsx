import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart, FiUser, FiSearch, FiMenu } from "react-icons/fi";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-6 py-4 shadow-lg backdrop-blur-xl">
    {/* // <header className="sticky top-0 z-50 w-full">
     <div className="px-6 pt-4">
    <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/20 bg-white/60 px-6 py-4 shadow-xl backdrop-blur-xl"> */}
      
        
       
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-green-700"
        >
           OrganicSoap
        </Link>

       
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <NavLink
              to="/"
              className="font-medium text-gray-700 transition hover:text-green-600"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/shop"
              className="font-medium text-gray-700 transition hover:text-green-600"
            >
              Shop
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              className="font-medium text-gray-700 transition hover:text-green-600"
            >
              Our Story
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              className="font-medium text-gray-700 transition hover:text-green-600"
            >
              Contact
            </NavLink>
          </li>
        </ul>

       
        <div className="flex items-center gap-4">
          
          <button className="rounded-full p-2 transition hover:bg-green-100">
            <FiSearch size={20} />
          </button>

          <Link
            to="/cart"
            className="rounded-full p-2 transition hover:bg-green-100"
          >
            <FiShoppingCart size={20} />
          </Link>

          <Link
            to="/login"
            className="hidden rounded-xl bg-green-600 px-5 py-2 font-medium text-white transition hover:bg-green-700 md:block"
          >
            Login
          </Link>

         
          <button className="rounded-full p-2 transition hover:bg-green-100 md:hidden">
            <FiMenu size={24} />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;