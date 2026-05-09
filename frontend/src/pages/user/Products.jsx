// import UserLayout from "../../components/layouts/UserLayout";
// import { Link } from "react-router-dom";

// function Products() {
//   const products = [
//     { id: 1, name: "Gold Ring", price: 120 },
//     { id: 2, name: "Silver Necklace", price: 80 },
//     { id: 3, name: "Diamond Earrings", price: 300 }
//   ];

//   return (
//     <UserLayout>
//       <h1>Products</h1>

//       {products.map((product) => (
//         <div key={product.id} style={{ marginBottom: "10px" }}>
//           <h3>{product.name}</h3>
//           <p>${product.price}</p>

//           <Link to={`/products/${product.id}`}>
//             View Details
//           </Link>
//         </div>
//       ))}
//     </UserLayout>
//   );
// }

// export default Products;

// import UserLayout from "../../components/layouts/UserLayout";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getProducts } from "../../services/productService";

// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getProducts().then(setProducts);
//   }, []);

//   return (
//     <UserLayout>
//       <h1>Products</h1>

//       {products.map((product) => (
//         <div key={product.id}>
//           <img
//             src={product.thumbnail}
//             width="150"
//           />

//           <h3>{product.title}</h3>
//           <p>${product.price}</p>

//           <Link to={`/products/${product.id}`}>
//             View Details
//           </Link>

//           <hr />
//         </div>
//       ))}
//     </UserLayout>
//   );
// }

// export default Products;


// import UserLayout from "../../components/layouts/UserLayout";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getProducts } from "../../services/productService";

// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getProducts().then(setProducts);
//   }, []);

//   return (
//     <UserLayout>
//       <h1>Jewelry Products</h1>

//       {products.map((product) => (
//         <div key={product.id} style={{ marginBottom: "20px" }}>
          
//           <img
//             src={product.image}
//             alt={product.title}
//             width="150"
//           />

//           <h3>{product.title}</h3>

//           <p>${product.price}</p>

//           <Link to={`/products/${product.id}`}>
//             View Details
//           </Link>

//           <hr />
//         </div>
//       ))}

//     </UserLayout>
//   );
// }

// export default Products;


import { useEffect, useState } from "react";
import UserLayout from "../../components/layouts/UserLayout";
import ProductCard from "../../components/ProductCard";
import { getProducts } from "../../services/productService";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    loadProducts();
  }, []);

  return (
    <UserLayout>
      <h1>Products</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px"
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </UserLayout>
  );
}

export default Products;