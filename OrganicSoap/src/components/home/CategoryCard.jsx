function CategoryCard({ image, title }) {
  return (
    <div
      className="
      group
      rounded-3xl
      overflow-hidden
      bg-white/70
      backdrop-blur-lg
      border
      border-white/30
      shadow-md
      hover:shadow-2xl
      transition-all
      duration-300
      hover:-translate-y-2
      
      "
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
          w-full
          h-72
          object-cover
          transition-transform
          duration-500
          group-hover:scale-110
          "
        />
      </div>

      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default CategoryCard;