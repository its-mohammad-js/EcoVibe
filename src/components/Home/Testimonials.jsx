import Slider from "react-slick";

const testimonialsInfo = [
  {
    useName: "Sara White",
    userJob: "Marketing Manager 🚀",
    comment:
      "Amazing product! It helped me streamline our marketing campaigns effortlessly. Highly recommended! 💯",
    userPic:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftestimonials%20home%20page%20user%20%20(3).jpg?alt=media&token=e53e46b3-af11-4c4c-9d04-5f884b2a5b13",
  },
  {
    useName: "John Cash",
    userJob: "Graphic Designer 🖌️",
    comment:
      "This tool is a game-changer for designers! It has improved our team's efficiency and creativity. Love it! ❤️",
    userPic:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftestimonials%20home%20page%20user%20%20(4).jpg?alt=media&token=3808a05d-797f-43b8-956b-a0407ffab9b4",
  },
  {
    useName: "Emily",
    userJob: "Social Media Specialist 📱",
    comment:
      "As a social media specialist, I rely on this product daily to schedule posts and analyze performance. It's a must-have for any social media team! 👍",
    userPic:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftestimonials%20home%20page%20user%20%20(2).jpg?alt=media&token=023534de-cad4-4cfe-8bc5-893616d4649e",
  },

  {
    useName: "Alex Nate",
    userJob: "Fitness Trainer 💪",
    comment:
      "I use this app to plan workouts for my clients and track their progress. It's user-friendly and has enriched my training programs. Fantastic job! 🏋️‍♂️",
    userPic:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftestimonials%20home%20page%20user%20%20(5).jpg?alt=media&token=129bdfe8-6b2d-4b85-84c0-14080d1a2f3f",
  },

  {
    useName: "John Doe",
    userJob: "Educator 👩‍🏫",
    comment:
      "Teaching has never been easier with this software! It helps me create engaging lessons and assess student performance effectively. A must-have for educators! 📚",
    userPic:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftestimonials%20home%20page%20user.jpg?alt=media&token=0cf99671-9422-4673-84a9-9681a9d91b56",
  },
];

function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    // arrows: false,
    speed: 500,
    slidesToShow: 1,
    // slidesToScroll: 1,
  };

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl">
      <div id="wrapper" className="flex flex-col items-center">
        <div className="w-2/5 my-6 flex flex-col gap-y-4">
          <span className="text-primary-600 text-xl font-bold">
            What People Says
          </span>
          <h2 className="text-5xl font-bold">Client Testimonials</h2>
          <span className="text-gray-500 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fuga
            ratione vel perferendis repellat. Consequuntur consectetur atque
          </span>
        </div>

        <Slider {...settings} className="w-3/4">
          {testimonialsInfo.map((testimonial, index) => (
            <div
              key={index}
              className="w-full h-96 flex items-center justify-center bg-red-100"
            >
              {/* <img
                src={testimonial.userPic}
                alt="user img"
                className="w-1/3 h-full object-cover bg-red-800"
              /> */}
              <div>lergt</div>
              <div>hey</div>
              {/* <div className="w-1/3 h-full bg-red-600 flex flex-col items-center justify-center px-6 py-3">
                <span>icons</span>
                <h4>{testimonial.useName}</h4>
                <p>{testimonial.userJob}</p>

                <p>{testimonial.comment}</p>
              </div> */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
