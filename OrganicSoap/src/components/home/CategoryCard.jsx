function CategoryCard({ image, title }) {
  return (
    <div
      className="
        group
        mx-auto
        w-full
        max-w-sm
        overflow-hidden
        rounded-3xl
        border
        border-white/60
        bg-white
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >

      <div className="relative aspect-5/4 overflow-hidden">

        <img
          src={image}
          alt={title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-110
          "
        />


        <div
          className="
            absolute
            inset-0
            bg-linear-to-t
            from-[#102c20]/80
            via-black/15
            to-transparent
            opacity-75
            transition-opacity
            duration-500
            group-hover:opacity-90
          "
        />


        <div
          className="
            pointer-events-none
            absolute
            -bottom-10
            left-1/2
            h-32
            w-32
            -translate-x-1/2
            rounded-full
            bg-green-400/20
            blur-3xl
            transition-all
            duration-500
            group-hover:bg-green-400/30
          "
        />

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">

          <h3 className="text-lg font-bold text-white sm:text-xl">
            {title}
          </h3>

          <p
            className="
              mt-1.5
              flex
              items-center
              gap-2
              text-sm
              font-medium
              text-white/80
              transition-all
              duration-300
              group-hover:gap-3
              group-hover:text-white
            "
          >
            Explore Collection

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </p>

        </div>

      </div>

    </div>
  );
}

export default CategoryCard;