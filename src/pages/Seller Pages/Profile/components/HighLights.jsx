import { fakeArray } from "../../../../common/utils/constants";

function HighLights() {
  return (
    <div className="flex items-center gap-x-4 overflow-auto px-2 py-2 scroll-smooth">
      {fakeArray(8).map((n, i) => (
        <div
          key={i}
          className="size-14 rounded-full bg-gray-100 flex-none ring-4"
        ></div>
      ))}
    </div>
  );
}

export default HighLights;
