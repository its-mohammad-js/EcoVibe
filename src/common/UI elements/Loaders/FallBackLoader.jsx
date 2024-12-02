import { LoaderIcon } from "react-hot-toast";

function FallBackLoader() {
  return (
    <div className="h-screen mx-auto 2xl:max-w-screen-2xl flex items-center justify-center">
      <LoaderIcon className="size-24" />
    </div>
  );
}

export default FallBackLoader;
