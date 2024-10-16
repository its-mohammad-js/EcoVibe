import { useRef } from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineMail } from "react-icons/ai";
import { getDatabase, ref, set } from "firebase/database";

function SellerInfo({ seller, onEditHandler }) {
  const { sellerData, loading } = seller || {};
  const params = useParams();
  const { userId, personalInformation, businessInformation, userType } =
    useSelector((state) => state.userData);
  const isOwner = useRef(userId === params?.id);
  const navigate = useNavigate();

  async function sendMessage() {
    const roomId = `FROM:${userId}&TO:${params.id}`;
    const dbRef = getDatabase();
    await set(ref(dbRef, `rooms/${roomId}`), {
      roomId,
      // customer data
      [userId]: { ...personalInformation, ...businessInformation, userType },
      // seller data
      [params?.id]: {
        ...sellerData.personalInformation,
        ...sellerData.businessInformation,
        userType: sellerData.userType,
      },
      members: [userId, params.id],
    });
    navigate(`/EcoVibe/Messages/`);
  }

  if (!loading && sellerData)
    return (
      <div className="h-[33rem]">
        {/* banner */}
        <div className="w-full h-1/2 gradient-background"></div>
        {/* seller infomation */}
        <div className="relative px-4 py-12">
          {/* profile pic */}
          <div className="size-24 lg:size-36 bg-gray-100 border-4 border-gray-200 rounded-full absolute -top-14 lg:-top-28">
            <img
              src={sellerData?.personalInformation?.profilePic}
              alt="seller-avatar"
              className="size-full rounded-full object-cover"
            />
          </div>
          {/* main infomtaion */}
          <div className="flex flex-col  gap-y-3">
            {/* name & social media */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-y-2 ">
                <h4 className="text-lg font-bold text-gray-900 lg:text-3xl">
                  {sellerData?.businessInformation?.business_name ||
                    sellerData?.personalInformation?.first_name}
                </h4>

                <p className="font-medium text-gray-800 lg:text-lg">
                  {sellerData?.businessInformation?.career_title ||
                    "Career title: Not Set"}
                </p>

                <button
                  onClick={() => onEditHandler()}
                  disabled={!isOwner.current}
                  className="absolute top-4 group right-4 disabled:hidden text-primary-900 text-3xl flex items-center gap-x-1"
                >
                  <FaEdit />
                  <p className="text-lg mt-1 font-semibold">Edit info</p>
                </button>
              </div>
            </div>
            {/* about seller */}
            <div className="">
              <p className="line-clamp-5 text-pretty text-gray-800 xl:text-lg">
                {sellerData?.businessInformation?.biography ||
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ratione facilis enim tenetur mollitia, quis architecto quo quia earum ea perferendis hic? Dolor saepe quibusdam quidem alias ad! Quam, atque totam quod vero beatae voluptatum libero exercitationem possimus suscipit rerum voluptates distinctio ipsum! Soluta ea vitae aliquam sapiente animi aliquid,                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ex voluptates quaerat aperiam molestias! Et inventore, maxime esse quos minus quaerat voluptatum quo commodi dolorem reprehenderit quod pariatur debitis iusto eos, iste natus delectus aliquid nesciunt ut modi facilis perferendis. Aperiam dolores harum qui similique possimus. Aspernatur quo ullam harum, pariatur, vitae fuga perferendis delectus porro, mollitia possimus dolore blanditiis incidunt..."}
              </p>
            </div>
          </div>
          <button
            onClick={sendMessage}
            className="flex items-center px-4 py-2 bg-gray-200 rounded-md gap-x-1 absolute -top-4 right-4"
          >
            <AiOutlineMail />
            send message
          </button>
        </div>
      </div>
    );
}

export default SellerInfo;
