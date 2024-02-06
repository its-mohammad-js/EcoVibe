import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { heroSectionImages } from "../../helpers/constants";
import { TbClock } from "react-icons/tb";

const HeroSection = () => {
  return (
    <div className="mx-auto 2xl:max-w-screen-2xl">
      {/* hero slides */}
      <div className="flex flex-col md:flex-row gap-y-2 gap-x-2 items-center justify-between px-2 py-1">
        <div className="md:h-[500px] h-80 md:w-2/3 w-full justify-center items-center bg-blue-400 rounded-md relative">
          <div className="absolute inset-0 w-full h-full z-0">
            <img
              src={heroSectionImages.homePage.img03}
              alt="hero-image"
              className="w-full h-full object-cover object-center rounded-md"
            />
          </div>
          <div className="bg-black bg-opacity-25 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-700 absolute w-full h-full z-10 flex flex-col items-start justify-center px-6 py-2 rounded-md">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              Fresh & Healthy <br />
              <span className="text-primary-500">Organic&nbsp;</span>
              Food
            </h1>
            <div className="flex flex-col items-start justify-between md:gap-y-4 gap-y-2 md:px-4 mf:py-2 px-2 py-1 border-l-4 mt-2 border-primary-600">
              <p className="text-white text-lg md:text-xl cursor-pointer">
                Sale up to
                <span className="bg-primary-500 text-white px-2 py-1 rounded-md mx-2 hover:px-3 hover:py-1.5 transition-all duration-300">
                  30% OFF
                </span>
              </p>
              <span className="text-primary-800 text-sm md:text-xl bg-white bg-opacity-10 cursor-pointer">
                Free shipping on all your order.
              </span>
            </div>
            <button className="md:px-10 px-4 font-semibold hover:bg-primary-700 hover:text-white transition-all duration-500 py-2 bg-white text-primary-600 ml-2 mt-4 rounded-lg text-sm md:text-lg">
              Shop Now
            </button>
          </div>
        </div>

        <div className="flex w-full md:w-1/3 items-center md:gap-y-5 md:flex-col justify-between gap-x-2">
          <div className="relative w-1/2 md:w-full md:h-[240px] h-24 rounded-md bg-amber-300">
            <div className="absolute inset-0 w-full h-full z-0">
              <img
                src={heroSectionImages.homePage.img01}
                alt="hero-image"
                className="w-full h-full object-cover object-c rounded-md"
              />
            </div>

            <div className="bg-black bg-opacity-30 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-700 absolute w-full h-full z-10 flex flex-col gap-y-1 items-center md:items-start justify-center px-6 py-2 rounded-md">
              <p className="text-white text-xs md:text-lg font-semibold">
                Summer Sale
              </p>
              <p className="text-white text-sm md:text-3xl font-bold border-b-4 border-b-primary-500">
                75% OFF
              </p>
              <span className="md:text-sm text-gray-300 text-xs md:block hidden">
                Only Fashion & clothes
              </span>
              <button className="md:px-3 md:py-1.5 text-xs px-2 py-1 md:text-base bg-primary-400 rounded-lg text-white flex items-center justify-center gap-x-2 hover:scale-110 transition-all duration-300">
                <span>Shop Now</span>
                <FaArrowLeft className="rotate-180" />
              </button>
            </div>
          </div>
          <div className="md:w-full w-1/2 md:h-[240px] h-24 rounded-md bg-accent-400 relative">
            <div className="absolute inset-0 w-full h-full z-0">
              <img
                src={heroSectionImages.homePage.img02}
                alt="hero-image"
                className="w-full h-full object-cover object-c rounded-md"
              />
            </div>

            <div className="bg-black bg-opacity-30 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-700 absolute w-full h-full z-10 flex flex-col gap-y-0.5 md:gap-y-1 items-center justify-center px-6 py-2 rounded-md">
              <p className="text-white md:text-lg text-xs font-semibold">
                Best Deal
              </p>
              <p className="text-white text-xs md:text-2xl lg:text-3xl font-bold border-b md:border-b-4 border-b-primary-500">
                Special Products <br /> Deal of the Month
              </p>
              <button className="md:px-3 md:py-1.5 px-2 py-1 text-xs md:text-lg rounded-lg text-white flex items-center justify-center gap-x-2 hover:scale-110 transition-all duration-300">
                <span>Shop Now</span>
                <FaArrowLeft className="rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* hero footer */}
      <div className="">
        {/* featues section (only visible on desktop) */}
        <div className="hidden md:flex items-center mx-auto w-[99%] px-2 py-1 my-4 rounded-lg bg-gray-50 shadow-xl xl:justify-around justify-between">
          <div className="flex items-center gap-x-3 lg:gap-x-4 justify-center h-20 px-2 py-1 group">
            <span className="group-hover:scale-125 transition-all duration-500">
              <svg
                width="40"
                height="28"
                viewBox="0 0 40 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.7021 20.3042C31.7247 20.3042 30.7962 20.687 30.0957 21.3793C29.3952 22.0798 29.0043 22.992 29.0043 23.9694C29.0043 24.9468 29.3871 25.8591 30.0957 26.5595C30.8043 27.2519 31.7247 27.6347 32.7021 27.6347C34.7058 27.6347 36.3348 25.9894 36.3348 23.9694C36.3348 21.9495 34.7058 20.3042 32.7021 20.3042ZM32.7021 26.0057C31.5781 26.0057 30.6333 25.0772 30.6333 23.9694C30.6333 22.8617 31.5781 21.9332 32.7021 21.9332C33.8098 21.9332 34.7058 22.8454 34.7058 23.9694C34.7058 25.0935 33.8098 26.0057 32.7021 26.0057ZM33.6469 8.09488C33.5003 7.95641 33.3048 7.88311 33.1012 7.88311H28.9228C28.4749 7.88311 28.1083 8.24964 28.1083 8.69761V15.3765C28.1083 15.8245 28.4749 16.191 28.9228 16.191H35.5528C36.0008 16.191 36.3673 15.8245 36.3673 15.3765V10.9049C36.3673 10.6768 36.2696 10.4569 36.0986 10.3022L33.6469 8.09488ZM34.7383 14.562H29.7373V9.50396H32.7835L34.7383 11.2633V14.562ZM12.8121 20.3042C11.8347 20.3042 10.9061 20.687 10.2057 21.3793C9.50519 22.0798 9.11423 22.992 9.11423 23.9694C9.11423 24.9468 9.49705 25.8591 10.2057 26.5595C10.9143 27.2519 11.8347 27.6347 12.8121 27.6347C14.8157 27.6347 16.4447 25.9894 16.4447 23.9694C16.4447 21.9495 14.8157 20.3042 12.8121 20.3042ZM12.8121 26.0057C11.688 26.0057 10.7432 25.0772 10.7432 23.9694C10.7432 22.8617 11.688 21.9332 12.8121 21.9332C13.9198 21.9332 14.8157 22.8454 14.8157 23.9694C14.8157 25.0935 13.9198 26.0057 12.8121 26.0057ZM7.37935 21.306H5.74221V19.1395C5.74221 18.6915 5.37569 18.325 4.92771 18.325C4.47974 18.325 4.11322 18.6915 4.11322 19.1395V22.1205C4.11322 22.5685 4.47974 22.935 4.92771 22.935H7.37935C7.82733 22.935 8.19385 22.5685 8.19385 22.1205C8.19385 21.6726 7.82733 21.306 7.37935 21.306ZM11.5089 16.867C11.5089 16.4191 11.1423 16.0525 10.6944 16.0525H0.814498C0.366524 16.0525 0 16.4191 0 16.867C0 17.315 0.366524 17.6815 0.814498 17.6815H10.6944C11.1423 17.6815 11.5089 17.3231 11.5089 16.867ZM2.46793 13.9267L12.3478 13.9837C12.7958 13.9837 13.1623 13.6253 13.1704 13.1773C13.1786 12.7212 12.8121 12.3547 12.3641 12.3547L2.48422 12.2977C2.47607 12.2977 2.47607 12.2977 2.47607 12.2977C2.0281 12.2977 1.66158 12.6561 1.66158 13.104C1.65343 13.5602 2.01996 13.9267 2.46793 13.9267ZM4.12951 10.2289H14.0094C14.4573 10.2289 14.8239 9.86234 14.8239 9.41437C14.8239 8.96639 14.4573 8.59987 14.0094 8.59987H4.12951C3.68153 8.59987 3.31501 8.96639 3.31501 9.41437C3.31501 9.86234 3.68153 10.2289 4.12951 10.2289ZM39.6986 9.12929L33.8668 4.29932C33.7202 4.17715 33.541 4.11199 33.3456 4.11199H26.4875V1.17979C26.4875 0.73182 26.121 0.365295 25.673 0.365295H4.92771C4.47974 0.365295 4.11322 0.73182 4.11322 1.17979V7.14192C4.11322 7.58989 4.47974 7.95642 4.92771 7.95642C5.37569 7.95642 5.74221 7.58989 5.74221 7.14192V1.99429H24.8666V21.306H18.1877C17.7398 21.306 17.3732 21.6726 17.3732 22.1205C17.3732 22.5685 17.7398 22.935 18.1877 22.935H28.1328C28.5807 22.935 28.9473 22.5685 28.9473 22.1205C28.9473 21.6726 28.5807 21.306 28.1328 21.306H26.4956V5.74098H33.0605L38.371 10.1393L38.314 21.2897H37.4669C37.0189 21.2897 36.6524 21.6563 36.6524 22.1042C36.6524 22.5522 37.0189 22.9187 37.4669 22.9187H39.1203C39.5683 22.9187 39.9348 22.5604 39.9348 22.1124L40 9.7646C39.9919 9.52025 39.886 9.28405 39.6986 9.12929Z"
                  fill="#445bee"
                />
              </svg>
            </span>
            <h3 className="flex flex-col justify-center gap-y-2 h-full">
              <span className="font-bold">Free Shipping</span>
              <span className="text-xs line-clamp-1">
                Free shipping on all your order
              </span>
            </h3>
          </div>
          <div className="flex items-center gap-x-3 lg:gap-x-4 justify-center h-20 px-2 py-1 group">
            <span className="group-hover:scale-125 transition-all duration-500">
              <svg
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_44_853)">
                  <path
                    d="M34.0182 15.2101V13.6723C34.0182 9.9916 32.7157 6.57143 30.3543 4.03361C27.9342 1.42857 24.6064 0 20.9762 0H19.7073C16.077 0 12.7493 1.42857 10.3291 4.03361C7.96778 6.57143 6.66526 9.9916 6.66526 13.6723V15.2101C3.79971 15.4034 1.5224 17.7899 1.5224 20.7059V23.1092C1.5224 26.1429 3.99299 28.6134 7.0266 28.6134H10.1274C10.6821 28.6134 11.1358 28.1597 11.1358 27.605V16.2017C11.1358 15.6471 10.6821 15.1933 10.1274 15.1933H8.68206V13.6723C8.68206 7.02521 13.4216 2.01681 19.6989 2.01681H20.9678C27.2535 2.01681 31.9846 7.02521 31.9846 13.6723V15.1933H30.5392C29.9846 15.1933 29.5308 15.6471 29.5308 16.2017V27.5966C29.5308 28.1513 29.9846 28.605 30.5392 28.605H31.951C31.5392 33.8655 27.9174 35.084 26.2367 35.3613C25.7745 33.9412 24.4384 32.916 22.8669 32.916H20.3459C18.3964 32.916 16.8081 34.5042 16.8081 36.4538C16.8081 38.4034 18.3964 40 20.3459 40H22.8753C24.5056 40 25.8753 38.8908 26.2871 37.395C27.1106 37.2773 28.4132 36.9832 29.7073 36.2269C31.5308 35.1597 33.6905 32.9832 33.9762 28.5966C36.8585 28.4202 39.1443 26.0252 39.1443 23.1008V20.6975C39.1527 17.7899 36.8838 15.395 34.0182 15.2101ZM9.13585 26.5882H7.04341C5.11904 26.5882 3.55601 25.0252 3.55601 23.1008V20.6975C3.55601 18.7731 5.11904 17.2101 7.04341 17.2101H9.13585V26.5882ZM22.8753 37.9832H20.3459C19.5056 37.9832 18.8249 37.3025 18.8249 36.4622C18.8249 35.6218 19.5056 34.9412 20.3459 34.9412H22.8753C23.7157 34.9412 24.3964 35.6218 24.3964 36.4622C24.3964 37.3025 23.7157 37.9832 22.8753 37.9832ZM37.1359 23.1008C37.1359 25.0252 35.5728 26.5882 33.6485 26.5882H31.556V17.2101H33.6485C35.5728 17.2101 37.1359 18.7731 37.1359 20.6975V23.1008Z"
                    fill="#445bee"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_44_853">
                    <rect
                      width="40"
                      height="40"
                      fill="white"
                      transform="translate(0.333344)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <h3 className="flex flex-col justify-center gap-y-2 h-full">
              <span className="font-bold">Free Shipping</span>
              <span className="text-xs line-clamp-1">
                Free shipping on all your order
              </span>
            </h3>
          </div>
          <div className="flex items-center gap-x-3 lg:gap-x-4 justify-center h-20 px-2 py-1 group">
            <span className="group-hover:scale-125 transition-all duration-500">
              <svg
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_44_884)">
                  <path
                    d="M36.6468 34.6678L34.345 8.72697C34.3036 8.21362 33.873 7.82447 33.3514 7.82447H28.4994C28.4911 3.51066 24.9805 0 20.6666 0C16.3528 0 12.8422 3.51066 12.8339 7.82447H7.9819C7.46855 7.82447 7.03799 8.21362 6.98831 8.72697L4.68651 34.6678C4.68651 34.7009 4.68651 34.7257 4.68651 34.7589C4.68651 37.6485 7.34435 40 10.6066 40H30.7267C33.9889 40 36.6468 37.6485 36.6468 34.7589C36.6468 34.7257 36.6468 34.7009 36.6468 34.6678ZM20.6666 1.98717C23.8875 1.98717 26.5039 4.6036 26.5122 7.82447H14.8211C14.8293 4.6036 17.4458 1.98717 20.6666 1.98717ZM30.7267 38.0046H10.6066C8.45385 38.0046 6.69852 36.5721 6.67368 34.792L8.89268 9.81163H12.8339V13.2975C12.8339 13.8439 13.281 14.291 13.8275 14.291C14.3739 14.291 14.8211 13.8439 14.8211 13.2975V9.81163H26.5122V13.2975C26.5122 13.8439 26.9593 14.291 27.5058 14.291C28.0523 14.291 28.4994 13.8439 28.4994 13.2975V9.81163H32.4406L34.6596 34.8002C34.6348 36.5721 32.8794 38.0046 30.7267 38.0046Z"
                    fill="#445bee"
                  />
                  <path
                    d="M24.7982 20.6831L18.9361 26.5452L16.5432 24.1524C16.1541 23.7632 15.5248 23.7632 15.1357 24.1524C14.7465 24.5415 14.7465 25.1708 15.1357 25.5599L18.2323 28.6566C18.4228 28.8471 18.6794 28.9464 18.9361 28.9464C19.1928 28.9464 19.4412 28.8471 19.6399 28.6566L26.2058 22.0907C26.595 21.7015 26.595 21.0723 26.2058 20.6831C25.8167 20.3022 25.1874 20.3022 24.7982 20.6831Z"
                    fill="#445bee"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_44_884">
                    <rect
                      width="40"
                      height="40"
                      fill="white"
                      transform="translate(0.666687)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <h3 className="flex flex-col justify-center gap-y-2 h-full">
              <span className="font-bold">Free Shipping</span>
              <span className="text-xs line-clamp-1">
                Free shipping on all your order
              </span>
            </h3>
          </div>
          <div className="flex items-center gap-x-3 lg:gap-x-4 justify-center h-20 px-2 py-1 group">
            <span className="group-hover:scale-125 transition-all duration-500">
              <svg
                width="38"
                height="40"
                viewBox="0 0 38 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.3959 9.43014C37.3959 9.27818 37.3621 9.12621 37.2946 8.98269C37.1595 8.69565 36.8978 8.50148 36.6108 8.44238L19.4136 0.101309C19.135 -0.0337695 18.8058 -0.0337695 18.5272 0.101309L1.16121 8.51836C0.823514 8.67877 0.604012 9.01646 0.587128 9.39637V9.40481C0.587128 9.41325 0.587128 9.4217 0.587128 9.43858V30.5614C0.587128 30.9498 0.80663 31.3043 1.16121 31.4732L18.5272 39.8903C18.5356 39.8903 18.5356 39.8903 18.5441 39.8987C18.5694 39.9071 18.5947 39.9156 18.6201 39.9325C18.6285 39.9325 18.6369 39.9409 18.6538 39.9409C18.6791 39.9493 18.7045 39.9578 18.7298 39.9662C18.7382 39.9662 18.7467 39.9747 18.7551 39.9747C18.7805 39.9831 18.8142 39.9831 18.8396 39.9916C18.848 39.9916 18.8564 39.9916 18.8649 39.9916C18.8987 39.9916 18.9409 40 18.9746 40C19.0084 40 19.0506 40 19.0844 39.9916C19.0928 39.9916 19.1013 39.9916 19.1097 39.9916C19.135 39.9916 19.1688 39.9831 19.1941 39.9747C19.2026 39.9747 19.211 39.9662 19.2195 39.9662C19.2448 39.9578 19.2701 39.9493 19.2954 39.9409C19.3039 39.9409 19.3123 39.9325 19.3292 39.9325C19.3545 39.924 19.3799 39.9156 19.4052 39.8987C19.4136 39.8987 19.4136 39.8987 19.4221 39.8903L36.8387 31.4479C37.1848 31.279 37.4128 30.9244 37.4128 30.5361V9.45547C37.3959 9.44702 37.3959 9.43858 37.3959 9.43014ZM18.9662 2.13592L34.0274 9.43858L28.4808 12.1317L13.4195 4.82904L18.9662 2.13592ZM18.9662 16.7412L3.90498 9.43858L11.0979 5.95188L26.1591 13.2545L18.9662 16.7412ZM2.6133 11.068L17.9531 18.5057V37.3575L2.6133 29.9198V11.068ZM19.9793 37.3575V18.5057L27.1806 15.0106V19.9409C27.1806 20.4981 27.6365 20.954 28.1937 20.954C28.7509 20.954 29.2068 20.4981 29.2068 19.9409V14.0228L35.3697 11.0342V29.886L19.9793 37.3575Z"
                  fill="#445bee"
                />
              </svg>
            </span>
            <h3 className="flex flex-col justify-center gap-y-2 h-full">
              <span className="font-bold">Free Shipping</span>
              <span className="text-xs line-clamp-1">
                Free shipping on all your order
              </span>
            </h3>
          </div>
        </div>

        {/* offer banner (only visible on mobile) */}
        <div className="md:hidden flex h-20 mx-auto w-[95%] px-4 py-2 bg-primary-900/90 rounded-lg items-center justify-between">
          <div className="flex flex-col justify-evenly h-full">
            <h2 className="text-lg text-white">Deal Of The Day</h2>
            <p className="flex items-center justify-center gap-x-1 py-1 text-gray-300">
              <TbClock className="text-2xl" />
              <span className="text-xs">22h 55m 20s remaining </span>
            </p>
          </div>
          <button className="flex items-center justify-center hover:bg-white hover:text-primary-500 hover:font-semibold text-white border border-gray-100 px-2 py-1 rounded-md text-sm gap-x-1.5">
            <span>View All</span>
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
