// import ProductCard from "../products/ProductCard";
// import heroBanner from "../../assets/images/herobanner.png";
// import products from "../../data/products";
// import Reveal from "../common/Reveal";


// function FeaturedProducts() {
//   return (
//     // <section className="bg-white py-20">
//     <section className="bg-[#f4fbf5] ">
//       <div className="mx-auto max-w-7xl px-6">
        
     

// <div className="mb-14 text-center">

//   <Reveal>
//     <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
//       Featured Products
//     </p>
//   </Reveal>

//   <Reveal delay={120}>
//     <h2 className="mt-3 text-4xl font-bold text-gray-800 sm:text-5xl">
//       Our Best Sellers
//     </h2>
//   </Reveal>

//   <Reveal delay={240}>
//     <p className="mx-auto mt-4 max-w-2xl text-gray-500">
//       Discover our most loved handcrafted soaps made with natural
//       ingredients for healthy and glowing skin.
//     </p>
//   </Reveal>

// </div>

       
// <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

//   {products.slice(0, 4).map((product, index) => (
//     <Reveal key={product.id} delay={index * 150}>
//       <ProductCard product={product} />
//     </Reveal>
//   ))}

// </div>

//       </div>
//     </section>
//   );
// }

// export default FeaturedProducts;

// import ProductCard from "../products/ProductCard";
// import products from "../../data/products";
// import Reveal from "../common/Reveal";

// function FeaturedProducts() {
//   return (
//     <section className="relative overflow-hidden bg-white px-6 py-24">

//       {/* Soft background atmosphere */}

//       <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-green-100/30 blur-3xl" />

//       <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-emerald-100/20 blur-3xl" />


//       <div className="relative mx-auto max-w-7xl">


//         {/* Section heading */}

//         <div className="mb-14 text-center">

//           <Reveal>
//             <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
//               The Collection
//             </p>
//           </Reveal>


//           <Reveal delay={120}>
//             <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
//               Made for your ritual.
//             </h2>
//           </Reveal>


//           <Reveal delay={240}>
//             <p className="mx-auto mt-4 max-w-xl text-gray-500">
//               A selection of our most-loved everyday essentials,
//               thoughtfully crafted with nature in mind.
//             </p>
//           </Reveal>

//         </div>


//         {/* Products */}

//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

//           {products.slice(0, 4).map((product, index) => (
//             <Reveal key={product.id} delay={index * 120}>

//               <ProductCard product={product} />

//             </Reveal>
//           ))}

//         </div>


//       </div>

//     </section>
//   );
// }

// export default FeaturedProducts;

import ProductCard from "../products/ProductCard";
import products from "../../data/products";
import Reveal from "../common/Reveal";

function FeaturedProducts() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#f2faf4] via-[#f8fbf8] to-[#f4fbf5] px-6 pt-14 pb-24">


      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-green-200/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-emerald-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">


        <div className="mb-10 text-center">

          <Reveal>
            <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
              The Collection
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
              Made for your ritual.
            </h2>
          </Reveal>

          <Reveal delay={240}>
            <p className="mx-auto mt-4 max-w-xl text-gray-500">
              A selection of our most-loved everyday essentials,
              thoughtfully crafted with nature in mind.
            </p>
          </Reveal>

        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {products.slice(0, 4).map((product, index) => (
            <Reveal key={product.id} delay={index * 120}>
              <ProductCard product={product} />
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;