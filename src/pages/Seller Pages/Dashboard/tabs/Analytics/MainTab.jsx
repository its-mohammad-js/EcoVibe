import { useEffect } from "react";
import OrdersSummary from "./OrdersSummary";
import TotalSellsChart from "./Total sells charts/TotalSellsChart";
import RatesChart from "./RatesChart";
import Locations from "./Locations";
import LastComments from "./LastComments";
import { useDashboardData } from "../../DashboardContext";
import LastStories from "./LastStories";

function AnalyticsTab() {
  // get order's function
  const { getOrders } = useDashboardData();

  // fetch orders on app mount
  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="w-full flex flex-col lg:grid lg:grid-cols-8 grid-rows-8 gap-4 px-2 py-2 lg:px-4 xl:h-[50rem]">
      <div className="lg:col-span-6 lg:row-span-5 flex flex-col gap-y-4">
        <div className="h-1/3 relative flex flex-col justify-center bg-gray-100 rounded-md px-4 py-2">
          <OrdersSummary />
        </div>
        <div className="h-60 lg:h-2/3 relative bg-gray-100 rounded-md px-4 py-2">
          <TotalSellsChart />
        </div>
      </div>
      <div className="h-96 relative lg:h-auto lg:col-span-2 lg:row-span-4 lg:col-start-7 bg-gray-100 rounded-md px-4 py-2">
        <RatesChart />
      </div>
      <div className="lg:col-span-2 relative lg:row-span-4 lg:col-start-7 lg:row-start-5 bg-gray-100 rounded-md px-4 py-2">
        <LastComments />
      </div>
      <div className="h-80 lg:h-auto lg:col-span-3 lg:row-span-3 lg:row-start-6">
        <LastStories />
      </div>
      <div className=" col-span-3 h-96 lg:h-auto lg:row-span-3 lg:col-start-4 lg:row-start-6 bg-gray-100 rounded-md px-4 py-2">
        <Locations />
      </div>
    </div>
  );
}

export default AnalyticsTab;
