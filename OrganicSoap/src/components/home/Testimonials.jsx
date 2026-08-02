import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    review:
      "Absolutely loved the turmeric soap. My skin feels fresh and healthy after every use.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    review:
      "The face packs are amazing. Great quality and completely natural ingredients.",
  },
  {
    id: 3,
    name: "Ananya Patel",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    review:
      "Packaging was beautiful and delivery was quick. Definitely ordering again!",
  },
];

function Testimonials() {
  return (
   <section className="bg-[#f8faf8] pt-20 pb-10">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
            Testimonials
          </p>

          <h2 className="mt-3 text-5xl font-bold text-gray-900">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-500">
            Thousands of happy customers trust our handcrafted organic skincare
            products every day.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              image={testimonial.image}
              name={testimonial.name}
              rating={testimonial.rating}
              review={testimonial.review}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;