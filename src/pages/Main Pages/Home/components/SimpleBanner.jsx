import { FaArrowRight } from "react-icons/fa";
import { TbClock } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function SimpleBanner({ title, path }) {
  const navigate = useNavigate();

  return (
    <aside className="md:hidden flex h-20 mx-auto w-[95%] px-4 py-2 bg-primary-900/90 rounded-lg items-center justify-between">
      <div className="flex flex-col justify-evenly h-full">
        <h2 className="text-lg text-white">{title}</h2>
        <p className="flex items-center justify-center gap-x-1 py-1 text-gray-300">
          <TbClock className="text-2xl" />
          <span className="text-xs">22h 55m 20s remaining </span>
        </p>
      </div>
      <button
        onClick={() => {
          window.scroll(0, 0);
          navigate(path);
        }}
        className="flex items-center justify-center hover:bg-white hover:text-gray-950 transition-all hover:font-semibold text-white border border-gray-100 px-2 py-1 rounded-md text-sm gap-x-1.5"
      >
        <span>View All</span>
        <span>
          <FaArrowRight />
        </span>
      </button>
    </aside>
  );
}

export default SimpleBanner;
