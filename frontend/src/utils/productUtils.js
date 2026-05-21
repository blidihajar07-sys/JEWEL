export const categories = [
  "ring",
  "bracelet",
  "necklace",
  "earrings",
];

export const filterByCategory = (products, category) => {
  if (!category || category.toLowerCase() === "all") {
    return products;
  }

  return products.filter(
    (p) => p.category?.toLowerCase() === category.toLowerCase()
  );
};

export const searchProducts = (products, searchTerm) => {
  if (!searchTerm) return products;

  return products.filter((p) =>
    p.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const sortProducts = (products, sortBy) => {
  const sorted = [...products];

  switch (sortBy) {

    case "price-low":
      return sorted.sort((a, b) => a.price - b.price);

    case "price-high":
      return sorted.sort((a, b) => b.price - a.price);

    case "name":
      return sorted.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

    default:
      return sorted;
  }
};