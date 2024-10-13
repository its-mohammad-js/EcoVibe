import HeroSection from "./components/HeroSection";
import SellerServices from "./components/SellerServices";
import OurTeam from "./components/OurTeam";
import OurPartners from "./components/OurPartners";
import Faq from "./components/Faq";

function SellerSolutionsPage() {
  return (
    <div className="mx-auto 2xl:max-w-screen-2xl">
      <HeroSection />
      <SellerServices />
      <OurPartners />
      {/* banner */}
      <div className="bg-primary-900 pt-4 lg:flex items-center justify-between">
        <div className="px-4 py-2 lg:py-4 flex flex-col gap-y-6 lg:justify-evenly lg:h-full lg:basis-3/5">
          <h4 className="text-gray-200 text-3xl lg:text-5xl font-bold">
            Control the flow. <br />
            <p className="text-primary-400">Work faster.</p>
          </h4>
          <p className="text-gray-200 lg:text-lg lg:w-3/5 text-lg">
            Scelerisque auctor dolor diam tortor, fames faucibus non interdum
            nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie
            adipiscing lacinia. &nbsp;
            <span>
              Scelerisque auctor dolor diam tortor, fames faucibus non interdum
              nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie
              adipiscing lacinia. Scelerisque auctor dolor diam tortor, fames
              faucibus non interdum nunc.
            </span>
          </p>
          <button className="px-4 py-2 text-gray-50 w-fit bg-primary-400 rounded-lg text-lg">
            Start For Free
          </button>
        </div>
        <div className="w-full pl-4 flex items-center justify-end mt-8 lg:basis-2/5 lg:h-full">
          <img
            className="rounded-tl-xl w-full h-52 lg:h-full object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsellers%20page%20banner.webp?alt=media&token=9679c2b0-9cac-4f9f-9ce7-9379bdbda0b1"
            alt="banner-img"
          />
        </div>
      </div>
      <OurTeam />
      <Faq />
    </div>
  );
}

export default SellerSolutionsPage;
