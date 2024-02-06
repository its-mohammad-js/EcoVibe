// define route path and names here (useful for nav links)
// export const routeInfo = [
//   { name: "Home", path: "/EcoVibe/" },
//   { name: "Products", path: "/EcoVibe/Products" },
//   { name: "Products Filter", path: "/EcoVibe/Filtered-Products" },
// ];

const defaultFilters = {
  category: "",
  searchQuery: "",
  tags: [],
  collections: [],
  productTypes: [],
  priceRange: { min: 0, max: -1 },
  seller: "ecoVibe",
  selectedOptions: [
    { title: "color", selectedOption: "black" },
    { title: "storage", selectedOption: "120gb" },
  ],
  sortBy: "low to high",
};

export const supportedCategories = [
  { title: "Fashion" },
  { title: "Electronics" },
  { title: "Home Decor" },
  { title: "Health and Wellness" },
  { title: "Beauty and Personal Care" },
];

export const routesInfo = [
  { title: "Home" },
  { title: "Products" },
  { title: "Contact Us" },
  { title: "FAQs" },
];

export const heroSectionImages = {
  homePage: {
    img01:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ffreestocks-_3Q3tsJ01nc-unsplash.jpg?alt=media&token=55706bbb-c885-44c2-9db2-a594a053329a",
    img02:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fbrooke-cagle-8jp-6SjVibM-unsplash.jpg?alt=media&token=00462705-2985-4e3d-813a-ae537817ac46",
    img03:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Flauren-richmond-490uCO8h7ZA-unsplash.jpg?alt=media&token=4c8d59f0-a015-4f42-a916-12b17bf2c553",
  },
};

export function calculateAverage(numbers) {
  const sum = numbers.reduce((acc, curr) => Number(acc) + Number(curr), 0);

  const count = numbers.length;

  const average = Math.round(sum / count);

  return average;
}
