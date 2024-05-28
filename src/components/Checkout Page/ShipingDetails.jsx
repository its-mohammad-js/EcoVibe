import { useEffect } from "react";

const shipingMethods = [
  {
    title: "FedEx Delivery",
    subTitle: "Delivery: Friday, 25",
    cost: "10.40",
    logoUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2FFedEx%20logo.png?alt=media&token=efa51dde-4d71-418f-b760-bef0edacfaf2",
  },
  {
    title: "DHL Fast Delivery",
    subTitle: "Delivery: Sunday, 27",
    cost: "10.99",
    logoUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fdhl%20logo.png?alt=media&token=2350c603-e5ee-4a39-b919-e4c630e0afb6",
  },
];

function ShipingDetails({ currentMehod, onChangeMethod }) {
  // set default method
  useEffect(() => {
    onChangeMethod(shipingMethods[0]);
  }, []);

  return (
    <div className="flex flex-col px-4 py-2">
      <h4 className="text-xl lg:text-2xl font-medium my-2">Shipping Address</h4>

      <div className="flex flex-col lg:flex-row w-full items-center gap-4">
        {shipingMethods.map(({ logoUrl, cost, subTitle, title }, index) => (
          <div
            onClick={() => onChangeMethod({ logoUrl, cost, subTitle, title })}
            key={index}
            className={`${
              currentMehod?.title === title
                ? "bg-primary-50 border-primary-500"
                : "bg-gray-50"
            } flex items-center gap-x-4 w-full h-28 rounded-md px-4 py-2 lg:basis-3/12 border-2 transition-all`}
          >
            <div className="basis-2/5 border-r h-full">
              <img
                src={logoUrl}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="h-full flex flex-col justify-center text-sm text-gray-700 gap-1">
              <h6 className="text-lg line-clamp-1 font-bold">{title}</h6>
              <p>{subTitle}</p>
              <p>${cost}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShipingDetails;
