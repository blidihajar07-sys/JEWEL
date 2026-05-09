// // import UserLayout from "../../components/layouts/UserLayout";
// // import { useParams } from "react-router-dom";

// // function ProductDetails() {
// //   const { id } = useParams();

// //   return (
// //     <UserLayout>
// //       <h1>Product Details</h1>
// //       <p>Product ID: {id}</p>

// //       <button>Add to cart</button>
// //     </UserLayout>
// //   );
// // }

// // export default ProductDetails;


// import UserLayout from "../../components/layouts/UserLayout";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { getProductById } from "../../services/productService";

// function ProductDetails() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     getProductById(id).then(setProduct);
//   }, [id]);

//   if (!product) return <p>Loading...</p>;

//   return (
//     <UserLayout>
//       <h1>{product.title}</h1>

//       <img src={product.thumbnail} width="200" />

//       <p>{product.description}</p>

//       <h3>${product.price}</h3>

//       <button>Add to cart</button>
//     </UserLayout>
//   );
// }

// export default ProductDetails;



// import UserLayout from "../../components/layouts/UserLayout";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { getProductById } from "../../services/productService";

// function ProductDetails() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     getProductById(id).then(setProduct);
//   }, [id]);

//   if (!product) return <p>Loading...</p>;

//   return (
//     <UserLayout>
//       <h1>{product.title}</h1>

//       <img
//         src={product.image}
//         alt={product.title}
//         width="250"
//       />

//       <p>{product.description}</p>

//       <h3>${product.price}</h3>

//       <button>Add to Cart</button>
//     </UserLayout>
//   );
// }

// export default ProductDetails;


// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import UserLayout from "../../components/layouts/UserLayout";
// import { getProductById } from "../../services/productService";

// function ProductDetails() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const loadProduct = async () => {
//       const data = await getProductById(id);
//       setProduct(data);
//     };

//     loadProduct();
//   }, [id]);

//   if (!product) return <div>Loading...</div>;

//   return (
//     <UserLayout>
//       <h1>{product.title}</h1>

//       <img
//         src={product.image}
//         alt={product.title}
//         style={{ width: "300px" }}
//       />

//       <p>{product.description}</p>

//       <h2>${product.price}</h2>
//     </UserLayout>
//   );
// }

// export default ProductDetails;



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserLayout from "../../components/layouts/UserLayout";
import { getProductById } from "../../services/productService";
import { useCart } from "../../context/CartContext"; // ✅ IMPORTANT

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart(); // ✅ IMPORTANT

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <UserLayout>
      <h1>{product.name}</h1>

      <img
        src={`/images/${product.image}`}
        alt={product.name}
        width="250"
      />

      <p>{product.description}</p>

      <h3>${product.price}</h3>

      {/* ✅ NOW WORKS */}
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </UserLayout>
  );
}

export default ProductDetails;