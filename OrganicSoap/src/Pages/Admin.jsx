import {
  FiPackage,
  FiShoppingBag,
  FiUsers,
  FiDollarSign,
  FiPlus,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

import Reveal from "../components/common/Reveal";

function Admin() {
  const stats = [
    {
      title: "Total Products",
      value: "6",
      icon: FiPackage,
    },
    {
      title: "Total Orders",
      value: "0",
      icon: FiShoppingBag,
    },
    {
      title: "Customers",
      value: "0",
      icon: FiUsers,
    },
    {
      title: "Revenue",
      value: "₹0",
      icon: FiDollarSign,
    },
  ];

  const products = [
    {
      id: 1,
      name: "Turmeric Soap",
      category: "Organic Soap",
      price: 249,
      stock: 25,
    },
    {
      id: 2,
      name: "Aloe Vera Soap",
      category: "Organic Soap",
      price: 299,
      stock: 18,
    },
    {
      id: 3,
      name: "Coffee Soap",
      category: "Organic Soap",
      price: 279,
      stock: 30,
    },
    {
      id: 4,
      name: "Rose Soap",
      category: "Organic Soap",
      price: 259,
      stock: 12,
    },
    {
      id: 5,
      name: "Neem Soap",
      category: "Organic Soap",
      price: 229,
      stock: 20,
    },
    {
      id: 6,
      name: "Lavender Soap",
      category: "Organic Soap",
      price: 319,
      stock: 15,
    },
  ];

  return (
    <section className="min-h-screen bg-linear-to-b from-[#f1faf4] via-[#f8fbf8] to-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">

      <div className="mx-auto max-w-7xl">

        <Reveal>

          <div className="mb-8 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600">
                Administration
              </p>

              <h1 className="mt-2 text-3xl font-extrabold text-[#173b2c] sm:text-5xl">
                Admin Dashboard
              </h1>

              <p className="mt-3 max-w-xl text-sm text-gray-500 sm:text-base">
                Manage your products, orders, customers and store activity.
              </p>

            </div>

            <button
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-green-600
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-green-600/20
                transition
                hover:-translate-y-1
                hover:bg-green-700
              "
            >
              <FiPlus size={18} />
              Add Product
            </button>

          </div>

        </Reveal>


        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">

          {stats.map((stat, index) => {

            const Icon = stat.icon;

            return (
              <Reveal
                key={stat.title}
                delay={index * 100}
              >

                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">

                  <div className="flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-700 sm:h-12 sm:w-12">
                      <Icon size={21} />
                    </div>

                  </div>

                  <p className="mt-5 text-xs font-medium text-gray-500 sm:text-sm">
                    {stat.title}
                  </p>

                  <p className="mt-1 text-2xl font-extrabold text-[#173b2c] sm:text-3xl">
                    {stat.value}
                  </p>

                </div>

              </Reveal>
            );
          })}

        </div>


        <Reveal delay={300}>

          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm sm:mt-10 sm:rounded-3xl">

            <div className="flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">

              <div>

                <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
                  Inventory
                </p>

                <h2 className="mt-1 text-2xl font-bold text-[#173b2c]">
                  Products
                </h2>

              </div>

              <button
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-green-600
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-green-700
                  transition
                  hover:bg-green-50
                "
              >
                <FiPlus size={16} />
                Add Product
              </button>

            </div>

            <div className="divide-y divide-gray-100 md:hidden">

              {products.map((product) => (

                <div
                  key={product.id}
                  className="p-5"
                >

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <h3 className="font-bold text-gray-800">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-xs text-green-600">
                        {product.category}
                      </p>

                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        product.stock > 10
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {product.stock} in stock
                    </span>

                  </div>

                  <div className="mt-4 flex items-center justify-between">

                    <p className="font-bold text-green-700">
                      ₹{product.price}
                    </p>

                    <div className="flex gap-2">

                      <button
                        className="rounded-full bg-green-50 p-2 text-green-700 transition hover:bg-green-100"
                        aria-label={`Edit ${product.name}`}
                      >
                        <FiEdit2 size={16} />
                      </button>

                      <button
                        className="rounded-full bg-red-50 p-2 text-red-500 transition hover:bg-red-100"
                        aria-label={`Delete ${product.name}`}
                      >
                        <FiTrash2 size={16} />
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>



            <div className="hidden overflow-x-auto md:block">

              <table className="w-full">

                <thead className="bg-[#f5faf6]">

                  <tr>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Product
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Category
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Price
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Stock
                    </th>

                    <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Actions
                    </th>

                  </tr>

                </thead>

                <tbody className="divide-y divide-gray-100">

                  {products.map((product) => (

                    <tr
                      key={product.id}
                      className="transition hover:bg-[#f8fcf9]"
                    >

                      <td className="px-6 py-5 font-semibold text-gray-800">
                        {product.name}
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-500">
                        {product.category}
                      </td>

                      <td className="px-6 py-5 font-semibold text-green-700">
                        ₹{product.price}
                      </td>

                      <td className="px-6 py-5">

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            product.stock > 10
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {product.stock} in stock
                        </span>

                      </td>

                      <td className="px-6 py-5">

                        <div className="flex justify-end gap-2">

                          <button
                            className="rounded-full bg-green-50 p-2 text-green-700 transition hover:bg-green-100"
                            aria-label={`Edit ${product.name}`}
                          >
                            <FiEdit2 size={16} />
                          </button>

                          <button
                            className="rounded-full bg-red-50 p-2 text-red-500 transition hover:bg-red-100"
                            aria-label={`Delete ${product.name}`}
                          >
                            <FiTrash2 size={16} />
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </Reveal>



        <Reveal delay={400}>

          <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:mt-10 sm:rounded-3xl sm:p-7">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
                Activity
              </p>

              <h2 className="mt-1 text-2xl font-bold text-[#173b2c]">
                Recent Orders
              </h2>

            </div>


            <div className="mt-7 flex min-h-40 items-center justify-center rounded-2xl bg-[#f5faf6]">

              <div className="text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <FiShoppingBag size={24} />
                </div>

                <p className="mt-4 font-semibold text-gray-700">
                  No orders yet
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  New customer orders will appear here.
                </p>

              </div>

            </div>

          </div>

        </Reveal>

      </div>

    </section>
  );
}

export default Admin;