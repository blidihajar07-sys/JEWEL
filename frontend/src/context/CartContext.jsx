import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

// Global cart context
const CartContext = createContext();

export function CartProvider({ children }) {

  // Load cart data from localStorage on first render
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  // Add product to cart
  const addToCart = (product) => {

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    // Increase quantity if product already exists
    if (existingProduct) {

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );

      return;
    }

    // Add new product
    setCart([
      ...cart,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  // Remove product completely from cart
  const removeFromCart = (id) => {

    setCart(
      cart.filter(
        (item) => item.id !== id
      )
    );
  };

  // Update product quantity
  const updateQuantity = (id, quantity) => {

    // Remove item if quantity becomes invalid
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity }
          : item
      )
    );
  };

  // Clear all cart items
  const clearCart = () => {
    setCart([]);
  };

  // Calculate total cart price
  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook for cart access
export const useCart = () =>
  useContext(CartContext);