// available option for each category product types
export const supportedProductOptions = [
  // fashion
  {
    productType: "T-Shirts",
    productOptions: [
      {
        title: "Color",
        options: ["Classic white", "Navy blue", "Heather gray", "Black"],
      },
      {
        title: "Size",
        options: ["Small", "Medium", "Large", "Extra-large"],
      },
      {
        title: "Shape",
        options: ["Regular crew neck", "V-neck", "Henley", "Scoop neck"],
      },
      {
        title: "Material",
        options: [
          "Soft cotton",
          "Cotton blend",
          "Organic cotton",
          "Tri-blend fabric",
        ],
      },
    ],
  },
  {
    productType: "Jeans",
    productOptions: [
      {
        title: "Color",
        options: ["Dark gray", "Black", "White", "Blue"],
      },
      {
        title: "Fit",
        options: ["Slim fit", "Straight fit", "Skinny fit", "Relaxed fit"],
      },
      {
        title: "Style",
        options: [
          "Classic 5-pocket design",
          "Distressed details",
          "High-rise",
          "Bootcut",
        ],
      },
      {
        title: "Material",
        options: [
          "Stretch denim",
          "Raw denim",
          "Denim with spandex",
          "Selvedge denim",
        ],
      },
    ],
  },
  {
    productType: "Dresses",
    productOptions: [
      {
        title: "Style",
        options: ["Midi dress", "Maxi dress", "Wrap dress", "A-line dress"],
      },
      {
        title: "Color",
        options: ["Navy blue", "Burgundy", "Emerald green", "Floral print"],
      },
      {
        title: "Neckline",
        options: ["V-neck", "Scoop neck", "Off-shoulder", "Halter neck"],
      },
      {
        title: "Material",
        options: ["Lightweight polyester", "Cotton blend", "Silk", "Linen"],
      },
    ],
  },
  {
    productType: "Shoes",
    productOptions: [
      {
        title: "Size",
        options: [
          "Men's: 8 to 12 (US)",
          "Women's: 6 to 12 (US)",
          "Kids': 1 to 9 (US)",
        ],
      },
      {
        title: "Color",
        options: ["Red", "White", "Gray", "Black"],
      },
      {
        title: "Material",
        options: ["Leather", "Suede", "Canvas", "Mesh"],
      },
    ],
  },
  // electronics
  {
    productType: "Smart Phones",
    productOptions: [
      {
        title: "Color",
        options: ["White", "Gray", "Black", "Red", "Blue"],
      },
      {
        title: "Brand",
        options: ["Apple", "Samsung", "Google", "OnePlus", "Xiaomi"],
      },
      {
        title: "Operating System",
        options: ["iOS", "Android"],
      },
      {
        title: "Storage Capacity",
        options: ["64GB", "128GB", "256GB", "512GB"],
      },
      {
        title: "Camera Features",
        options: [
          "Dual camera",
          "Night mode",
          "Telephoto lens",
          "Ultra-wide angle",
        ],
      },
    ],
  },
  {
    productType: "Laptops",
    productOptions: [
      {
        title: "Operating System",
        options: ["Windows", "macOS", "Chrome OS"],
      },
      {
        title: "Processor",
        options: ["Intel Core i5", "Intel Core i7", "AMD Ryzen 7"],
      },
      {
        title: "Screen Size",
        options: ["13-inch", "15-inch", "17-inch"],
      },
      {
        title: "Storage Type",
        options: ["SSD", "HDD"],
      },
    ],
  },
  {
    productType: "Headphones",
    productOptions: [
      {
        title: "Type",
        options: ["Over-ear", "In-ear", "On-ear"],
      },
      {
        title: "Color",
        options: ["White", "Black", "Red", "Orange", "Gray"],
      },
      {
        title: "Wireless Connectivity",
        options: ["Bluetooth", "True wireless"],
      },
      {
        title: "Sound Quality",
        options: ["High fidelity", "Bass-heavy", "Balanced"],
      },
      {
        title: "Noise Cancellation",
        options: ["Active noise cancellation", "Passive noise isolation"],
      },
    ],
  },
  {
    productType: "Smart Watches",
    productOptions: [
      {
        title: "Color",
        options: ["Red", "Blue", "Yellow", "White", "Black"],
      },
      {
        title: "Brand",
        options: ["Apple", "Samsung", "Google", "Garmin", "Fitbit"],
      },
      {
        title: "Operating System",
        options: ["watchOS", "Wear OS", "Tizen"],
      },
      {
        title: "Fitness Tracking",
        options: [
          "Heart rate monitoring",
          "GPS",
          "Sleep tracking",
          "Step count",
        ],
      },
      {
        title: "Battery Life",
        options: ["1-2 days", "Up to a week", "Long-lasting"],
      },
    ],
  },
  // Home Decor
  {
    productType: "Wall Art",
    productOptions: [
      {
        title: "Material",
        options: [
          "Canvas prints",
          "Metal prints",
          "Wood prints",
          "Acrylic prints",
        ],
      },
      {
        title: "Style",
        options: ["Abstract", "Landscape", "Modern", "Vintage"],
      },
      {
        title: "Size",
        options: ["Small", "Medium", "Large", "Extra-large"],
      },
      {
        title: "Frame",
        options: ["Framed", "Unframed"],
      },
    ],
  },
  {
    productType: "Throw Pillows",
    productOptions: [
      {
        title: "Shape",
        options: ["Square", "Lumbar", "Round", "Bolster"],
      },
      {
        title: "Material",
        options: ["Cotton", "Velvet", "Linen", "Faux fur"],
      },
      {
        title: "Color",
        options: ["Neutral", "Bold", "Pastel", "Patterned"],
      },
      {
        title: "Insert",
        options: ["Down", "Polyfill"],
      },
    ],
  },
  {
    productType: "Vases",
    productOptions: [
      {
        title: "Material",
        options: ["Glass", "Ceramic", "Metal", "Wood"],
      },
      {
        title: "Shape",
        options: ["Mason jar", "Bud vase", "Cylinder", "Cube"],
      },
      {
        title: "Style",
        options: ["Modern", "Farmhouse", "Boho", "Classic"],
      },
      {
        title: "Size",
        options: ["Small", "Medium", "Large", "Extra-large"],
      },
    ],
  },
  {
    productType: "Candles",
    productOptions: [
      {
        title: "Type",
        options: ["Beeswax", "Wood wick", "Soy", "Sparklers"],
      },
      {
        title: "Scent",
        options: ["Lavender", "Vanilla", "Citrus", "Spiced"],
      },
      {
        title: "Shape",
        options: ["Taper", "Pillar", "Tealight", "Floating"],
      },
      {
        title: "Color",
        options: ["Natural", "Colored", "Scented", "Unscented"],
      },
    ],
  },
  // Health and Wellness
  {
    productType: "Vitamins",
    productOptions: [
      {
        title: "Vitamin Type",
        options: ["Vitamin C", "Vitamin D", "Multivitamins", "B Vitamins"],
      },
      {
        title: "Form",
        options: ["Tablets", "Capsules", "Gummies", "Liquid"],
      },
      {
        title: "Purpose",
        options: ["Immune support", "Bone health", "Energy", "Skin health"],
      },
      {
        title: "Specialty",
        options: ["Vegetarian", "Organic", "Non-GMO", "Time-release"],
      },
    ],
  },
  {
    productType: "Fitness Trackers",
    productOptions: [
      {
        title: "Type",
        options: ["Wristband", "Smartwatch", "Clip-on", "Ring"],
      },
      {
        title: "Features",
        options: [
          "Heart rate monitoring",
          "GPS",
          "Sleep tracking",
          "Waterproof",
        ],
      },
      {
        title: "Brand",
        options: ["Fitbit", "Garmin", "Apple", "Samsung"],
      },
      {
        title: "Battery Life",
        options: ["1-2 days", "Up to a week", "Long-lasting"],
      },
    ],
  },
  {
    productType: "Yoga Blocks",
    productOptions: [
      {
        title: "Material",
        options: ["Foam", "Cork", "Wood", "Bamboo"],
      },
      {
        title: "Shape",
        options: ["Rectangular", "Curved", "Round", "Square"],
      },
      {
        title: "Size",
        options: ["Small", "Medium", "Large", "Extra-large"],
      },
      {
        title: "Density",
        options: ["Soft", "Medium", "Firm", "High-density"],
      },
    ],
  },
  {
    productType: "Resistance Bands",
    productOptions: [
      {
        title: "Material",
        options: ["Latex", "Fabric", "Cotton", "Rubber"],
      },
      {
        title: "Resistance Level",
        options: ["Light", "Medium", "Heavy", "Extra-heavy"],
      },
      {
        title: "Style",
        options: ["Loop bands", "Tube bands", "Power bands", "Flat bands"],
      },
      {
        title: "Length",
        options: ["Short", "Standard", "Long", "Customizable"],
      },
    ],
  },
  // Beauty and Personal Care
  {
    productType: "Skincare Sets",
    productOptions: [
      { title: "Day Cream with SPF", options: ["Light", "Medium", "Heavy"] },
      { title: "Night Cream", options: ["Standard", "Long"] },
      { title: "Eye Cream", options: ["Customizable"] },
      { title: "Serum", options: ["Latex", "Fabric", "Cotton", "Rubber"] },
    ],
  },
  {
    productType: "Lipsticks",
    productOptions: [
      { title: "Weight", options: ["Light", "Medium"] },
      { title: "Size", options: ["Standard", "Long"] },
      { title: "Matte Finish", options: ["Customizable", "Manual"] },
      {
        title: "Cream Finish",
        options: ["Latex", "Fabric", "Cotton", "Rubber"],
      },
      {
        title: "Color",
        options: ["Red", "Black", "Blue", "Yellow"],
      },
    ],
  },
  {
    productType: "Hair Styling Tools",
    productOptions: [
      {
        title: "Hot Rollers",
        options: [
          "Small Hot Rollers",
          "Medium Hot Rollers",
          "Large Hot Rollers",
        ],
      },
      {
        title: "Hair Dryer",
        options: [
          "Ionic Hair Dryer",
          "Ceramic Hair Dryer",
          "Professional Hair Dryer",
        ],
      },
      {
        title: "Curling Wand",
        options: [
          "Small Barrel Curling Wand",
          "Medium Barrel Curling Wand",
          "Large Barrel Curling Wand",
        ],
      },
      {
        title: "Hair Straightener",
        options: [
          "Ceramic Hair Straightener",
          "Titanium Hair Straightener",
          "Tourmaline Hair Straightener",
        ],
      },
    ],
  },
  {
    productType: "Perfumes",
    productOptions: [
      {
        title: "Fragrance Family",
        options: ["Floral", "Citrus", "Woody", "Oriental", "Fresh", "Spicy"],
      },
      {
        title: "Bottle Size",
        options: ["30ml", "50ml", "100ml", "200ml"],
      },
      {
        title: "Intensity",
        options: ["Eau de Toilette", "Eau de Parfum", "Parfum"],
      },
      {
        title: "Occasion",
        options: ["Daytime", "Evening", "Special Occasions"],
      },
    ],
  },
];

// get product option by product type
export const getProductOption = (productType) => {
  if (!productType) {
    return [];
  }

  const productOptions = supportedProductOptions.filter(
    (opt) => opt.productType.toLocaleLowerCase() === productType
  )[0].productOptions;

  if (productOptions.length > 0) {
    const reducedOptions = productOptions?.map((opt) => {
      const updatedOptions = opt.options.map((opt) => ({ title: opt }));

      return { title: opt.title, options: updatedOptions };
    });

    return reducedOptions;
  }
};
