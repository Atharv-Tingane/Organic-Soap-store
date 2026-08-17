function FeatureCard({ icon, title, description }) {
  return (
    <div
      className="
        group
        flex
        h-full
        min-h-65
        flex-col
        items-center
        justify-start
        rounded-3xl
        border
        border-white/80
        bg-linear-to-br
        from-white
        via-[#f8fcf8]
        to-[#eaf7ed]
        p-6
        text-center
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:from-[#fafffb]
        hover:to-[#e3f4e8]
        hover:shadow-xl
        sm:min-h-70
        sm:p-8
      "
    >

      {/* Icon */}

      <div
        className="
          mb-5
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-linear-to-br
          from-green-50
          to-green-100
          text-4xl
          text-green-700
          shadow-sm
          transition-all
          duration-300
          group-hover:scale-105
          group-hover:from-green-100
          group-hover:to-green-200
        "
      >
        {icon}
      </div>


      {/* Title */}

      <h3 className="text-lg font-bold text-[#173b2c] sm:text-xl">
        {title}
      </h3>


      {/* Description */}

      <p className="mt-3 max-w-xs text-sm leading-7 text-gray-500 sm:text-base">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;