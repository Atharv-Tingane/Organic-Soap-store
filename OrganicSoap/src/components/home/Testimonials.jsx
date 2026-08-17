import TestimonialCard from "./TestimonialCard";
import Reveal from "../common/Reveal";

const testimonials = [
  {
    id: 1,
    name: "Vinay Gunte",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 4,
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
    name: "Vivek",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    review:
      "Packaging was beautiful and delivery was quick. Definitely ordering again!",
  },
];

function Testimonials() {
  return (
<section className="relative overflow-hidden bg-[#f8faf8] px-4 py-14 sm:px-6 sm:py-16 lg:py-20">


<div className="pointer-events-none absolute -left-40 top-1/4 h-72 w-72 rounded-full bg-green-200/20 blur-3xl sm:h-96 sm:w-96" />

<div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-emerald-200/20 blur-3xl sm:h-96 sm:w-96" />


      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADING ================= */}

        <div className="mb-9 text-center sm:mb-12">

          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-green-600 sm:text-sm sm:tracking-[0.3em]">
              Testimonials
            </p>
          </Reveal>


          <Reveal delay={120}>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl md:text-5xl">
              Loved by Our Customers
            </h2>
          </Reveal>


          <Reveal delay={240}>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
              See what our customers have to say about their experience with
              OrganicSoap.
            </p>
          </Reveal>

        </div>


        {/* ================= TESTIMONIALS ================= */}

        <div className="grid gap-5 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">

          {testimonials.map((testimonial, index) => (

            <Reveal
              key={testimonial.id}
              delay={index * 120}
            >
              <TestimonialCard
                image={testimonial.image}
                name={testimonial.name}
                rating={testimonial.rating}
                review={testimonial.review}
              />
            </Reveal>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;