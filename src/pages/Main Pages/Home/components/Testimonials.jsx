import { useRef } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { BiCommand } from "react-icons/bi";

const testimonialsInfo = [
  {
    useName: "Sara White",
    userJob: "Marketing Manager 🚀",
    comment:
      "Amazing product! It helped me streamline our marketing campaigns effortlessly. Highly recommended! 💯",
    userPic:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftestimonial%20user%20(5).webp?alt=media&token=9b33d65e-8bb3-4942-8757-6e107d57aac8",
  },
  {
    useName: "John Cash",
    userJob: "Graphic Designer 🖌️",
    comment:
      "This tool is a game-changer for designers! It has improved our team's efficiency and creativity. Love it! ❤️",
    userPic:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftestimonial%20user%20(3).webp?alt=media&token=c8300167-fe17-41f1-b393-720a27a570a6",
  },
  {
    useName: "Alex",
    userJob: "Social Media Specialist 📱",
    comment:
      "As a social media specialist, I rely on this product daily to schedule posts and analyze performance. It's a must-have for any social media team! 👍",
    userPic:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftestimonial%20user%20(1).webp?alt=media&token=b6bada1c-4536-4091-9331-8657250bbcc7",
  },

  {
    useName: "Emily",
    userJob: "Fitness Trainer 💪",
    comment:
      "I use this app to plan workouts for my clients and track their progress. It's user-friendly and has enriched my training programs. Fantastic job! 🏋️‍♂️",
    userPic:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftestimonial%20user%20(2).webp?alt=media&token=5db67a72-1b68-4c4d-81c3-314789c62d88",
  },

  {
    useName: "John Doe",
    userJob: "Educator 👩‍🏫",
    comment:
      "Teaching has never been easier with this software! It helps me create engaging lessons and assess student performance effectively. A must-have for educators! 📚",
    userPic:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftestimonial%20user%20(4).webp?alt=media&token=c4aec5b0-9506-417e-9b4e-739894125274",
  },
];

function Testimonials() {
  // ref to slider
  const sliderRef = useRef(null);
  // slider setting
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl">
      <div id="wrapper" className="flex flex-col items-center px-4 py-2">
        {/* title */}
        <div className="w-full md:w-3/4 my-6 flex flex-col gap-y-3">
          <span className="text-primary-400 text-xl font-bold">
            What People Says
          </span>
          <h2 className="text-5xl font-bold w-fit">Client Testimonials</h2>
          <span className="text-gray-500 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fuga
            ratione vel perferendis repellat. Consequuntur consectetur atque
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fuga
            ratione vel perferendis
          </span>
        </div>

        {/* slider container */}
        <div className="w-full flex items-center [&>button]:hidden md:[&>button]:block justify-center gap-x-6">
          {/* previous button */}
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="bg-white shadow-lg shadow-gray-500/10 hover:shadow-gray-500/20 transition-all focus:bg-primary-400 focus:text-white rounded-md p-3 text-2xl"
          >
            <FaArrowLeft />
          </button>
          {/*  */}
          <Slider
            ref={sliderRef}
            {...settings}
            className="w-full md:w-3/4 relative"
          >
            {testimonialsInfo.map((testimonial, index) => (
              <div key={index} className="w-full h-96">
                <div className="w-full h-full flex justify-between items-center">
                  <div className="w-1/3 h-full">
                    <img
                      src={testimonial.userPic}
                      alt={testimonial.useName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 h-full flex flex-col items-center justify-center bg-gradient-to-r relative px-6 py-4">
                    {/* pattern background */}
                    <div className="pattern-bg absolute -z-10 inset-0"></div>
                    {/* main content */}
                    <div className="">
                      <p className="flex text-primary-400 md:text-3xl gap-x-2 my-2">
                        <BiCommand /> <BiCommand />
                      </p>
                      <h4 className="md:text-3xl font-bold mt-4 text-lg">
                        {testimonial.useName}
                      </h4>
                      <span className="text-gray-500 text-sm md:text-base">
                        {testimonial.userJob}
                      </span>

                      <p className="mt-4 md:text-xl line-clamp-6">
                        {testimonial.comment}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          {/* next button */}
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="bg-white shadow-lg shadow-gray-500/10 hover:shadow-gray-500/20 transition-all focus:bg-primary-400 focus:text-white rounded-md p-3 text-2xl"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
