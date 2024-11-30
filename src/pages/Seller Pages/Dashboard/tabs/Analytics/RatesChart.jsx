import { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import RatesChartLoader from "UI/Loaders/RatesChartLoader";
import { useDashboardData } from "../../DashboardContext";
import { PiSmileySad } from "react-icons/pi";

// range chart colors
const COLORS = ["#d0d6fb", "#7384f2", "#1632e9", "#09145d"];
// rates range (used for rates chart)
const ranges = [
  { min: 0, max: 1, label: "0-1" },
  { min: 1, max: 2, label: "1-2" },
  { min: 2, max: 3, label: "2-3" },
  { min: 3, max: 4, label: "3-4" },
  { min: 4, max: 5, label: "4-5" },
];

function RatesChart() {
  const [chartData, setChartData] = useState([]); // chart data
  const [error, setError] = useState(null); // error state
  const {
    products: { products, loading },
  } = useDashboardData(); // dashboard data

  // get rates range on component mount
  useEffect(() => {
    // an array of all rate number
    const allRates = products.flatMap((product) =>
      product?.Stars?.map((num) => num)
    );

    if (!allRates.length) {
      setChartData([
        ...ranges.map((range) => ({
          name: range.label,
          value: 0,
        })),
      ]);
      setError(404);
    } else {
      // count of each range of rates
      const counts = ranges.map((range) => ({
        name: range.label,
        value: allRates.filter((num) => num >= range.min && num < range.max)
          .length,
      }));

      // set to chart data
      setChartData(counts);
    }
  }, [products]);

  // loading screen
  if (loading) return <RatesChartLoader animate />;

  // main components
  if (!loading)
    return (
      <div className="h-full flex flex-col items-center relative pb-1">
        {/* title */}
        <h4 className="text-xl font-bold my-2 absolute -top-2 left-0 z-10">
          Rates Chart
        </h4>
        {/* main charts */}
        {error !== 404 ? (
          <ResponsiveContainer width="100%" height="70%">
            <PieChart>
              <Pie
                data={chartData}
                innerRadius={55}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip formatter={(title) => title} />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-around">
            <PiSmileySad className="text-9xl text-primary-700" />
            <p className="-mt-8 text-lg text-center font-medium">
              There are no rates available for your products yet.
            </p>
          </div>
        )}
        {/* rates information */}
        <div className="flex flex-wrap justify-evenly gap-1 lg:gap-2 w-full h-1/3">
          {chartData.map(({ name, value }, index) => (
            <div key={index} className="flex items-center gap-x-2">
              <ReactStars
                key={index}
                size={22}
                value={name.split("-")[1]}
                edit={false}
                color2="#1128bb"
              />
              <p className="font-bold text-gray-950 mt-0.5 -ml-1">
                : %{value.toFixed()}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default RatesChart;
