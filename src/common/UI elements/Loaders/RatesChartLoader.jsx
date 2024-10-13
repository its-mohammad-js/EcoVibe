import ReactStars from "react-stars";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const fakeData = [
  { name: "1-2", value: 400 },
  { name: "2-3", value: 300 },
  { name: "3-4", value: 300 },
  { name: "4-5", value: 200 },
];
const COLORS = ["#6b7280", "#4b5563", "#374151", "#111827"];

function RatesChartLoader({ animate }) {
  return (
    <div
      className={`${
        animate && "animate-pulse"
      } h-full flex flex-col items-center relative pb-1 text-gray-900`}
    >
      <h4 className="text-xl font-bold my-2 absolute -top-2 left-0 z-10">
        Rates Chart
      </h4>

      <ResponsiveContainer width="100%" height="70%">
        <PieChart>
          <Pie
            data={fakeData}
            innerRadius={55}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {fakeData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <div className="flex flex-wrap justify-evenly gap-0.5 lg:gap-2 w-full h-1/3">
        {fakeData.map(({ name, value }, index) => (
          <div key={index} className="flex items-center gap-x-2">
            <ReactStars
              key={index}
              size={22}
              value={name.split("-")[1]}
              edit={false}
              color2="#111827"
            />
            :<p className="w-4 xl:w-6 h-2 bg-gray-500 rounded-md mt-0.5"></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RatesChartLoader;
