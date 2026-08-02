import CategoryCard from "./CategoryCard";

import soap from "../../assets/images/soap.png";
import facepack from "../../assets/images/facepack.png";
import herbal from "../../assets/images/herbal.png";
import gift from "../../assets/images/gift.png";

function Categories() {
  return (
    // <section className="py-12 px-6 bg-[#f4fbf5]">
    // <section className="w-full bg-linear-to-br from-white via-green-50 to-green-100">
    <section className="bg-[#f4fbf5]">
    {/* //   <div className="max-w-7xl mx-auto">
  //   <section className="bg-[#f4fbf5]"> */}
   <div className="max-w-7xl mx-auto px-6 pt-12 pb-20">

        {/* Heading */}

        <div className="text-center mb-14">
          <p className="text-green-600 font-semibold uppercase tracking-widest">
            Categories
          </p>

          <h2 className="text-4xl font-bold text-gray-800 mt-3">
            Shop by Category
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover our handcrafted skincare collection made with natural
            ingredients for glowing and healthy skin.
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <CategoryCard image={soap} title="Organic Soaps" />

          <CategoryCard image={facepack} title="Face Packs" />

          <CategoryCard image={herbal} title="Herbal Care" />

          <CategoryCard image={gift} title="Gift Packs" />

        </div>

      </div>
    </section>
  );
}

export default Categories;