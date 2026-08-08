import CategoryCard from "./CategoryCard";
import Reveal from "../common/Reveal";

import soap from "../../assets/images/soap.png";
import facepack from "../../assets/images/facepack.png";
import herbal from "../../assets/images/herbal.png";

function Categories() {
  return (
    <section className="bg-[#f8faf8] px-6 py-20">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-14 text-center">

          <Reveal>
            <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
              Categories
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="mt-3 text-4xl font-bold text-gray-800 sm:text-5xl">
              Shop by Category
            </h2>
          </Reveal>

          <Reveal delay={240}>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Discover our handcrafted skincare collection made with natural
              ingredients for glowing and healthy skin.
            </p>
          </Reveal>

        </div>


        {/* Cards */}

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

          <Reveal delay={100}>
            <CategoryCard
              image={soap}
              title="Organic Soaps"
            />
          </Reveal>

          <Reveal delay={250}>
            <CategoryCard
              image={facepack}
              title="Face Packs"
            />
          </Reveal>

          <Reveal delay={400}>
            <CategoryCard
              image={herbal}
              title="Herbal Care"
            />
          </Reveal>

        </div>

      </div>

    </section>
  );
}

export default Categories;