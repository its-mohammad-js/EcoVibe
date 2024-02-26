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
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fhome-page-hero%20(1).webp?alt=media&token=454fe00a-42fb-4bc8-8c52-5fe53a9b897e",
    img02:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fhome-page-hero%20(3).webp?alt=media&token=b7051a7c-5881-433f-9ea0-c33fd1c37588",
    img03:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fhome-page-hero%20(2).webp?alt=media&token=6a239c1b-8f4e-47d5-b278-3eac682a8af1",
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
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ficon%20svg.webp?alt=media&token=a96944c7-1885-44a9-8ecb-d43e92358f57";
