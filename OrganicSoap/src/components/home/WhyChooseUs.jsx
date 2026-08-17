import {
  FiTruck,
  FiHeart,
  FiShield,
  FiAward,
} from "react-icons/fi";

import FeatureCard from "./FeatureCard";
import Reveal from "../common/Reveal";

const features = [
  {
    id: 1,
    icon: <FiAward />,
    title: "100% Natural",
    description:
      "Made with carefully selected natural ingredients that are gentle on your skin.",
  },
  {
    id: 2,
    icon: <FiTruck />,
    title: "Free Delivery",
    description:
      "Fast and reliable delivery on every order across the country.",
  },
  {
    id: 3,
    icon: <FiShield />,
    title: "Safe Ingredients",
    description:
      "Free from harmful chemicals, parabens, and artificial fragrances.",
  },
  {
    id: 4,
    icon: <FiHeart />,
    title: "Handcrafted",
    description:
      "Every soap is handmade with care to ensure premium quality.",
  },
];

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#f4fbf5] via-[#f8faf8] to-[#f2faf4] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">

      {/* Background Glow */}

     <div className="pointer-events-none absolute -left-40 top-1/4 h-72 w-72 rounded-full bg-green-200/20 blur-3xl sm:h-96 sm:w-96" />

<div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-emerald-200/20 blur-3xl sm:h-96 sm:w-96" />


      <div className="relative mx-auto max-w-7xl">


        {/* ================= HEADING ================= */}
    <div className="mb-8 text-center sm:mb-10">

          <Reveal>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-green-600 sm:text-sm sm:tracking-[0.3em]">
              Why Choose Us
            </p>

          </Reveal>


          <Reveal delay={120}>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl md:text-5xl">
              Nature's Best for Your Skin
            </h2>

          </Reveal>


          <Reveal delay={240}>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
              We combine nature, quality, and sustainability to create products
              that care for your skin and the environment.
            </p>

          </Reveal>

        </div>


        {/* ================= FEATURES ================= */}

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-4 lg:gap-8">

          {features.map((feature, index) => (

            <Reveal
              key={feature.id}
              delay={index * 120}
            >
              <FeatureCard {...feature} />
            </Reveal>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;