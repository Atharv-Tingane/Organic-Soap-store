import TestimonialCard from "./TestimonialCard";
import Reveal from "../common/Reveal";


const testimonials = [
  {
    id: 1,
    name: "Vinay Gunte",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 3,
    review:
      "Absolutely loved the turmeric soap. My skin feels fresh and healthy after every use.",
  },
  {
    id: 2,
    name: "Saksham Harne",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    review:
      "The face packs are amazing. Great quality and completely natural ingredients.",
  },
  {
    id: 3,
    name: "Raviraj",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    review:
      "Packaging was beautiful and delivery was quick. Definitely ordering again!",
  },
];

function Testimonials() {
  return (
   <section className="bg-[#f8faf8] pt-10 pb-10">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

  <Reveal>
    <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
      Testimonials
    </p>
  </Reveal>

  <Reveal delay={120}>
    <h2 className="mt-3 text-4xl font-bold text-gray-800 sm:text-5xl">
      Loved by Our Customers
    </h2>
  </Reveal>

  <Reveal delay={240}>
    <p className="mx-auto mt-4 max-w-2xl text-gray-500">
      See what our customers have to say about their experience with
      OrganicSoap.
    </p>
  </Reveal>

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