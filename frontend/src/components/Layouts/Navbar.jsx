import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ShoppingBag, ShoppingCart, User } from "lucide-react";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();


  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    //1
    // <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-[#f0e7d8]">
    //   <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    //     {/* LOGO */}
    //     <Link to="/" className="flex items-center gap-3">
    //       <img
    //         src="/images/logo3p.png"
    //         alt="Logo"
    //         className="h-25 w-25 object-contain"
    //       />
        
          

    //       <span className="text-[#D4B06A]">Serene</span> Spark
    //     </Link>
        


    //     {/* USER LINKS */}
    //     {(!user || user.role === "user") && (
    //       <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">

    //         <Link
    //           to="/"
    //           className="hover:text-[#D4B06A] transition"
    //         >
    //           Home
    //         </Link>

    //         <Link
    //           to="/products"
    //           className="hover:text-[#D4B06A] transition"
    //         >
    //           Products
    //         </Link>

    //         <Link
    //           to="/orders"
    //           className="hover:text-[#D4B06A] transition"
    //         >
    //           Orders
    //         </Link>

    //       </nav>
    //     )}

    //     {/* ADMIN LINKS */}
    //     {user?.role === "admin" && (
    //       <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">

    //         <Link
    //           to="/admin"
    //           className="hover:text-[#D4B06A] transition"
    //         >
    //           Dashboard
    //         </Link>

    //         <Link
    //           to="/admin/products"
    //           className="hover:text-[#D4B06A] transition"
    //         >
    //           Products
    //         </Link>

    //         <Link
    //           to="/admin/orders"
    //           className="hover:text-[#D4B06A] transition"
    //         >
    //           Orders
    //         </Link>

    //       </nav>
    //     )}

    //     {/* RIGHT SIDE */}
    //     <div className="flex items-center gap-4">

    //       {!user || user.role === "user" ? (
    //         <Link
    //           to="/cart"
    //           className="relative hover:text-[#D4B06A] transition"
    //         >
    //           <ShoppingCart size={22} />
    //         </Link>
    //       ) : null}

    //       <button
    //         onClick={logout}
    //         className="px-5 py-2 rounded-full bg-[#D4B06A] text-white text-sm hover:opacity-90 transition"
    //       >
    //         Logout
    //       </button>

    //     </div>

    //   </div>
    // </header>



    // 2
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#DCEAF4]/90 via-[#FAF7F2]/90 to-[#F3DDE5]/90 backdrop-blur-md border-b border-white/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to={user?.role === "admin" ? "/admin" : "/"} className="flex items-center gap-4">

          <img
          src="/images/logo3p.png"
          alt="Logo"
          className="h-25 w-auto object-contain"
        />

      <div>
      <h1 className="text-[#384152] text-xl font-bold tracking-wide">
        <span className="text-[#D4B06A]">Serene</span> Spark
      </h1>

      <p className="text-xs text-[#384152]/70">
        Soft luxury jewelry
      </p>
      </div>

    </Link>


    {/* USER LINKS */}
    {user?.role === "user" && (
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
        <Link
         to="/"
         className="hover:text-[#D4B06A] transition"
        >
          Home
        </Link>

        <Link
          to="/products"
          className="hover:text-[#D4B06A] transition"
        >
          Products
        </Link>

        <Link
         to="/orders"
         className="hover:text-[#D4B06A] transition"
        >
          Orders
        </Link>

       </nav>
    )}

    {/* ADMIN LINKS */}
    {user?.role === "admin" && (
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">

        <Link
          to="/admin"
          className="hover:text-[#D4B06A] transition"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/products"
          className="hover:text-[#D4B06A] transition"
        >
          Products
        </Link>

        <Link
          to="/admin/orders"
          className="hover:text-[#D4B06A] transition"
        >
          Orders
        </Link>

      </nav>
    )}

    {/* RIGHT SIDE */}
    <div className="flex items-center gap-4">

    {!user ? (
      <Link
        to="/login"
        className="px-5 py-2 rounded-full bg-[#D4B06A] text-white text-sm"
      >
        Login
      </Link>
    ) : (
      <>
        {user?.role === "user" && (
          <Link
            to="/cart"
            className="relative hover:text-[#D4B06A] transition"
          >
            <ShoppingCart size={22} />
          </Link>
    )}

        <button
          onClick={handleLogout}
          className="px-5 py-2 rounded-full bg-[#D4B06A] text-white text-sm"
        >
          Logout
        </button>
      </>
    )
  }

</div>
    {/* <div className="flex items-center gap-4">
      {!user || user.role === "user" ? (
        <Link
          to="/cart"
          className="relative hover:text-[#D4B06A] transition"
        >
          <ShoppingCart size={22} />
        </Link>
      ) : null}

      <button
        onClick={logout}
        className="px-5 py-2 rounded-full bg-[#D4B06A] text-white text-sm hover:opacity-90 transition"
      >
        Logout
      </button>

    </div> */}
     
    </div>
  </header>








    //3
  // <header className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#DCEAF4] shadow-sm">
  //   <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

  //     {/* LOGO */}
  //     <Link to="/" className="flex items-center gap-3">

  //       <div className="bg-white p-2 rounded-2xl shadow-sm border border-[#DCEAF4]">
  //         <img
  //           src="/images/logo3p.png"
  //           alt="Logo"
  //           className="h-14 w-auto object-contain"
  //         />
  //       </div>

  //       <div>
  //         <h1 className="text-[#384152] font-semibold text-xl">
  //           <span className="text-[#D4B06A]">Serene</span> Spark
  //         </h1>

  //         <p className="text-xs text-[#384152]/60">
  //           Timeless elegance
  //         </p>
  //       </div>
  //     </Link>

  //     {/* USER LINKS */}
  //         {(!user || user.role === "user") && (
  //           <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
  
  //             <Link
  //               to="/"
  //               className="hover:text-[#D4B06A] transition"
  //             >
  //               Home
  //             </Link>

  //             <Link
  //               to="/products"
  //               className="hover:text-[#D4B06A] transition"
  //             >
  //               Products
  //             </Link>

  //             <Link
  //               to="/orders"
  //               className="hover:text-[#D4B06A] transition"
  //             >
  //               Orders
  //             </Link>

  //           </nav>
  //         )}

  //         {/* ADMIN LINKS */}
  //         {user?.role === "admin" && (
  //           <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">

  //             <Link
  //               to="/admin"
  //               className="hover:text-[#D4B06A] transition"
  //             >
  //               Dashboard
  //             </Link>

  //             <Link
  //               to="/admin/products"
  //               className="hover:text-[#D4B06A] transition"
  //             >
  //               Products
  //             </Link>

  //             <Link
  //               to="/admin/orders"
  //               className="hover:text-[#D4B06A] transition"
  //             >
  //               Orders
  //             </Link>

  //           </nav>
  //         )}

  //         {/* RIGHT SIDE */}
  //         <div className="flex items-center gap-4">
  
  //           {!user || user.role === "user" ? (
  //             <Link
  //               to="/cart"
  //               className="relative hover:text-[#D4B06A] transition"
  //             >
  //               <ShoppingCart size={22} />
  //             </Link>
  //           ) : null}

  //           <button
  //             onClick={logout}
  //             className="px-5 py-2 rounded-full bg-[#D4B06A] text-white text-sm hover:opacity-90 transition"
  //           >
  //             Logout
  //           </button>

  //         </div>
     
  //   </div>
  // </header>



  // 3
  // <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/30 border-b border-white/40 shadow-sm">
  //   <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
  
  //     {/* LOGO */}
  //     <Link
  //       to="/"
  //       className="flex items-center gap-4 bg-white/20 px-4 py-2 rounded-2xl border border-white/30"
  //     >
  //       <img
  //         src="/images/logo3p.png"
  //         alt="Logo"
  //         className="h-14 w-auto object-contain drop-shadow-sm"
  //       />

  //       <div>
  //         <h1 className="text-[#384152] text-xl font-semibold">
  //           <span className="text-[#D4B06A]">Serene</span> Spark
  //         </h1>

  //         <p className="text-xs text-[#384152]/70">
  //           Modern elegance
  //           </p>
  //       </div>
 
  //     </Link>

  //     {/* USER LINKS */}
  //         {(!user || user.role === "user") && (
  //           <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
  
  //             <Link
  //               to="/"
  //               className="hover:text-[#D4B06A] transition"
  //             >
  //               Home
  //             </Link>

  //             <Link
  //               to="/products"
  //               className="hover:text-[#D4B06A] transition"
  //             >
  //               Products
  //             </Link>

  //             <Link
  //               to="/orders"
  //               className="hover:text-[#D4B06A] transition"
  //             >
  //               Orders
  //             </Link>

  //           </nav>
  //         )}

  //         {/* ADMIN LINKS */}
  //         {user?.role === "admin" && (
  //           <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">

  //             <Link
  //               to="/admin"
  //               className="hover:text-[#D4B06A] transition"
  //             >
  //               Dashboard
  //             </Link>

  //             <Link
  //               to="/admin/products"
  //               className="hover:text-[#D4B06A] transition"
  //             >
  //               Products
  //             </Link>

  //             <Link
  //               to="/admin/orders"
  //               className="hover:text-[#D4B06A] transition"
  //             >
  //               Orders
  //             </Link>

  //           </nav>
  //         )}

  //         {/* RIGHT SIDE */}
  //         <div className="flex items-center gap-4">
  
  //           {!user || user.role === "user" ? (
  //             <Link
  //               to="/cart"
  //               className="relative hover:text-[#D4B06A] transition"
  //             >
  //               <ShoppingCart size={22} />
  //             </Link>
  //           ) : null}

  //           <button
  //             onClick={logout}
  //             className="px-5 py-2 rounded-full bg-[#D4B06A] text-white text-sm hover:opacity-90 transition"
  //           >
  //             Logout
  //           </button>

  //         </div>

  //   </div>
  // </header>



  //4

  );
}

export default Navbar;






{/* <span className="text-[#384152] font-semibold text-lg">
            Serene Spark
          </span> */}