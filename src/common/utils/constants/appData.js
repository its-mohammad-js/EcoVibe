import {
  getDatabase,
  goOffline,
  onValue,
  ref as dbRef,
} from "firebase/database";

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
      { title: "Summer", used: true },
      { title: "November outfits" },
      { title: "Cashmere set" },
      { title: "New nordic" },
      { title: "Leather" },
      { title: "Sneakers" },
    ],
    iconURl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ffashion%20icon.png?alt=media&token=dbda043b-0da0-4db3-ab84-108c30458858",
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
    iconURl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2FElectronics%20Icon.png?alt=media&token=9c895c63-7407-4ac4-91aa-8f7773f05bfc",
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
    iconURl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2FHome%20Decor%20Icon.png?alt=media&token=8e12c6f6-b906-4d19-935f-1682ba47e2c6",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsub-menu-banner%20(3).webp?alt=media&token=be4ac31d-065f-45aa-bea4-b3c884bd724a",
  },
  {
    title: "Health and Wellness",
    collections: [
      { title: "Vita boost" },
      { title: "Glow life" },
      { title: "Zen Fuel" },
      { title: "Healty Routine" },
    ],
    productTypes: [
      { title: "Vitamins" },
      { title: "Fitness Trackers" },
      { title: "Yoga Blocks" },
      { title: "Resistance Bands" },
    ],
    iconURl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2FHealth%20Icon.png?alt=media&token=9f25a2a6-014b-4dd1-bfad-8da910d4f57c",
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
    iconURl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2FBeauty%20Icon.png?alt=media&token=b295adaa-c91c-4406-9e76-105e5e438d64",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsub-menu-banner%20(5).webp?alt=media&token=e40fdb29-7f67-4fe8-8d76-0bd2b1e4067f",
  },
];

export const errorIconUrl =
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2FError%20Ilustration.png?alt=media&token=44e6f168-e69d-4f7b-8f82-b5129fdf535b";

export const avatarsUrl = [
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(1).webp?alt=media&token=208a6a73-f31d-436a-b416-98752a90c7a9",
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(2).webp?alt=media&token=5fb1eddd-e6e8-4f79-97b6-1db11d7391a9",
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(3).webp?alt=media&token=85d7fa87-7582-4448-b7d8-21d3f90f2d90",
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(4).webp?alt=media&token=32ddcde1-d894-4728-9216-9ea17380b277",
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(5).webp?alt=media&token=5a4b12ac-30ef-4040-8d8e-44409f67f249",
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(6).webp?alt=media&token=17962c08-7ae4-4d9a-bd02-76ffce915e0c",
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(7).webp?alt=media&token=fe2d9a0d-14dd-4c54-808d-7b88f4873927",
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(8).webp?alt=media&token=e1edd546-1f06-4422-9ca4-7c3db381023b",
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(9).webp?alt=media&token=a7ce6cd5-c425-47d1-8723-6f6c9e861259",
];

// delivery status information
export const deliveryInfo = {
  900: {
    label: "Cancelled",
    color: "#DC3F14",
    value: 900,
  },
  100: {
    label: "Pending",
    color: "#F0A202",
    value: 100,
  },
  200: {
    label: "Packed",
    color: "purple",
    value: 200,
  },
  300: {
    label: "Shipped",
    color: "#344FA9",
    value: 300,
  },
  400: {
    label: "Delivered",
    color: "#2DBA2D",
    value: 400,
  },
  // get supported options (used for change delivry status options)
  getOptions: (status) => {
    return Object.entries(deliveryInfo)
      .filter(([key]) => key < 900 && key !== "getOptions" && key > status)
      .map(([, value]) => value);
  },
};

export const supportedTags = [
  { title: "Popular" },
  { title: "Special" },
  { title: "Trend" },
  { title: "2025" },
  { title: "New Release" },
  { title: "Best Sell" },
  { title: "Coming Soon" },
  { title: "Featured" },
];

// get server time
export const getServerTime = async () => {
  // initalize db
  const db = getDatabase();
  // ref to time offset
  const offsetRef = dbRef(db, ".info/serverTimeOffset");
  let serverTimeOffset = null;
  // get time offset from server
  onValue(
    offsetRef,
    (snapshot) => {
      serverTimeOffset = snapshot.val();
    },
    { onlyOnce: true } // Ensures the listener is removed after the first event
  );
  // Calculate server time
  const serverTime = Date.now() + serverTimeOffset;
  goOffline(db);
  return serverTime;
};
