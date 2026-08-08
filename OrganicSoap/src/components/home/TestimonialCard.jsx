import { FiStar } from "react-icons/fi";import Reveal from "../common/Reveal";

function TestimonialCard({ image, name, review, rating }) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="flex items-center gap-4">

        <img
          src={image}
          alt={name}
          className="h-16 w-16 rounded-full object-cover"
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {name}
          </h3>

          <div className="mt-1 flex text-yellow-500">
            {[...Array(rating)].map((_, index) => (
              <FiStar
                key={index}
                className="fill-yellow-400"
              />
            ))}
          </div>
        </div>

      </div>

      <p className="mt-6 leading-7 text-gray-600">
        "{review}"
      </p>

    </div>
  );
}

export default TestimonialCard;