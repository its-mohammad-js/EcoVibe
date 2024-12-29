import { motion } from "framer-motion";
import { partnerslogo, testimonials } from "./constants";

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
