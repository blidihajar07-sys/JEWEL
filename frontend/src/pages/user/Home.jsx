// import UserLayout from "../../components/layouts/UserLayout";

// function Home() {
//   return (
//     <UserLayout>
//       <h1>Home</h1>
//     </UserLayout>
//   );
// }

// export default Home;
import UserLayout from "../../components/layouts/UserLayout";
import { Link } from "react-router-dom";

function Home() {
  return (
    <UserLayout>
      <h1>Jewelry Shop</h1>

      <p>Welcome to our store</p>

      <Link to="/products">
        View Products
      </Link>

    </UserLayout>
  );
}

export default Home;