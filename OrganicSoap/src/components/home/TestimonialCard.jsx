import { FiStar } from "react-icons/fi";

function TestimonialCard({ image, name, review, rating }) {
  return (
    <div
      className="
        group
        flex
        h-full
        min-h-62.5
        flex-col
        rounded-3xl
        border
        border-white/80
        bg-linear-to-br
        from-white
        via-[#f8fcf8]
        to-[#eaf7ed]
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:from-[#fafffb]
        hover:to-[#e3f4e8]
        hover:shadow-xl
        sm:min-h-67.5
        sm:p-8
      "
    >

      {/* Customer */}

      <div className="flex items-center gap-4">

        <img
          src={image}
          alt={name}
          className="
            h-14
            w-14
            shrink-0
            rounded-full
            object-cover
            ring-4
            ring-green-100/70
            sm:h-16
            sm:w-16
          "
        />


        <div className="min-w-0">

          <h3 className="truncate text-base font-semibold text-[#173b2c] sm:text-lg">
            {name}
          </h3>


          {/* Rating */}

          <div className="mt-1 flex gap-0.5 text-yellow-500">

            {[...Array(rating)].map((_, index) => (
              <FiStar
                key={index}
                size={15}
                className="fill-yellow-400 sm:h-4 sm:w-4"
              />
            ))}

          </div>

        </div>

      </div>


      {/* Review */}

      <p className="mt-6 flex-1 text-sm leading-7 text-gray-600 sm:text-base">
        "{review}"
      </p>


      {/* Small decorative element */}

      <div className="mt-5 h-1 w-10 rounded-full bg-green-500/40 transition-all duration-300 group-hover:w-16 group-hover:bg-green-500/60" />

    </div>
  );
}

export default TestimonialCard;