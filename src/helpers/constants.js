// supported categories
export const supportedCategories = [
  {
    title: "Fashion",
    productTypes: [
      { title: "T-Shirts" },
      { title: "Jeans" },
      { title: "Dresses" },
      { title: "Shoes" },
    ],
    collections: [
      { title: "Men" },
      { title: "Women" },
      { title: "Kids" },
      { title: "Summer" },
      { title: "November outfits" },
      { title: "Cashmere set" },
      { title: "New nordic" },
      { title: "Leather" },
      { title: "Sneakers" },
    ],
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsub-menu-banner%20(1).webp?alt=media&token=f82da5a4-9b48-42e3-b463-28bf39f069d4",
  },
  {
    title: "Electronics",
    collections: [
      { title: "Game on" },
      { title: "World of sounds" },
      { title: "Electra" },
      { title: "Voltix" },
      { title: "Tech trend" },
    ],
    productTypes: [
      { title: "Smart Phones" },
      { title: "Laptops" },
      { title: "Headphones" },
      { title: "Smart Watches" },
    ],
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsub-menu-banner%20(2).webp?alt=media&token=755ce2e1-12bf-422e-a3aa-34e128db1385",
  },
  {
    title: "Home Decor",
    collections: [
      { title: "Kitchen" },
      { title: "living room" },
      { title: "Bedroom" },
      { title: "Natural Vibes" },
    ],
    productTypes: [
      { title: "Wall Art" },
      { title: "Throw Pillows" },
      { title: "Vases" },
      { title: "Candles" },
    ],
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsub-menu-banner%20(3).webp?alt=media&token=be4ac31d-065f-45aa-bea4-b3c884bd724a",
  },
  {
    title: "Health and Wellness",
    collections: [
      { title: "Vita boost" },
      { title: "Glow life" },
      { title: "Zen Fuel" },
    ],
    productTypes: [
      { title: "Vitamins" },
      { title: "Fitness Trackers" },
      { title: "Yoga Blocks" },
      { title: "Resistance Bands" },
    ],
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsub-menu-banner%20(4).webp?alt=media&token=75fcc7d4-2e79-463f-92fb-119b3500ab61",
  },
  {
    title: "Beauty and Personal Care",
    collections: [
      { title: "Organic oil" },
      { title: "Skincare collection" },
      { title: "Hair care collection" },
      { title: "Fragrance" },
      { title: "Beauty 2024" },
    ],
    productTypes: [
      { title: "Skincare Sets" },
      { title: "Lipsticks" },
      { title: "Hair Styling Tools" },
      { title: "Perfumes" },
    ],
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsub-menu-banner%20(5).webp?alt=media&token=e40fdb29-7f67-4fe8-8d76-0bd2b1e4067f",
  },
];

// return supported collections & product types of a specific category
export const getCategoryData = (category) => {
  let { productTypes, collections } = {
    productTypes: [],
    collections: [],
  };

  if (category === "") {
    supportedCategories.map((cat) => {
      cat.productTypes.forEach((i) => productTypes.push(i));
      cat.collections.forEach((i) => collections.push(i));
    });
  } else {
    supportedCategories.find((cat) => {
      if (cat.title.toLowerCase() === category.toLowerCase()) {
        productTypes = cat.productTypes;
        collections = cat.collections;
      }
    });
  }

  return { productTypes, collections };
};

// check array for specific element (it also useable for array of objects (simple object without method or dom element))
export const isInArray = (array, element) => {
  const indexEl = array.findIndex(
    (el) =>
      JSON.stringify(el).toLocaleLowerCase() ===
      JSON.stringify(element).toLocaleLowerCase()
  );

  return indexEl !== -1;
};

// add / remove an specific element from array (without mutation)
export const toggleElementInArray = (array, element) => {
  // find index of specific element
  const indexOfEl = array.findIndex((item) => item === element);
  // clone of original array
  let updateArray = [...array];
  // toggle (add / remove) element from clone array
  if (indexOfEl === -1) {
    updateArray.push(element);
  } else {
    updateArray.splice(indexOfEl, 1);
  }
  // return updated clone array
  return updateArray;
};

export const supportedSortOptions = [
  { title: "Popular first", value: "Popular" },
  { title: "Price: high to low", value: "High To Low" },
  { title: "Price: low to high", value: "Low To High" },
  { title: "Best Selling", value: "best Sell" },
];

// routes information
export const routesInfo = [
  { title: "Home", path: "/EcoVibe/" },
  { title: "Shop", path: "/EcoVibe/Shop" },
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

// paginate product (useable for any array)
export function paginateProducts(products) {
  const pageSize = 12;
  const numberOfPages = Math.ceil(products.length / pageSize);

  const paginatedProducts = [];
  for (let i = 0; i < numberOfPages; i++) {
    const startIndex = i * pageSize;
    const endIndex = startIndex + pageSize;

    const pageProducts = products.slice(startIndex, endIndex);
    paginatedProducts.push({
      products: pageProducts,
      page: i + 1,
    });
  }

  return paginatedProducts;
}
