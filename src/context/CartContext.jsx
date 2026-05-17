// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);

//   // ADD PRODUCT
//   const addToCart = (product) => {
//     const existing = cart.find((item) => item.id === product.id);

//     if (existing) {
//       setCart(
//         cart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   // REMOVE PRODUCT
//   const removeFromCart = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   // UPDATE QUANTITY
//   const updateQuantity = (id, quantity) => {
//     setCart(
//       cart.map((item) =>
//         item.id === id ? { ...item, quantity } : item
//       )
//     );
//   };

//   // TOTAL PRICE
//   const total = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         total,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// // custom hook
// export const useCart = () => useContext(CartContext);


import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  // ✅ LOAD FROM LOCALSTORAGE
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ SAVE TO LOCALSTORAGE (every change)
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ADD PRODUCT
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // REMOVE PRODUCT
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // UPDATE QUANTITY
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // TOTAL PRICE
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        total,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// custom hook
export const useCart = () => useContext(CartContext);