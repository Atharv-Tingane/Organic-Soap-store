function CategoryCard({ image, title }) {
  return (
    <div className="group mx-auto w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      <div className="relative aspect-5/4 overflow-hidden">

        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
        />


        <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent opacity-70 transition duration-500 group-hover:opacity-85" />



        <div className="absolute inset-x-0 bottom-0 p-5">

          <h3 className="text-lg font-bold text-white">
            {title}
          </h3>

          <p className="mt-1.5 flex items-center gap-2 text-sm font-medium text-white/80 transition-all duration-300 group-hover:gap-3">
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