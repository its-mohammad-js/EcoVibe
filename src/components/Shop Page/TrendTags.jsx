import { motion } from "framer-motion";

const cardsData = [
  {
    title: "2024",
    avatarUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftrend-cards-banner%20(5).webp?alt=media&token=0eb13ee7-01b6-4708-9f73-c6444a13562a",
  },
  {
    title: "Sales",
    avatarUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftrend-cards-banner%20(4).webp?alt=media&token=a67d59d3-07c0-44b8-bf41-8497c046ca75",
  },
  {
    title: "New Release",
    avatarUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftrend-cards-banner%20(6).webp?alt=media&token=f14970e3-64f8-43e5-9fac-d154696d12f9",
  },
  {
    title: "Best Seller ",
    avatarUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftrend-cards-banner%20(3).webp?alt=media&token=70eba716-21d5-4b60-b047-81b04cfff339",
  },
  {
    title: "Top Products",
    avatarUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftrend-cards-banner%20(2).webp?alt=media&token=69f14ff0-9bab-4005-a346-99503e745e89",
  },
  {
    title: "Coming Soon",
    avatarUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftrend-cards-banner%20(1).webp?alt=media&token=deb109c7-d494-4d5d-87f1-d0df2496fbe2",
  },
];

function TrendTags() {
  return (
    <div className="mx-auto 2xl:max-w-screen-2xl mt-6 md:mt-8">
      <div
        id="wrapper"
        className="flex flex-wrap md:flex-nowrap items-center justify-evenly gap-y-8 gap-x-2 lg:gap-x-6 px-2"
      >
        {cardsData.map((card, index) => (
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0, rotateX: 180, scale: 0.5 },
              show: { opacity: 1, rotateX: 0, scale: 1 },
            }}
            transition={{ type: "spring", damping: 30, delay: index / 3 }}
            key={index}
            className="w-full h-40 relative"
          >
            {/* card background */}
            <div className="absolute inset-0 -z-10 shadow-xl">
              <img
                src={card.avatarUrl}
                alt="card banner"
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            <div className="w-full h-full rounded-md flex bg-primary-500/45 flex-col items-center justify-evenly px-4 py-2 gap-2">
              <h4 className="text-3xl md:text-2xl text-white font-bold">
                {card.title}
              </h4>
              <button className="text-primary-950 px-2 p-1 rounded-md bg-primary-50 hover:bg-primary-950 hover:text-white transition-all">
                Show More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TrendTags;
