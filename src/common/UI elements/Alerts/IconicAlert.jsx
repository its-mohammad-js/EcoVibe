import { CgClose } from "react-icons/cg";
import { CiWarning } from "react-icons/ci";

function IconicWarningAlert({ title, subTitle, callBack, onClose }) {
  return (
    <div className="w-11/12 lg:w-72 bg-gray-50 relative px-4 py-2 flex flex-col items-center text-center gap-2 border-t-8 border-amber-500">
      <button
        onClick={() => onClose()}
        className="absolute top-2 right-2 text-2xl"
      >
        <CgClose />
      </button>
      <p className="text-9xl text-amber-500">
        <CiWarning />
      </p>
      <h4 className="text-lg font-medium my-0.5">{title}</h4>
      <button
        onClick={() => callBack()}
        className="bg-gray-900 text-gray-50 w-full py-2 rounded-md"
      >
        Im Sure
      </button>
      <button
        onClick={() => onClose()}
        className="border-2 border-gray-950 w-full rounded-md py-2"
      >
        {subTitle}
      </button>
    </div>
  );
}

export default IconicWarningAlert;
