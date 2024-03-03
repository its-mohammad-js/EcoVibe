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
  {
    title: "Fashion",
    productTypes: ["T-Shirts", "Jeans", "Dresses", "Sneakers"],
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsub-menu-banner%20(1).webp?alt=media&token=f82da5a4-9b48-42e3-b463-28bf39f069d4",
  },
  {
    title: "Electronics",
    productTypes: ["Smart Phones", "Laptops", "Headphones", "Smart watches"],
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsub-menu-banner%20(2).webp?alt=media&token=755ce2e1-12bf-422e-a3aa-34e128db1385",
  },
  {
    title: "Home Decor",
    productTypes: ["Wall art", "Throw pillows", "Vases", "Candles"],
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsub-menu-banner%20(3).webp?alt=media&token=be4ac31d-065f-45aa-bea4-b3c884bd724a",
  },
  {
    title: "Health and Wellness",
    productTypes: [
      "Vitamins",
      "Fitness trackers",
      "Yoga blocks",
      "Resistance bands",
    ],
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsub-menu-banner%20(4).webp?alt=media&token=75fcc7d4-2e79-463f-92fb-119b3500ab61",
  },
  {
    title: "Beauty and Personal Care",
    productTypes: [
      "Skincare sets",
      "Lipsticks",
      "Hair styling tools",
      "Perfumes",
    ],
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsub-menu-banner%20(5).webp?alt=media&token=e40fdb29-7f67-4fe8-8d76-0bd2b1e4067f",
  },
];
// routes information
export const routesInfo = [
  { title: "Home", path: "/EcoVibe/" },
  { title: "Products", path: "/EcoVibe/Products" },
  { title: "Contact Us", path: "" },
  { title: "FAQs", path: "" },
];

// hero sections information
export const heroSectionsInfo = {
  homePage: {
    img01:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fhome-page-hero%20(1).webp?alt=media&token=454fe00a-42fb-4bc8-8c52-5fe53a9b897e",
    img02:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fhome-page-hero%20(3).webp?alt=media&token=b7051a7c-5881-433f-9ea0-c33fd1c37588",
    img03:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fhome-page-hero%20(2).webp?alt=media&token=6a239c1b-8f4e-47d5-b278-3eac682a8af1",
  },
  shopPage: [
    {
      title: "Organic Oil",
      subTitle:
        "Nourishing Your Body, Honoring the Earth🌿💧Pure Wellness in Every DropNature's Bounty Bottled for Your Beauty Glow Naturally with Organic Elixir",
      img: "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fshop%20page%20hero%20banner%20(2).webp?alt=media&token=ff1fee30-083b-4f44-8663-d23d9e8b3e19",
    },
    {
      title: "World of Sound",
      subTitle:
        "Enhancing Every Beat of Your Life* 🎶❤️Music to Your Ears, Style to Your Soul* 🎵🔥Cutting-Edge Technology for an Acoustic Adventure",
      img: "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fshop%20page%20hero%20banner%20(3).webp?alt=media&token=d5487376-c296-4018-a8f3-87c9cc11cb4f",
    },
    {
      title: "at Your Fingertips",
      subTitle:
        "Connecting the World at Your Fingertips* 🌐📱Empowering Communication and Innovation 🔥💬Unleashing Possibilities with Every Touch ✨📞Elevating Your Digital Experience with Style 🚀📲",
      img: "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fshop%20page%20hero%20banner%20(4).webp?alt=media&token=ee3f5fbd-15d5-43aa-8a7b-0ea855e60458",
    },
    {
      title: "Style Meets Comfort",
      subTitle:
        "Wear Your Style, Express Your Personality Comfort Meets Fashion in Every Stitch💁‍♂️ Every Thread Tells a Story of Urban Cool🧵📖 Unleash Your Wardrobe with Versatile Essentials",
      img: "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fshop%20page%20hero%20banner%20(1).webp?alt=media&token=21378e69-8d04-452d-b5fa-f7734dd9dff4",
    },
  ],
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
