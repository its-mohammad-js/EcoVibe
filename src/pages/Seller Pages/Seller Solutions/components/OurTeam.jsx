import { FaArrowRight } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const partnersLogo = [
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Four%20team%20logo%20(1).webp?alt=media&token=522f77b2-ff87-4211-a210-bb8cf5715ba8",
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Four%20team%20logo%20(2).webp?alt=media&token=4931af0f-7a51-4889-9153-3827e08c96c5",
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Four%20team%20logo%20(3).webp?alt=media&token=bc5590b7-e2ac-4e02-bdce-b569efac0d33",
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Four%20team%20logo%20(4).webp?alt=media&token=b72d54e1-96a8-4793-8306-c5b04db1bb4d",
];

const featuresInfo = [
  {
    title: "Add Your Location",
    subtitle:
      "Pinpoint Your Presence: Add your location to connect with local buyers and establish a sense of community on our platform.",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ffeature%20icon%20(1).png?alt=media&token=53099477-5408-4ad5-a4e4-725a17973721",
  },
  {
    title: "Fast Delivery",
    subtitle:
      "Speedy Service Guarantee: Enjoy fast delivery options to give your customers a seamless shopping experience and drive sales.",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ffeature%20icon%20(2).png?alt=media&token=8ac8fb0a-81a7-426f-b387-fe93465db0c6",
  },
  {
    title: "Manage Your Team",
    subtitle:
      "Team Management Made Easy: Streamline operations and empower collaboration by efficiently managing your team within our platform.",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ffeature%20icon%20(3).png?alt=media&token=9a93b1a9-2eac-4ea5-99c3-0e7d36f57ec9",
  },
  {
    title: "Secure payment",
    subtitle:
      "Payment Protection Assurance: Ensure secure transactions with trusted payment gateways to build customer trust and safeguard financial information.",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ffeature%20icon%20(4).png?alt=media&token=dca09f61-072e-4410-a630-9dfb399c7be8",
  },
  {
    title: "Flexible workspace",
    subtitle:
      "Customize Your Workspace: Adapt your selling environment to suit your needs and maximize productivity with our flexible workspace options.",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ffeature%20icon%20(5).png?alt=media&token=78aa8c4d-6bbf-4b3b-9ee3-8bc35904df58",
  },
  {
    title: "Analyze Your Sell",
    subtitle:
      "Track Your Performance: Utilize our tools to analyze your sales data and gain insights to optimize strategies for business growth.",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ffeature%20icon%20(6).png?alt=media&token=cdb25448-5911-4f47-90e4-dd7e8898d6ea",
  },
  {
    title: "Store Credit & Cash",
    subtitle:
      "Choose Your Rewards: Offer customers the choice between store credit or cash rewards to boost sales and loyalty on our platform.",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ffeature%20icon%20(7).png?alt=media&token=03a7c651-1557-4f9c-9cc4-fbd8c609673b",
  },
  {
    title: "Competitive environment",
    subtitle:
      "Embrace Competition: Thrive in a competitive environment that pushes you to innovate, excel, and stand out among your peers.",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ffeature%20icon%20(8).png?alt=media&token=9415c805-49ee-406b-a070-7af909bedd86",
  },
  {
    title: "Find Target Audience",
    subtitle:
      "Target Your Audience: Identify and connect with your ideal customer base through targeted marketing strategies tailored to their preferences.",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ffeature%20icon%20(9).png?alt=media&token=a87919f6-4d68-4571-b5b6-7b6fba6a026a",
  },
];

function OurTeam() {
  return (
    <div className="">
      {/* our team section */}
      <div className="my-4 px-4 py-2 lg:px-6 lg:py-4 flex flex-col gap-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:h-96">
          <div className="flex flex-col gap-y-4 lg:h-full lg:justify-evenly lg:basis-1/2">
            <h4 className="text-4xl lg:text-5xl font-bold">
              Team projects, done well
            </h4>
            <p className="lg:text-lg">
              The only platform that gives your team all the tools needed to
              work together on their awesome projects.
              <span className="hidden lg:inline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                quidem expedita veritatis saepe nisi? Molestiae labore provident
                distinctio necessitatibus et.
              </span>
            </p>
            <div className="flex items-center gap-x-2 justify-between">
              <div className="flex items-center gap-x-2 px-2 py-1 lg:px-4 lg:py-1.5 border-2 w-2/3 lg:w-3/4 rounded-md">
                <p className="text-2xl lg:text-3xl text-gray-400">
                  <MdMail />
                </p>
                <input
                  type="text"
                  placeholder="Enter Work Email"
                  className="outline-none w-11/12 px-2 text-sm  lg:text-lg"
                />
              </div>
              <button className="px-2 py-1.5 lg:py-2 lg:text-lg bg-primary-400 rounded-md text-gray-200 flex items-center justify-center gap-x-2 w-1/3 lg:w-1/4">
                <p>sign up</p>
                <FaArrowRight />
              </button>
            </div>
            <div className="grid grid-cols-4 lg:flex items-center justify-evenly gap-6 lg:gap-10 px-4 p-2 bg-slate-200/80 rounded-md">
              {partnersLogo.map((url, index) => (
                <img key={index} src={url} />
              ))}
            </div>
          </div>

          <img
            src="https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fseller%20page%20banner%202.webp?alt=media&token=b6a5d4cc-1a26-4c29-83c7-356ae4ec90bc"
            alt="our-team-banner"
            className="size-full lg:max-h-full lg:basis-2/5"
          />
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:h-96">
          <div className="flex flex-col gap-y-4 lg:h-full lg:justify-evenly lg:basis-1/2 lg:order-2">
            <h4 className="text-4xl lg:text-5xl font-bold">
              Enjoy your time working
            </h4>
            <p className="lg:text-lg">
              Etiam condimentum duis molestie malesuada volutpat pellentesque
              sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi
              tempus quis massa tellus imperdiet aenean nulla id. &nbps;
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Placeat optio quia delectus reiciendis alias assumenda soluta
                atque porro quas odio repellendus, accusantium quam molestias,
                sint laborum? Perferendis mollitia sapiente veniam quas nostrum
                inventore voluptate consequatur in adipisci ut numquam, ullam
                accusantium et nesciunt hic sit officia fuga. Voluptatem,
                excepturi consequuntur.
              </span>
            </p>
            <button className="flex items-center gap-x-2 text-primary-400">
              <p>See how it helped others</p>
              <p>
                <FaArrowRight />
              </p>
            </button>
          </div>

          <img
            src="https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Four%20team%20banner%202.webp?alt=media&token=c75a0d81-6e7f-402d-ac00-03c111532b1a"
            alt="our-team-banner"
            className="h-full"
          />
        </div>
      </div>
      {/* banner */}
      <div className="w-full h-[24rem] relative lg:w-11/12 lg:mx-auto">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fseller%20page%20banner%203.webp?alt=media&token=93f9def2-7553-4dc8-bb07-e3c443903744"
          alt="banner-background"
          className="absolute inset-0 h-full object-cover lg:rounded-xl lg:w-full"
        />
        <div className="absolute inset-0 bg-primary-600/50 px-4 py-2 lg:px-6 lg:rounded-xl">
          <div className="size-full flex flex-col justify-evenly lg:w-2/5 lg:ml-auto">
            <h4 className="text-4xl lg:text-5xl font-bold text-gray-100">
              Problems come and get solved with ease
            </h4>
            <p className="text-gray-300 lg:text-xl">
              Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
              Neque pellentesque donec et tellus ac varius tortor, bibendum.
              Nulla felis ac turpis at amet. Purus malesuada placerat arcu at
              enim elit in accumsan.
            </p>
            <button className="flex items-center gap-x-2 text-gray-300">
              <p>Improve workflow</p>
              <p>
                <FaArrowRight />
              </p>
            </button>
          </div>
        </div>
      </div>
      {/* features section */}
      <div className="my-4 lg:my-8 px-2 py-1">
        <div className="text-center">
          <h4 className="text-2xl lg:text-4xl font-extrabold text-primary-700 mb-2">
            Your favourite tools
          </h4>
          <p>
            In risus nec molestie at in pulvinar tellus. At integer id
            condimentum gravida nisi nisl. Sem vitae porttitor arcu congue sem
            erat et sit faucibus. Sollicitudin elit gravida tellus mattis
            porttitor.
            <span className="hidden lg:inline">
              &nbsp; Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Neque iste quaerat vero similique amet corrupti quia quidem atque,
              enim aliquid quos voluptatum doloremque fugit, repellendus
              reiciendis cumque fugiat velit omnis dolores temporibus. Molestiae
              rerum, quasi odit praesentium voluptatum culpa deleniti.
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 lg:grid-rows-3 gap-4 lg:gap-8 my-6 lg:my-10">
          {featuresInfo.map(({ subtitle, iconUrl, title }, index) => (
            <div
              className="w-full flex flex-col items-center text-center gap-y-2"
              key={index}
            >
              <img src={iconUrl} alt="feature-icon" />
              <h6 className="text-2xl font-bold">{title}</h6>
              <p>{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
