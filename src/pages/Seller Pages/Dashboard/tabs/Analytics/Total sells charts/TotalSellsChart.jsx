import Select from "react-select";
import { useDashboardData } from "../../../DashboardContext";
import { useEffect, useState } from "react";
import { supportedCategories, timestampToDate } from "constants";
import TotalSellChartLoader from "UI/Loaders/TotalSellChartLoader";
import { ProfitByCategory, ProfitByDate } from "./Charts.Types";

// chart options info
const chartOptions = [
  { label: "By Order Date", value: 1 },
  { label: "By Categories", value: 0 },
];

function TotalSellsChart() {
  const [chartData, setChartdata] = useState([]); // chart data state
  const [chartType, setType] = useState(1); // chart type state
  // order's data
  const {
    orderList: { orders, loading },
  } = useDashboardData();

  useEffect(() => {
    if (chartType === 1) {
      // calculate all profit base on date
      setChartdata(() => [
        ...orders.map((order) => ({
          price: order.totalPrice,
          date: timestampToDate(order.createdAt, {
            year: "2-digit",
            month: "2-digit",
          }),
        })),
        { price: 0 },
      ]);
    } else {
      // read all ordered products
      const allOrderedItems = orders.flatMap((item) =>
        item.orders.items.map((item) => item)
      );
      // calculate all profit base on categories
      const totalProfit = supportedCategories.map(({ title }) => ({
        title,
        profit: allOrderedItems
          .filter(({ Category }) => Category === title)
          .reduce((acc, item) => acc + Number(item.Price), 0),
      }));
      // display it on bar chart
      setChartdata(totalProfit);
    }
  }, [orders, chartType]);

  // dispaly loading screen
  if (loading) return <TotalSellChartLoader animate />;

  // main components
  if (!loading)
    return (
      <>
        <div className="absolute top-2.5 right-3 w-42">
          <Select
            isSearchable={false}
            options={chartOptions}
            placeholder="Total Sell By"
            onChange={({ value }) => setType(value)}
          />
        </div>
        <h4 className="text-xl font-bold my-2">Total Sell's</h4>

        {chartType ? (
          <ProfitByDate chartData={chartData} />
        ) : (
          <ProfitByCategory chartData={chartData} />
        )}
      </>
    );
}

export default TotalSellsChart;
