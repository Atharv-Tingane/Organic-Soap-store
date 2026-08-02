function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-3xl bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-5 flex justify-center text-5xl">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-gray-800">
        {title}
      </h3>

      <p className="mt-3 text-gray-500 leading-7">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;