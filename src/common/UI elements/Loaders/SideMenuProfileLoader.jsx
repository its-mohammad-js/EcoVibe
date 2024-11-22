import { AiOutlineUser } from "react-icons/ai";

function SideMenuProfileLoader() {
  return (
    <div className="w-full h-20 shadow-md flex items-center justify-between p-2 animate-pulse">
      <div className="flex items-center justify-center gap-x-3">
        <div className="size-16 overflow-hidden pt-2 bg-gray-100 rounded-full text-center">
          <AiOutlineUser className="size-full mt-1" />
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="w-28 h-2 bg-gray-400 rounded-md"></h2>
          <p className="w-20 h-2 bg-gray-400 rounded-md"></p>
        </div>
      </div>
    </div>
  );
}

export default SideMenuProfileLoader;
