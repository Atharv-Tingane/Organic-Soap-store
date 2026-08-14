// import CategoryCard from "./CategoryCard";
// import Reveal from "../common/Reveal";

// import soap from "../../assets/images/soap.png";
// import facepack from "../../assets/images/facepack.png";
// import herbal from "../../assets/images/herbal.png";

// function Categories() {
//   return (
//     <section className="bg-[#f8faf8] px-6 py-20">

//       <div className="mx-auto max-w-7xl">


//         <div className="mb-14 text-center">

//           <Reveal>
//             <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
//               Categories
//             </p>
//           </Reveal>

//           <Reveal delay={120}>
//             <h2 className="mt-3 text-4xl font-bold text-gray-800 sm:text-5xl">
//               Shop by Category
//             </h2>
//           </Reveal>

//           <Reveal delay={240}>
//             <p className="mx-auto mt-4 max-w-2xl text-gray-500">
//               Discover our handcrafted skincare collection made with natural
//               ingredients for glowing and healthy skin.
//             </p>
//           </Reveal>


//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

//           <Reveal delay={100}>
//             <CategoryCard
//               image={soap}
//               title="Organic Soaps"
//             />
//           </Reveal>

//           <Reveal delay={250}>
//             <CategoryCard
//               image={facepack}
//               title="Face Packs"
//             />
//           </Reveal>

//           <Reveal delay={400}>
//             <CategoryCard
//               image={herbal}
//               title="Herbal Care"
//             />
//           </Reveal>

//         </div>

//       </div>
//       </div>

//     </section>
//   );
// }

// export default Categories;

// import CategoryCard from "./CategoryCard";
// import Reveal from "../common/Reveal";

// import soap from "../../assets/images/soap.png";
// import facepack from "../../assets/images/facepack.png";
// import herbal from "../../assets/images/herbal.png";

// function Categories() {
//   return (
//     <section className="relative overflow-hidden bg-linear-to-b from-[#f8fbf8] via-[#fafcf9] to-white px-6 py-20">

//       {/* Soft transition from Hero */}

//       <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-100/30 blur-3xl" />

//       <div className="mx-auto max-w-7xl">

//         {/* Section heading */}

//         <div className="relative z-10 mb-14 text-center">

//           <Reveal>
//             <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
//               Categories
//             </p>
//           </Reveal>

//           <Reveal delay={120}>
//             <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
//               Shop by Category
//             </h2>
//           </Reveal>

//           <Reveal delay={240}>
//             <p className="mx-auto mt-4 max-w-2xl text-gray-500">
//               Discover our handcrafted skincare collection made with natural
//               ingredients for everyday care.
//             </p>
//           </Reveal>

//         </div>


//         {/* Category cards */}

//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

//           <Reveal delay={100}>
//             <CategoryCard
//               image={soap}
//               title="Organic Soaps"
//             />
//           </Reveal>

//           <Reveal delay={250}>
//             <CategoryCard
//               image={facepack}
//               title="Face Packs"
//             />
//           </Reveal>

//           <Reveal delay={400}>
//             <CategoryCard
//               image={herbal}
//               title="Herbal Care"
//             />
//           </Reveal>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Categories;

import CategoryCard from "./CategoryCard";
import Reveal from "../common/Reveal";

import soap from "../../assets/images/soap.png";
import facepack from "../../assets/images/facepack.png";
import herbal from "../../assets/images/herbal.png";

function Categories() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#f4fbf5] via-[#f8faf8] to-[#f2faf4] px-6 pt-20 pb-10">

      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-green-200/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-emerald-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        <div className="mb-14 text-center">

          <Reveal>
            <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
              Categories
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
              Shop by Category
            </h2>
          </Reveal>

          <Reveal delay={240}>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Discover our handcrafted skincare collection made with natural
              ingredients for everyday care.
            </p>
          </Reveal>

        </div>


        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

          <Reveal delay={100}>
            <CategoryCard
              image={soap}
              title="Organic Soaps"
            />
          </Reveal>

          <Reveal delay={250}>
            <CategoryCard
              image={facepack}
              title="Face Packs"
            />
          </Reveal>

          <Reveal delay={400}>
            <CategoryCard
              image={herbal}
              title="Herbal Care"
            />
          </Reveal>

        </div>

      </div>
    </section>
  );
}

export default Categories;