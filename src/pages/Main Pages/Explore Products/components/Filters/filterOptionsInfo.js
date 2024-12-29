import { supportedCategories, supportedTags } from "appData";

// filter options
export const getFilters = (category) => {
  // Determine product types and collections based on category
  const { productTypes, collections } = !category
    ? {
        productTypes: supportedCategories.flatMap((cat) => cat.productTypes),
        collections: supportedCategories.flatMap((cat) => cat.collections),
      }
    : (() => {
        const categoryData = supportedCategories.find(
          (cat) => cat.title.toLowerCase() === category.toLowerCase()
        );
        return {
          productTypes: categoryData?.productTypes || [],
          collections: categoryData?.collections || [],
        };
      })();

  // Return filter options
  return [
    {
      title: "Categories",
      filterKey: "category",
      filterOptions: supportedCategories,
    },
    {
      title: "Product Type",
      filterKey: "productTypes",
      filterOptions: productTypes,
    },
    {
      title: "Collection's",
      filterKey: "collections",
      filterOptions: collections,
    },
    {
      title: "Trend Tag's",
      filterKey: "tags",
      filterOptions: supportedTags,
    },
    {
      title: "Seller",
      filterKey: "seller",
      filterOptions: [{ title: "All" }, { title: "Eco Vibe" }],
    },
  ];
};

// get product option by product type
export const getProductOption = (productType, optionsList = []) => {
  if (!productType || !optionsList.length) return [];

  const productOptions =
    optionsList.find(
      (opt) => opt.productType.toLowerCase() === productType.toLowerCase()
    )?.productOptions || [];

  return productOptions.map((opt) => ({
    title: opt.title,
    options: opt.options.map((option) => ({ title: option })),
  }));
};

// supported sort options
export const supportedSortOptions = [
  { title: "Popular first", value: "Popular" },
  { title: "Price: high to low", value: "High To Low" },
  { title: "Price: low to high", value: "Low To High" },
  { title: "Best Selling", value: "best Sell" },
];
