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

// supported categories
export const supportedCategories = [
  { title: "Fashion" },
  { title: "Electronics" },
  { title: "Home Decor" },
  { title: "Health and Wellness" },
  { title: "Beauty and Personal Care" },
];
// routes information
export const routesInfo = [
  { title: "Home" },
  { title: "Products" },
  { title: "Contact Us" },
  { title: "FAQs" },
];

// hero section images link
export const heroSectionImages = {
  homePage: {
    img01:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fhero%20section%20banner%20(3).webp?alt=media&token=28d80d2d-a9ef-4da2-a1b1-e150032099be",
    img02:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fhero%20section%20banner%20(1).webp?alt=media&token=cc2380de-06cb-4803-9e05-ac9926a00133",
    img03:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fhero%20section%20banner%20(2).webp?alt=media&token=5beb4a17-7c56-4f30-9ef2-8d43f1498114",
  },
};

// get average of an array
export function calculateAverage(numbers) {
  const sum = numbers.reduce((acc, curr) => Number(acc) + Number(curr), 0);

  const count = numbers.length;

  const average = Math.round(sum / count);

  return average;
}

// create a fake array (useful for loading components)
export const fakeArray = (length) => {
  var numberArray = [];
  for (var i = 0; i < length; i++) {
    numberArray.push(i);
  }
  return numberArray;
};

export const bannerIcon =
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ficon.svg?alt=media&token=927bf580-49b0-4e03-9118-0a11258c817e";
