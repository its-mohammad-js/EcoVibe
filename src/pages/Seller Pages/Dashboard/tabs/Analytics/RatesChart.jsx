import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactStars from "react-stars";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import RatesChartLoader from "UI/Loaders/RatesChartLoader";

const COLORS = ["#d0d6fb", "#7384f2", "#1632e9", "#09145d"];

const ranges = [
  { min: 0, max: 1, label: "0-1" },
  { min: 1, max: 2, label: "1-2" },
  { min: 2, max: 3, label: "2-3" },
  { min: 3, max: 4, label: "3-4" },
  { min: 4, max: 5, label: "4-5" },
];

function RatesChart() {
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState(null);
  // read products data (rates)
  const { data: productsList, loading } = useSelector(
    (state) => state.products
  );

  // get rates range on component mount
  useEffect(() => {
    // an array of all rate number
    const allRates = productsList.flatMap((product) =>
      product.Stars.map((num) => num)
    );
    if (!allRates.length) {
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
  }, []);

  if (loading) return <RatesChartLoader animate />;

  if (!loading && chartData.length)
    return (
      <div className="h-full flex flex-col items-center relative pb-1">
        <h4 className="text-xl font-bold my-2 absolute -top-2 left-0 z-10">
          Rates Chart
        </h4>

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
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

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
              <p className="font-bold text-gray-950 mt-0.5 -ml-1">: %{value}</p>
            </div>
          ))}
        </div>
      </div>
    );

  if (!loading && error === 404)
    return (
      <>
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-200/50 rounded-md to-gray-50/100 backdrop-blur-sm">
          <h4 className="text-3xl text-center font-bold text-primary-800">
            There Isn't Any Rate Under Your Products Yet...
          </h4>
        </div>
        <RatesChartLoader />
      </>
    );
}

export default RatesChart;
