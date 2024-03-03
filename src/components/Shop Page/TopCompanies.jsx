const logoData = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fcompany-banner%20(3).webp?alt=media&token=41d209c1-e5f3-490b-9451-83fa71260601",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fcompany-banner%20(2).webp?alt=media&token=597ee118-5bc1-4127-81b4-a2e9ccf2c0f1",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fcompany-banner%20(4).webp?alt=media&token=18e5ace2-7c20-4aed-ba9a-8ea73a4c9b1c",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fcompany-banner%20(1).webp?alt=media&token=fb674a1b-4c64-47e1-9d0b-9cf9dd1997df",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fcompany-banner%20(5).webp?alt=media&token=52577425-0922-4ad2-bfcf-223afbe3de65",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fcompany-banner%20(6).webp?alt=media&token=ca03b220-dc36-4b8e-abae-5848f848fe8d",
  },
];

function TopCompanies() {
  return (
    <div className="mx-auto 2xl:max-w-screen-2xl mt-6 md:mt-8">
      <div
        id="wrapper"
        className="bg-gray-100 flex flex-col items-center gap-y-10 md:h-96 md:justify-evenly px-4 py-8"
      >
        {/* title */}
        <div className="text-center flex flex-col gap-y-1.5 md:gap-y-2">
          <p className="text-base md:text-xl text-primary-400 font-semibold">
            Work With Us!
          </p>
          <h4 className="text-3xl md:text-5xl font-bold">
            {" "}
            Big Companies Are Here
          </h4>
          <span className="text-sm text-gray-600 md:text-lg">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </span>
        </div>
        {/* company logo's */}
        <div className="flex flex-col md:flex-row md:justify-evenly items-center gap-y-10 w-full">
          {logoData.map(({ url }, index) => (
            <img
              key={index}
              src={url}
              className="w-32 md:w-28 lg:w-36 h-18 object-cover md:hover:rotate-12 transition-all"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopCompanies;
