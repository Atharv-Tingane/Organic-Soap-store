import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiEdit2,
  FiShoppingBag,
  FiHeart,
  FiLogOut,
} from "react-icons/fi";

import Reveal from "../components/common/Reveal";

function Profile() {
  return (
    <section className="min-h-screen bg-linear-to-b from-[#f1faf4] via-[#f8fbf8] to-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">

      <div className="mx-auto max-w-6xl">


        <Reveal>

          <div className="mb-8 sm:mb-12">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600">
              My Account
            </p>

            <h1 className="mt-2 text-3xl font-extrabold text-[#173b2c] sm:text-5xl">
              My Profile
            </h1>

            <p className="mt-3 text-sm text-gray-500 sm:text-base">
              Manage your account and view your shopping activity.
            </p>

          </div>

        </Reveal>


        <div className="grid gap-7 lg:grid-cols-3 lg:gap-10">


          <Reveal>

            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">


              <div className="flex flex-col items-center text-center">

                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-green-700 sm:h-28 sm:w-28">
                  <FiUser size={45} />
                </div>

                <h2 className="mt-5 text-2xl font-bold text-[#173b2c]">
                  User Name
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  user@example.com
                </p>

              </div>


              <button
                className="
                  mt-7
                  flex w-full
                  items-center justify-center gap-2
                  rounded-xl
                  border border-green-600
                  py-3
                  text-sm font-semibold
                  text-green-700
                  transition
                  hover:bg-green-50
                "
              >
                <FiEdit2 size={16} />
                Edit Profile
              </button>


              <button
                className="
                  mt-3
                  flex w-full
                  items-center justify-center gap-2
                  rounded-xl
                  py-3
                  text-sm font-semibold
                  text-gray-500
                  transition
                  hover:bg-red-50
                  hover:text-red-500
                "
              >
                <FiLogOut size={16} />
                Logout
              </button>

            </div>

          </Reveal>


          <div className="lg:col-span-2">

            <Reveal delay={150}>

              <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
                      Personal Information
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-[#173b2c]">
                      Account Details
                    </h2>

                  </div>

                  <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700 sm:flex">
                    <FiUser />
                  </div>

                </div>


                <div className="mt-8 grid gap-5 sm:grid-cols-2">


                  <div className="rounded-2xl bg-[#f5faf6] p-5">

                    <div className="flex items-center gap-3">

                      <FiUser className="text-green-600" />

                      <div>

                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                          Full Name
                        </p>

                        <p className="mt-1 font-semibold text-gray-800">
                          User Name
                        </p>

                      </div>

                    </div>

                  </div>


                  <div className="rounded-2xl bg-[#f5faf6] p-5">

                    <div className="flex items-center gap-3">

                      <FiMail className="text-green-600" />

                      <div>

                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                          Email
                        </p>

                        <p className="mt-1 break-all font-semibold text-gray-800">
                          user@example.com
                        </p>

                      </div>

                    </div>

                  </div>

                  <div className="rounded-2xl bg-[#f5faf6] p-5">

                    <div className="flex items-center gap-3">

                      <FiPhone className="text-green-600" />

                      <div>

                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                          Phone
                        </p>

                        <p className="mt-1 font-semibold text-gray-800">
                          +91 98765 43210
                        </p>

                      </div>

                    </div>

                  </div>


                  <div className="rounded-2xl bg-[#f5faf6] p-5">

                    <div className="flex items-start gap-3">

                      <FiMapPin className="mt-1 shrink-0 text-green-600" />

                      <div>

                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                          Address
                        </p>

                        <p className="mt-1 font-semibold text-gray-800">
                          Nagpur, Maharashtra, India
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </Reveal>


            <Reveal delay={250}>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">

                <div className="rounded-3xl bg-[#123f2d] p-6 text-white shadow-sm">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                    <FiShoppingBag size={22} />
                  </div>

                  <p className="mt-5 text-sm text-green-100">
                    Total Orders
                  </p>

                  <p className="mt-1 text-3xl font-extrabold">
                    0
                  </p>

                  <p className="mt-2 text-sm text-green-100/70">
                    Your orders will appear here.
                  </p>

                </div>


                <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <FiHeart size={22} />
                  </div>

                  <p className="mt-5 text-sm text-gray-500">
                    Wishlist
                  </p>

                  <p className="mt-1 text-3xl font-extrabold text-[#173b2c]">
                    0
                  </p>

                  <p className="mt-2 text-sm text-gray-400">
                    Your favourite products will appear here.
                  </p>

                </div>

              </div>

            </Reveal>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Profile;