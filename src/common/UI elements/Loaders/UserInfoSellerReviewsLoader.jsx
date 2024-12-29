import { fakeArray } from "helpers";

function UserInfoSellerReviewsLoader() {
  return (
    <div className="h-2/5 overflow-auto absolute animate-pulse w-full bottom-1 styled-scroll-bar">
      <div className="flex flex-col gap-y-4 py-2 px-1">
        {fakeArray(5).map((n, i) => (
          <div
            key={i}
            className="h-28 anima flex flex-col items-start py-1.5 cursor-pointer border-b border-gray-300 hover:border-none hover:bg-gray-200 rounded-md p-1.5"
          >
            {/* rerview summary */}
            <div className="flex items-center justify-between w-full gap-x-2">
              <div className="flex items-center justify-between gap-x-2">
                <div className="size-8 rounded-full bg-gray-300"></div>
                <h2 className="w-20 h-2 bg-gray-300 rounded-md"></h2>
              </div>
              <p className="w-20 h-2 bg-gray-300 rounded-md"></p>
            </div>
            <div className="flex flex-col gap-y-2 w-full py-2">
              {fakeArray(4).map((n) => (
                <div
                  key={n}
                  className="w-full h-2 bg-gray-300 rounded-md last:w-4/5"
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserInfoSellerReviewsLoader;
