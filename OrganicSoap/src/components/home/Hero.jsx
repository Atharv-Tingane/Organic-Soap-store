// import { Link } from "react-router-dom";
// import heroBanner from "../../assets/images/herobanner.png";

// function Hero() {
//   return (
//     <section className="relative min-h-[calc(100vh-100px)] overflow-hidden bg-[#f4fbf5]">

//       <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-green-300/25 blur-3xl" />

//       <div className="pointer-events-none absolute -bottom-40 -right-40 h-152 w-152 rounded-full bg-emerald-300/25 blur-3xl" />

//       <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-200/20 blur-3xl sm:h-112 sm:w-md" />


//       <div className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none text-[15rem] font-black uppercase leading-none tracking-[-0.08em] text-green-900/[0.035] xl:block">
//         NATURAL
//       </div>


//       <div className="pointer-events-none absolute right-[7%] top-[12%] hidden h-152 w-152 rounded-full border border-green-700/10 xl:block" />

//       <div className="pointer-events-none absolute right-[11%] top-[17%] hidden h-120 w-120 rounded-full border border-green-700/10 xl:block" />

//       <div className="pointer-events-none absolute right-[15%] top-[22%] hidden h-88 w-88 rounded-full border border-green-700/10 xl:block" />


//       <div className="mx-auto flex min-h-[calc(100vh-100px)] max-w-7xl items-center px-4 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">

//         <div className="relative grid w-full items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">


//           <div className="relative z-30 text-center lg:text-left">

//             <div className="animate-[fade-up_0.8s_ease-out_both] flex items-center justify-center gap-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-green-700 sm:text-[10px] lg:justify-start">

//               <span className="h-px w-8 bg-green-500 sm:w-10" />

//               Organic skincare

//             </div>


//             <h1 className="animate-[fade-up_0.9s_ease-out_both] mt-6 text-[3.4rem] font-extrabold leading-[0.9] tracking-[-0.055em] text-[#173b2c] sm:text-[5rem] lg:text-[6rem] xl:text-[7.2rem]">

//               Skin

//               <br />

//               <span className="relative inline-block text-green-600">

//                 care.

//                 <span className="absolute -bottom-1 left-1/2 h-1.5 w-[75%] -translate-x-1/2 rounded-full bg-green-300/40 blur-sm sm:-bottom-2 sm:h-2" />

//               </span>

//               <br />

//               <span className="font-medium italic text-[#49633f]">
//                 naturally.
//               </span>

//             </h1>


//             {/* Description */}

//             <p className="animate-[fade-up_0.8s_ease-out_both] mx-auto mt-7 max-w-sm text-sm leading-7 text-gray-600 [animation-delay:300ms] sm:mt-8 sm:text-base sm:leading-8 lg:mx-0">

//               Handcrafted skincare created from carefully
//               selected natural ingredients for simple,
//               everyday rituals.

//             </p>


//             {/* CTA */}

//             <div className="animate-[fade-up_0.8s_ease-out_both] mt-7 [animation-delay:450ms] sm:mt-8">

//               <Link
//                 to="/shop"
//                 className="group inline-flex items-center gap-3 rounded-full bg-[#173b2c] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-green-900/20 transition-all duration-500 hover:-translate-y-1 hover:bg-green-700 hover:shadow-2xl sm:gap-4 sm:px-7 sm:py-4"
//               >

//                 Explore Collection

//                 <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-500 group-hover:translate-x-1 group-hover:bg-white/20 sm:h-8 sm:w-8">
//                   →
//                 </span>

//               </Link>

//             </div>


//             {/* Supporting Information */}

//             <div className="animate-[fade-up_0.8s_ease-out_both] mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[9px] font-medium uppercase tracking-[0.18em] text-gray-400 [animation-delay:600ms] sm:mt-9 sm:gap-x-5 sm:text-[10px] sm:tracking-[0.2em] lg:justify-start">

//               <span>Handcrafted</span>

//               <span className="h-1 w-1 rounded-full bg-green-500" />

//               <span>Plant Based</span>

//               <span className="hidden h-1 w-1 rounded-full bg-green-500 sm:block" />

//               <span>Everyday Care</span>

//             </div>

//           </div>


//           {/* ================= RIGHT IMAGE ================= */}

//           <div className="relative z-20 flex items-center justify-center lg:mt-0">

//             {/* Glow */}

//             <div className="animate-[scale-in_1.1s_ease-out_both] absolute h-72 w-72 rounded-full bg-linear-to-br from-green-200/70 via-emerald-100/40 to-transparent blur-xl sm:h-96 sm:w-96 lg:h-152 lg:w-152" />


//             {/* Circle */}

//             <div className="animate-[scale-in_1s_ease-out_200ms_both] absolute h-64 w-64 rounded-full border border-green-600/10 sm:h-88 sm:w-88 lg:h-136 lg:w-136" />


//             {/* Image */}

//             <div className="animate-[fade-right_1.1s_cubic-bezier(0.22,1,0.36,1)_both] relative w-[92%] max-w-xl [animation-delay:150ms] sm:w-[88%] lg:max-w-2xl">

//               <div className="absolute -inset-5 rounded-[2.5rem] bg-white/30 blur-2xl sm:-inset-8 sm:rounded-[4rem]" />

//               <img
//                 src={heroBanner}
//                 alt="Organic Soap Collection"
//                 className="relative w-full rounded-4xl shadow-[0_25px_60px_rgba(23,59,44,0.16)] transition-all duration-700 hover:scale-[1.025] hover:-rotate-1 sm:rounded-[3rem] sm:shadow-[0_35px_80px_rgba(23,59,44,0.18)]"
//               />

//             </div>


//             {/* Crafted With Card */}

//             <div className="animate-[fade-up_0.8s_ease-out_800ms_both] absolute -bottom-2 left-0 z-30 rounded-xl border border-white/70 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-xl sm:bottom-4 sm:left-2 sm:rounded-2xl sm:px-5 sm:py-4 lg:-left-6 lg:bottom-8">

//               <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-green-700 sm:text-[9px] sm:tracking-[0.25em]">
//                 Crafted with
//               </p>

//               <p className="mt-1 text-xs font-semibold text-[#173b2c] sm:text-sm">
//                 Nature's finest
//               </p>

//             </div>


//             {/* Vertical Text */}

//             <div className="animate-[fade-down_0.8s_ease-out_700ms_both] absolute -right-4 top-1/2 hidden -translate-y-1/2 rotate-90 text-[9px] font-semibold uppercase tracking-[0.45em] text-green-700/50 xl:block">

//               PURE • SIMPLE • NATURAL

//             </div>


//             {/* Decorative Dot */}

//             <div className="animate-[scale-in_0.6s_ease-out_900ms_both] absolute -bottom-1 right-2 h-3 w-3 rounded-full bg-green-600 shadow-lg shadow-green-600/30 sm:right-4 sm:h-4 sm:w-4 lg:right-8" />

//           </div>

//         </div>

//       </div>


//       {/* ================= BOTTOM BRAND LINE ================= */}

//       <div className="absolute bottom-0 left-0 hidden w-full border-t border-green-900/10 lg:block">

//         <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4 text-[9px] font-semibold uppercase tracking-[0.3em] text-gray-400">

//           <span>OrganicSoap</span>

//           <span>Made with nature in mind</span>

//           <span>Explore the collection →</span>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Hero;

import { Link } from "react-router-dom";
import heroBanner from "../../assets/images/herobanner.png";

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-100px)] overflow-hidden bg-[#f7faf5]">

      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#b8d8bd]/25 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-152 w-152 rounded-full bg-[#a8cdb3]/25 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d7e6ce]/35 blur-3xl sm:h-112 sm:w-md" />


      <div className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none text-[15rem] font-black uppercase leading-none tracking-[-0.08em] text-green-900/[0.035] xl:block">
        NATURAL
      </div>

      <div className="pointer-events-none absolute right-[7%] top-[12%] hidden h-152 w-152 rounded-full border border-green-700/10 xl:block" />

      <div className="pointer-events-none absolute right-[11%] top-[17%] hidden h-120 w-120 rounded-full border border-green-700/10 xl:block" />

      <div className="pointer-events-none absolute right-[15%] top-[22%] hidden h-88 w-88 rounded-full border border-green-700/10 xl:block" />


      <div className="mx-auto flex min-h-[calc(100vh-100px)] max-w-7xl items-center px-4 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">

        <div className="relative grid w-full items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">


          <div className="relative z-30 text-center lg:text-left">

            <div className="animate-[fade-up_0.8s_ease-out_both] flex items-center justify-center gap-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-green-700 sm:text-[10px] lg:justify-start">

              <span className="h-px w-8 bg-green-500 sm:w-10" />

              Organic skincare

            </div>


            <h1 className="animate-[fade-up_0.9s_ease-out_both] mt-6 text-[3.4rem] font-extrabold leading-[0.9] tracking-[-0.055em] text-[#173b2c] sm:text-[5rem] lg:text-[6rem] xl:text-[7.2rem]">

              Skin

              <br />

              <span className="relative inline-block text-green-600">

                care.

                <span className="absolute -bottom-1 left-1/2 h-1.5 w-[75%] -translate-x-1/2 rounded-full bg-green-300/40 blur-sm sm:-bottom-2 sm:h-2" />

              </span>

              <br />

              <span className="font-medium italic text-[#49633f]">
                naturally.
              </span>

            </h1>

            <p className="animate-[fade-up_0.8s_ease-out_both] mx-auto mt-7 max-w-sm text-sm leading-7 text-gray-600 [animation-delay:300ms] sm:mt-8 sm:text-base sm:leading-8 lg:mx-0">

              Handcrafted skincare created from carefully
              selected natural ingredients for simple,
              everyday rituals.

            </p>


            <div className="animate-[fade-up_0.8s_ease-out_both] mt-7 [animation-delay:450ms] sm:mt-8">

              <Link
                to="/shop"
                className="group inline-flex items-center gap-3 rounded-full bg-[#173b2c] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-green-900/20 transition-all duration-500 hover:-translate-y-1 hover:bg-green-700 hover:shadow-2xl sm:gap-4 sm:px-7 sm:py-4"
              >

                Explore Collection

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-500 group-hover:translate-x-1 group-hover:bg-white/20 sm:h-8 sm:w-8">
                  →
                </span>

              </Link>

            </div>


            <div className="animate-[fade-up_0.8s_ease-out_both] mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[9px] font-medium uppercase tracking-[0.18em] text-gray-400 [animation-delay:600ms] sm:mt-9 sm:gap-x-5 sm:text-[10px] sm:tracking-[0.2em] lg:justify-start">

              <span>Handcrafted</span>

              <span className="h-1 w-1 rounded-full bg-green-500" />

              <span>Plant Based</span>

              <span className="hidden h-1 w-1 rounded-full bg-green-500 sm:block" />

              <span>Everyday Care</span>

            </div>

          </div>

          <div className="relative z-20 flex items-center justify-center lg:mt-0">

        

            <div className="animate-[scale-in_1.1s_ease-out_both] absolute h-72 w-72 rounded-full bg-linear-to-br from-[#d4e5d2]/60 via-[#edf3e8]/50 to-transparent blur-xl sm:h-96 sm:w-96 lg:h-152 lg:w-152" />

            <div className="animate-[scale-in_1s_ease-out_200ms_both] absolute h-64 w-64 rounded-full border border-green-600/10 sm:h-88 sm:w-88 lg:h-136 lg:w-136" />


            <div className="animate-[fade-right_1.1s_cubic-bezier(0.22,1,0.36,1)_both] relative w-[92%] max-w-xl [animation-delay:150ms] sm:w-[88%] lg:max-w-2xl">

              <div className="absolute -inset-5 rounded-[2.5rem] bg-white/30 blur-2xl sm:-inset-8 sm:rounded-[4rem]" />

              <img
                src={heroBanner}
                alt="Organic Soap Collection"
                className="relative w-full rounded-4xl shadow-[0_25px_60px_rgba(23,59,44,0.16)] transition-all duration-700 hover:scale-[1.025] hover:-rotate-1 sm:rounded-[3rem] sm:shadow-[0_35px_80px_rgba(23,59,44,0.18)]"
              />

            </div>


            <div className="animate-[fade-up_0.8s_ease-out_800ms_both] absolute -bottom-2 left-0 z-30 rounded-xl border border-white/70 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-xl sm:bottom-4 sm:left-2 sm:rounded-2xl sm:px-5 sm:py-4 lg:-left-6 lg:bottom-8">

              <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-green-700 sm:text-[9px] sm:tracking-[0.25em]">
                Crafted with
              </p>

              <p className="mt-1 text-xs font-semibold text-[#173b2c] sm:text-sm">
                Nature's finest
              </p>

            </div>


            <div className="animate-[fade-down_0.8s_ease-out_700ms_both] absolute -right-4 top-1/2 hidden -translate-y-1/2 rotate-90 text-[9px] font-semibold uppercase tracking-[0.45em] text-green-700/50 xl:block">

              PURE • SIMPLE • NATURAL

            </div>

            <div className="animate-[scale-in_0.6s_ease-out_900ms_both] absolute -bottom-1 right-2 h-3 w-3 rounded-full bg-green-600 shadow-lg shadow-green-600/30 sm:right-4 sm:h-4 sm:w-4 lg:right-8" />

          </div>

        </div>

      </div>



      <div className="absolute bottom-0 left-0 hidden w-full border-t border-green-900/10 lg:block">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4 text-[9px] font-semibold uppercase tracking-[0.3em] text-gray-400">

          <span>OrganicSoap</span>

          <span>Made with nature in mind</span>

          <span>Explore the collection →</span>

        </div>

      </div>

    </section>
  );
}

export default Hero;