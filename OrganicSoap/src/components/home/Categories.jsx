import CategoryCard from "./CategoryCard";
import Reveal from "../common/Reveal";

import soap from "../../assets/images/soap.png";
import facepack from "../../assets/images/facepack.png";
import herbal from "../../assets/images/herbal.png";

function Categories() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#f4fbf5] via-[#f8faf8] to-[#f2faf4] px-4 py-16 sm:px-6 sm:py-20">

      <div className="pointer-events-none absolute -left-40 top-0 h-72 w-72 rounded-full bg-green-200/20 blur-3xl sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-emerald-200/20 blur-3xl sm:h-96 sm:w-96" />


      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 text-center sm:mb-14">

          <Reveal>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-green-600 sm:text-sm sm:tracking-[0.3em]">
              Categories
            </p>

          </Reveal>
          <Reveal delay={120}>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl md:text-5xl">
              Shop by Category
            </h2>

          </Reveal>

          <Reveal delay={240}>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
              Discover our handcrafted skincare collection made with natural
              ingredients for everyday care.
            </p>

          </Reveal>

        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">

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