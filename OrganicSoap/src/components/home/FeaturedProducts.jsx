import ProductCard from "../products/ProductCard";
import { useProducts } from "../../context/ProductsContext";
import Reveal from "../common/Reveal";

function FeaturedProducts() {
  const { products, loading } = useProducts();
  return (
   <section className="relative overflow-hidden bg-linear-to-b from-[#f2faf4] via-[#f8fbf8] to-[#f7fbf8] px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16">

      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-green-200/20 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-emerald-200/20 blur-3xl sm:h-96 sm:w-96" />


      <div className="relative mx-auto max-w-7xl">


        <div className="mb-10 text-center sm:mb-14">

          <Reveal>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-green-600 sm:text-sm sm:tracking-[0.3em]">
              The Collection
            </p>

          </Reveal>


          <Reveal delay={120}>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl md:text-5xl">
              Made for your ritual.
            </h2>

          </Reveal>


          <Reveal delay={240}>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
              A selection of our most-loved everyday essentials,
              thoughtfully crafted with nature in mind.
            </p>

          </Reveal>

        </div>


        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-7 lg:grid-cols-4 lg:gap-8">

          {!loading && products.slice(0, 4).map((product, index) => (

            <Reveal
              key={product.id}
              delay={index * 120}
            >
              <ProductCard product={product} />
            </Reveal>

          ))}

        </div>


      </div>

    </section>
  );
}

export default FeaturedProducts;
