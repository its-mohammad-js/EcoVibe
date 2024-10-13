import { motion } from "framer-motion";

const partnerslogo = [
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsellers%20partner%20logo%20(1).png?alt=media&token=390cfba2-bf23-4733-8715-74b8960c76dc",
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsellers%20partner%20logo%20(7).png?alt=media&token=edf273bb-6913-4126-b465-109ca76775dc",
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsellers%20partner%20logo%20(9).png?alt=media&token=159a2b5d-c606-4d07-a6a1-6eef177e08b8",
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsellers%20partner%20logo%20(3).png?alt=media&token=57b56797-c3d0-4900-8242-d5b97f3671d9",
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsellers%20partner%20logo%20(5).png?alt=media&token=b1e209fb-2641-430c-b222-6d250afafde4",
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsellers%20partner%20logo%20(4).png?alt=media&token=ee1d38f1-29fe-4c44-b1cc-04b2fd80f1d6",
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsellers%20partner%20logo%20(2).png?alt=media&token=426a33d0-0930-49ea-bae2-1b9459244d07",
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsellers%20partner%20logo%20(8).png?alt=media&token=c3a305ce-f6ee-40fc-9776-3be112142a0b",
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsellers%20partner%20logo%20(6).png?alt=media&token=ea50566f-d415-45a7-a2cd-29b7b0812472",
];

const testimonials = [
  {
    author: "Alice Smith",
    jobTitle: "Marketing Manager",
    content:
      "This project was a great learning experience. The team was collaborative and supportive, which helped us achieve fantastic results. I'm excited to see what we can accomplish next!",
    authorImage:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsellers-testimoinals-1-6666eac5c99a9.webp?alt=media&token=57abef88-028c-4b5f-9041-03c2ba5be3fe",
  },
  {
    author: "David Jones",
    jobTitle: "Software Engineer",
    content:
      "The design was very clear and easy to understand. This made development much smoother and allowed us to focus on implementing the features. Great work!",
    authorImage:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsellers-testimoinals-2-6666eac2e4de4.webp?alt=media&token=09c616cc-da10-42ed-8728-a3de377b94a4",
  },
  {
    author: "Emily Brown",
    jobTitle: "Customer Service Representative",
    content:
      "The recent training session was incredibly informative. I feel much more confident now when handling complex customer inquiries. Thank you!",
    authorImage:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fseller-testimoinal-3-6666efb593910.webp?alt=media&token=c76ace1a-53c7-4bd4-8854-dc6f38baf4ad",
  },
  {
    author: "Michael Lee",
    jobTitle: "Graphic Designer",
    content:
      "The client absolutely loved the final design! They were impressed with the creativity and attention to detail. Great job everyone!",
    authorImage:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsellers-testimoinals-4-6666eae29c2ae.webp?alt=media&token=a28b3e97-0d2f-45f6-8fd0-1ffb2882ad4b",
  },
  {
    author: "Sarah Garcia",
    jobTitle: "Content Writer",
    content:
      "The research provided for this project was invaluable. It helped me to develop well-informed and engaging content. Thanks for all the hard work!",
    authorImage:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsellers-testimoinals-5-6666eae6124f8.webp?alt=media&token=e79b6298-6de4-46e6-882d-509a0c8c736d",
  },
];

function OurPartners() {
  const duplicatedSlides = [...testimonials, ...testimonials];

  return (
    <div className="my-4 lg:my-6">
      {/* partners logo */}
      <div className="bg-slate-100 px-4 py-8 my-4 lg:my-6">
        <h4 className="text-center mb-4 lg:mb-10 text-4xl lg:text-5xl font-bold">
          Our Top Partners
        </h4>
        <div className="flex flex-wrap items-center justify-evenly gap-4">
          {partnerslogo.map((url, index) => (
            <motion.img
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ type: "spring", damping: 30, delay: 0.2 * index }}
              src={url}
              alt="partner-logo"
              key={index}
              className="object-contain w-1/4 h-12 lg:size-24"
            />
          ))}
        </div>
      </div>
      {/* testimonials */}
      <div className="relative w-full overflow-hidden my-4 px-4 py-2">
        {/* titles */}
        <div className="text-center">
          <h4 className="text-2xl lg:text-6xl font-bold leading-10">
            Our partners. Our Friends. <br />
            <span className="text-primary-500 ">They love us.</span>
          </h4>
          <p className="my-4 lg:my-5 lg:text-lg leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus neque ad iusto eligendi. Asperiores magni dolores
            officia delectus cum voluptatem nesciunt distinctio placeat
            explicabo modi odio natus nihil earum,
            <span className="hidden lg:inline">
              &nbsp; labore aperiam perspiciatis voluptas vel impedit quaerat
              sapiente deleniti architecto accusantium temporibus voluptate.
              Delectus blanditiis, esse laudantium iure repellat minus
              perferendis?
            </span>
          </p>
        </div>
        {/* feedback slides */}
        <motion.div
          drag={false}
          className="inline-flex gap-x-10"
          animate={{
            x: ["-50%", "0%"],
            transition: {
              ease: "linear",
              duration: 45,
              repeat: Infinity,
            },
          }}
        >
          {/* Render duplicated slides */}
          {duplicatedSlides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-slate-600 px-4 py-2 rounded-lg flex flex-col w-56 lg:w-72 gap-4"
            >
              <div className="flex items-center gap-x-2">
                <img
                  src={slide.authorImage}
                  alt="author-image"
                  className="size-16 rounded-full object-cover"
                />

                <div className="w-3/5">
                  <h6 className="text-lg line-clamp-1 mb-0.5 font-semibold text-gray-200">
                    {slide.author}
                  </h6>
                  <p className="line-clamp-1 text-gray-400 text-sm">
                    {slide.jobTitle}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 lg:text-xl">{slide.content}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default OurPartners;
