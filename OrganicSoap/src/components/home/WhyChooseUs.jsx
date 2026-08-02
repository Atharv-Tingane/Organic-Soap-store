import {
  FiTruck,
  FiHeart,
  FiShield,
  FiAward,
} from "react-icons/fi";

import FeatureCard from "./FeatureCard";

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
    <section className="bg-[#f8faf8] py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-14 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Nature's Best for Your Skin
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            We combine nature, quality, and sustainability to create products
            that care for your skin and the environment.
          </p>

        </div>

        {/* Features */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;