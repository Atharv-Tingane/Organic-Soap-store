// import { Link } from "react-router-dom";
// import heroBanner from "../../assets/images/herobanner.png";

// function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-[#f4fbf5]">

//       {/* Background glow */}

//       <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-green-200/20 blur-3xl" />

//       <div className="pointer-events-none absolute -right-40 bottom-0 h-125 w-125 rounded-full bg-emerald-200/20 blur-3xl" />


//       <div className="mx-auto min-h-[calc(100vh-100px)] max-w-7xl px-6 py-14 lg:px-8 lg:py-16">

//         <div className="grid min-h-[calc(100vh-132px)] items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">


//           {/* LEFT CONTENT */}

//           <div className="relative z-10 text-center lg:text-left">

//             {/* Small brand label */}

//             <div className="animate-[fade-up_0.8s_ease-out_both] flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-green-700 lg:justify-start">

//               <span className="h-px w-8 bg-green-500" />

//               Organic skincare

//             </div>


//             {/* Main heading */}

//             <h1 className="animate-[fade-up_0.8s_ease-out_both] mt-7 text-5xl font-extrabold leading-[0.98] tracking-[-0.04em] text-[#173b2c] [animation-delay:150ms] sm:text-6xl lg:text-[5.5rem]">

//               Skin care,

//               <br />

//               <span className="text-green-600">
//                 naturally.
//               </span>

//             </h1>


//             {/* Description */}

//             <p className="animate-[fade-up_0.8s_ease-out_both] mx-auto mt-7 max-w-md text-base leading-8 text-gray-600 [animation-delay:300ms] lg:mx-0">

//               Thoughtfully handcrafted soaps made from
//               nature's finest ingredients — simple,
//               gentle, and made for everyday rituals.

//             </p>


//             {/* CTA */}

//             <div className="animate-[fade-up_0.8s_ease-out_both] mt-9 [animation-delay:450ms]">

//               <Link
//                 to="/shop"
//                 className="group inline-flex items-center gap-4 rounded-full bg-green-600 px-7 py-4 font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
//               >

//                 Explore Collection

//                 <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
//                   →
//                 </span>

//               </Link>

//             </div>


//             {/* Small supporting information */}

//             <div className="animate-[fade-up_0.8s_ease-out_both] mt-10 flex items-center justify-center gap-6 text-xs font-medium uppercase tracking-wider text-gray-400 [animation-delay:600ms] lg:justify-start">

//               <span>Handcrafted</span>

//               <span className="h-1 w-1 rounded-full bg-green-500" />

//               <span>Plant Based</span>

//               <span className="h-1 w-1 rounded-full bg-green-500" />

//               <span>Everyday Care</span>

//             </div>

//           </div>


//           {/* RIGHT IMAGE */}

//           <div className="relative flex items-center justify-center lg:h-full">


//             {/* Soft glow */}

//             <div className="absolute h-[70%] w-[70%] rounded-full bg-green-200/30 blur-3xl" />


//             {/* Vertical label */}

//             <div className="animate-[fade-down_0.8s_ease-out_both] absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 -rotate-90 text-[10px] font-semibold uppercase tracking-[0.4em] text-green-700/60 xl:block">

//               Pure • Simple • Natural

//             </div>


//             {/* Image */}

//             <div className="animate-[fade-right_1s_ease-out_both] relative w-full max-w-2xl [animation-delay:200ms]">

//               {/* Soft frame */}

//               <div className="absolute -inset-5 rounded-[2.5rem] border border-white/60 bg-white/20 backdrop-blur-sm" />

//               <div className="absolute -inset-2 rounded-[2.3rem] bg-green-100/20 blur-xl" />


//               <img
//                 src={heroBanner}
//                 alt="Organic Soap Collection"
//                 className="relative w-full rounded-[2.2rem] shadow-2xl transition duration-700 hover:scale-[1.015]"
//               />

//             </div>

//           </div>

//         </div>

//       </div>


//       {/* Bottom brand line */}

//       <div className="absolute bottom-0 left-0 hidden w-full border-t border-green-900/5 lg:block">

//         <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400">

//           <span>Organic Soap</span>

//           <span>Made with nature in mind</span>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Hero;

// import { Link } from "react-router-dom";
// import heroBanner from "../../assets/images/herobanner.png";

// function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-[#f4fbf5]">
//       <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-green-200/30 blur-3xl" />

//       <div className="pointer-events-none absolute -right-40 bottom-0 h-120 w-120 rounded-full bg-emerald-200/25 blur-3xl" />

//       <div className="pointer-events-none absolute left-1/2 top-1/2 h-120 w-120 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-100/20 blur-3xl" />


//       <div className="mx-auto min-h-[calc(100vh-100px)] max-w-7xl px-6 py-14 lg:px-8 lg:py-16">

//         <div className="grid min-h-[calc(100vh-132px)] items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">


//           <div className="relative z-10 text-center lg:text-left">


//             <div className="animate-[fade-up_0.8s_ease-out_both] flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-green-700 lg:justify-start">

//               <span className="h-px w-8 bg-green-500" />

//               Organic Skincare

//             </div>



//             <h1 className="animate-[fade-up_0.8s_ease-out_both] mt-7 text-5xl font-extrabold leading-[0.98] tracking-[-0.04em] text-[#173b2c] [animation-delay:150ms] sm:text-6xl lg:text-[5.5rem]">

//               Skin care,

//               <br />

//               <span className="italic font-medium text-green-600">
//                 naturally.
//               </span>

//             </h1>


//             <p className="animate-[fade-up_0.8s_ease-out_both] mx-auto mt-7 max-w-md text-base leading-8 text-gray-600 [animation-delay:300ms] lg:mx-0">

//               Thoughtfully handcrafted soaps made from
//               nature's finest ingredients — simple,
//               gentle, and made for everyday rituals.

//             </p>


//             <div className="animate-[fade-up_0.8s_ease-out_both] mt-9 [animation-delay:450ms]">

//               <Link
//                 to="/shop"
//                 className="group inline-flex items-center gap-4 rounded-full bg-green-600 px-7 py-4 font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
//               >

//                 Explore Collection

//                 <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
//                   →
//                 </span>

//               </Link>

//             </div>



//             <div className="animate-[fade-up_0.8s_ease-out_both] mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-medium uppercase tracking-[0.2em] text-gray-400 [animation-delay:600ms] lg:justify-start">

//               <span>Handcrafted</span>

//               <span className="h-1 w-1 rounded-full bg-green-500" />

//               <span>Plant Based</span>

//               <span className="h-1 w-1 rounded-full bg-green-500" />

//               <span>Everyday Care</span>

//             </div>

//           </div>


//           <div className="relative flex items-center justify-center lg:h-full">

//             <div className="absolute h-[70%] w-[70%] rounded-full bg-green-200/30 blur-3xl" />

//             <div className="animate-[fade-down_0.8s_ease-out_both] absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 -rotate-90 text-[10px] font-semibold uppercase tracking-[0.4em] text-green-700/50 xl:block">

//               Pure • Simple • Natural

//             </div>

//             <div className="animate-[fade-right_1s_ease-out_both] relative w-full max-w-2xl [animation-delay:200ms]">

//               <div className="absolute -inset-5 rounded-[2.5rem] border border-white/60 bg-white/20 backdrop-blur-sm" />

//               <div className="absolute -inset-2 rounded-[2.3rem] bg-green-100/20 blur-xl" />

//               <img
//                 src={heroBanner}
//                 alt="Organic Soap Collection"
//                 className="relative w-full rounded-[2.2rem] shadow-2xl transition duration-700 hover:scale-[1.015]"
//               />

//             </div>

//           </div>

//         </div>

//       </div>


//       <div className="absolute bottom-0 left-0 hidden w-full border-t border-green-900/10 lg:block">

//         <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4 text-[10px] font-medium uppercase tracking-[0.25em] text-gray-400">

//           <span>OrganicSoap</span>

//           <span>Made with nature in mind</span>

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
    <section className="relative min-h-[calc(100vh-100px)] overflow-hidden bg-[#f4fbf5]">


      <div className="pointer-events-none absolute -left-40 -top-40 h-128 w-lg rounded-full bg-green-300/25 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-152 w-152 rounded-full bg-emerald-300/25 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-112 w-md -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-200/20 blur-3xl" />


      <div className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none text-[15rem] font-black uppercase leading-none tracking-[-0.08em] text-green-900/[0.035] xl:block">
        NATURAL
      </div>



      <div className="pointer-events-none absolute right-[7%] top-[12%] hidden h-152 w-152 rounded-full border border-green-700/10 xl:block" />

      <div className="pointer-events-none absolute right-[11%] top-[17%] hidden h-120 w-120 rounded-full border border-green-700/10 xl:block" />

      <div className="pointer-events-none absolute right-[15%] top-[22%] hidden h-88 w-88 rounded-full border border-green-700/10 xl:block" />


      <div className="animate-[scale-in_1s_ease-out_1s_both] pointer-events-none absolute right-[6.5%] top-[45%] hidden h-3 w-3 rounded-full bg-green-600 shadow-lg shadow-green-600/30 xl:block" />


      <div className="mx-auto flex min-h-[calc(100vh-100px)] max-w-360 items-center px-6 py-12 sm:px-8 lg:px-12">

        <div className="relative grid w-full items-center lg:grid-cols-[0.8fr_1.2fr]">



          <div className="relative z-30 text-center lg:text-left">


            <div className="animate-[fade-up_0.8s_ease-out_both] flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-green-700 lg:justify-start">

              <span className="h-px w-10 bg-green-500" />

              Organic skincare

            </div>


            <h1 className="animate-[fade-up_0.9s_ease-out_both] mt-6 text-[4rem] font-extrabold leading-[0.88] tracking-[-0.06em] text-[#173b2c] sm:text-[5rem] lg:text-[6.5rem] xl:text-[7.2rem]">

              Skin

              <br />

              <span className="relative inline-block text-green-600">

                care.

                <span className="absolute -bottom-2 left-1/2 h-2 w-[75%] -translate-x-1/2 rounded-full bg-green-300/40 blur-sm" />

              </span>

              <br />

              <span className="font-medium italic text-[#49633f]">
                naturally.
              </span>

            </h1>


            <p className="animate-[fade-up_0.8s_ease-out_both] mx-auto mt-8 max-w-sm text-sm leading-7 text-gray-600 [animation-delay:300ms] lg:mx-0 lg:text-base">

              Handcrafted skincare created from carefully
              selected natural ingredients for simple,
              everyday rituals.

            </p>

            <div className="animate-[fade-up_0.8s_ease-out_both] mt-8 [animation-delay:450ms]">

              <Link
                to="/shop"
                className="group inline-flex items-center gap-4 rounded-full bg-[#173b2c] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-green-900/20 transition-all duration-500 hover:-translate-y-1 hover:bg-green-700 hover:shadow-2xl"
              >

                Explore Collection

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-500 group-hover:translate-x-1 group-hover:bg-white/20">
                  →
                </span>

              </Link>

            </div>



            <div className="animate-[fade-up_0.8s_ease-out_both] mt-9 flex items-center justify-center gap-4 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400 [animation-delay:600ms] lg:justify-start">

              <span>Handcrafted</span>

              <span className="h-1 w-1 rounded-full bg-green-500" />

              <span>Plant Based</span>

            </div>

          </div>


          <div className="relative z-20 mt-12 flex items-center justify-center lg:mt-0">


            <div className="animate-[scale-in_1.1s_ease-out_both] absolute h-104 w-104 rounded-full bg-linear-to-br from-green-200/70 via-emerald-100/40 to-transparent blur-[1px] sm:h-128 sm:w-lg lg:h-152 lg:w-152" />



            <div className="animate-[scale-in_1s_ease-out_200ms_both] absolute h-88 w-88 rounded-full border border-green-600/10 sm:h-112 sm:w-md lg:h-136 lg:w-136" />


            <div className="animate-[fade-right_1.1s_cubic-bezier(0.22,1,0.36,1)_both] relative w-[90%] max-w-2xl [animation-delay:150ms]">

              <div className="absolute -inset-8 rounded-[4rem] bg-white/30 blur-2xl" />

              <img
                src={heroBanner}
                alt="Organic Soap Collection"
                className="relative w-full rounded-[3rem] shadow-[0_35px_80px_rgba(23,59,44,0.18)] transition-all duration-700 hover:scale-[1.025] hover:-rotate-1"
              />

            </div>


            <div className="animate-[fade-up_0.8s_ease-out_800ms_both] absolute -left-2 bottom-2 z-30 hidden rounded-2xl border border-white/70 bg-white/80 px-5 py-4 shadow-xl backdrop-blur-xl sm:block lg:-left-6 lg:bottom-8">

              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-green-700">
                Crafted with
              </p>

              <p className="mt-1 text-sm font-semibold text-[#173b2c]">
                Nature's finest
              </p>

            </div>


            <div className="animate-[fade-down_0.8s_ease-out_700ms_both] absolute -right-4 top-1/2 hidden -translate-y-1/2 rotate-90 text-[9px] font-semibold uppercase tracking-[0.45em] text-green-700/50 xl:block">

              PURE • SIMPLE • NATURAL

            </div>


            <div className="animate-[scale-in_0.6s_ease-out_900ms_both] absolute -right-1 bottom-16 h-4 w-4 rounded-full bg-green-600 shadow-lg shadow-green-600/30 sm:right-4 lg:right-8" />

          </div>

        </div>

      </div>

      <div className="absolute bottom-0 left-0 hidden w-full border-t border-green-900/10 lg:block">

        <div className="mx-auto flex max-w-360 items-center justify-between px-12 py-4 text-[9px] font-semibold uppercase tracking-[0.3em] text-gray-400">

          <span>OrganicSoap</span>

          <span>Made with nature in mind</span>

          <span>Explore the collection →</span>

        </div>

      </div>

    </section>
  );
}

export default Hero;

