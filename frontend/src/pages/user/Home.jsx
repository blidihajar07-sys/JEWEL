import { Link } from "react-router-dom";

function Home() {
  return (
    //1
    // <div className="text-center space-y-6">
    //   <h1 className="text-4xl font-bold text-[#384152]">
    //     Welcome to Serene Spark
    //   </h1>

    //   <p className="text-gray-600 max-w-xl mx-auto">
    //     Elegant jewelry crafted with simplicity and modern design.
    //   </p>

    //   <Link to="/products">
    //     <button className="px-6 py-3 bg-[#D4B06A] text-white rounded-full hover:opacity-90 transition">
    //     Shop Now
    //   </button>
    //   </Link>
    // </div>



    //2
    <div className="min-h-screen">
      
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#DCEAF4] via-[#F3DDE5] to-[#FAF7F2] py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-[#384152]">
          Timeless Jewelry Collection
        </h1>
        
        <p className="mt-3 text-[#384152]/70">
          Soft elegance inspired by modern femininity
        </p>
        
        <Link to="/products">
          <button className="mt-6 bg-[#D4B06A] text-white px-6 py-2 rounded-xl hover:opacity-90">
            Shop Now
          </button>
        </Link>
      </section>
      

      {/* PRODUCTS GRID */}
      <section className="px-6 py-10">
        <h2 className="text-xl font-semibold text-[#384152] mb-6">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* your ProductCard components here */}
        </div>
      </section>

    </div>


  //3
  // <div className="min-h-screen bg-[#FAF7F2]">
      
  //     {/* BLUE HERO SECTION */}
  //     <section className="bg-[#DCEAF4] py-20 px-6 text-center">
  //       <h1 className="text-5xl font-bold text-[#384152]">
  //         Discover Elegance
  //       </h1>

  //       <p className="mt-4 text-[#384152]/70">
  //         Jewelry designed for soft confidence
  //       </p>
  //     </section>

  //     {/* PINK FEATURE STRIP */}
  //     <section className="bg-[#F3DDE5] py-10 px-6 text-center">
  //       <h2 className="text-2xl font-semibold text-[#384152]">
  //         New Spring Collection
  //       </h2>

  //       <p className="text-[#384152]/70 mt-2">
  //         Light tones, golden details, soft textures
  //       </p>
  //     </section>

  //     {/* PRODUCTS */}
  //     <section className="px-6 py-10">
  //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  //         {/* ProductCard */}
  //         <Link to="/products">
  //         <button className="mt-6 bg-[#D4B06A] text-white px-6 py-2 rounded-xl hover:opacity-90">
  //           Shop Now
  //         </button>
  //       </Link>
  //       </div>
  //     </section>

  //   </div>

  //4
  // <div className="min-h-screen bg-gradient-to-br from-[#DCEAF4] via-[#F3DDE5] to-[#FAF7F2]">

  //     {/* HERO GLASS CARD */}
  //     <section className="flex justify-center items-center py-20 px-6">
  //       <div className="backdrop-blur-md bg-white/40 border border-white rounded-2xl p-10 text-center shadow-lg max-w-2xl">

  //         <h1 className="text-4xl font-bold text-[#384152]">
  //           Elegant Jewelry Store
  //         </h1>

  //         <p className="mt-3 text-[#384152]/70">
  //           Soft luxury meets modern design
  //         </p>     

  //         <Link to="/products">
  //           <button className="mt-6 bg-[#D4B06A] text-white px-6 py-2 rounded-xl hover:scale-105 transition">
  //             Explore Collection
  //           </button>
  //         </Link>

  //       </div>
  //     </section>

  //     {/* PRODUCTS */}
  //     <section className="px-6 pb-16">
  //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  //         {/* ProductCard */}
  //       </div>
  //     </section>

  //   </div>


  //5
  //  <div className="bg-[#FAF7F2] min-h-screen">

  //     {/* HERO LEFT + IMAGE RIGHT STYLE */}
  //     <section className="grid md:grid-cols-2 gap-6 p-10 items-center">

  //       <div>
  //         <h1 className="text-5xl font-bold text-[#384152]">
  //           Soft Luxury Jewelry
  //         </h1>

  //         <p className="mt-4 text-[#384152]/70">
  //           Pink softness, blue calm, golden elegance.
  //         </p>

  //         <Link to="/products">
  //           <button className="mt-6 bg-[#D4B06A] text-white px-6 py-2 rounded-xl">
  //             Shop Now
  //           </button>
  //         </Link>
  //       </div>

  //       <div className="bg-gradient-to-br from-[#DCEAF4] to-[#F3DDE5] h-80 rounded-2xl"></div>

  //     </section>

  //     {/* FEATURE BANNER */}
  //     <section className="bg-[#DCEAF4] py-10 text-center">
  //       <h2 className="text-xl font-semibold text-[#384152]">
  //         Handcrafted pieces with meaning
  //       </h2>
  //     </section>

  //     {/* PRODUCTS */}
  //     <section className="px-10 py-10">
  //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  //         {/* ProductCard */}
  //       </div>
  //     </section>

  //   </div>
  );
}

export default Home;