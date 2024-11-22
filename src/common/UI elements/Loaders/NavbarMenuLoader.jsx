import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { fakeArray } from "constants";

const dashboardFakeData = [
  {
    subject: "_",
    A: 120,
  },
  {
    subject: "__",
    A: 98,
  },
  {
    subject: "___",
    A: 86,
  },
  {
    subject: "_____",
    A: 99,
  },
  {
    subject: "______",
    A: 120,
  },
];

export const DashboradSummaryLoader = () => {
  return (
    <div className="animate-pulse w-full">
      {/* simple bar chart */}
      <div className="h-52 px-4 py-2 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="80%"
            data={dashboardFakeData}
          >
            <PolarGrid />
            <PolarAngleAxis
              dataKey="subject"
              className="text-sm font-semibold"
            />
            <Radar
              dataKey="A"
              stroke="#6b7280"
              fill="#6b7280"
              fillOpacity={0.4}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      {/* access links */}
      <div className="w-full flex flex-col items-start gap-y-2 py-1 px-0.5">
        <p className="w-28 h-2 bg-gray-400 rounded-md"></p>
        <p className="w-24 h-2 bg-gray-400 rounded-md"></p>
        <p className="w-20 h-2 bg-gray-400 rounded-md"></p>
      </div>
    </div>
  );
};

export const MainMenuLoader = () => {
  return (
    <>
      {/* top action btn's */}
      <div className="flex justify-between w-full items-center py-1">
        <button
          className={`px-4 py-4 w-1/2 bg-gray-200 flex items-center justify-center transition-all rounded-md`}
        >
          <p className="w-14 h-2 bg-gray-300 rounded-md"></p>
        </button>
        <button
          className={`px-4 py-4 w-1/2 flex items-center justify-center transition-all rounded-md`}
        >
          <p className="w-14 h-2 bg-gray-300 rounded-md"></p>
        </button>
      </div>
      {/* cart screen loader */}
      {/* cart summary */}
      <div className="w-full max-h-52 overflow-auto p-1 scroll-smooth styled-scroll-bar">
        <div className="flex flex-col gap-y-2">
          {fakeArray(4).map((n, i) => (
            <div
              key={i}
              className="w-full h-24 rounded-md px-2 py-1 flex items-center justify-center"
            >
              <div className="w-2/5 h-full object-cover rounded-xl bg-gray-200"></div>
              <div className="w-3/5 h-full flex flex-col justify-evenly px-2">
                <h6 className="w-24 h-2 bg-gray-300 rounded-md"></h6>
                <p className="w-12 h-2 bg-gray-300 rounded-md"></p>
                <p className="w-6 h-2 bg-gray-300 rounded-md"></p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* access links */}
      <div className="w-full flex flex-col items-start gap-y-2.5 py-2">
        <button className="flex items-center gap-x-2 font-semibold text-gray-950 hover:text-gray-800 transition-all">
          <p className="w-36 h-2 bg-gray-300 rounded-md"></p>
        </button>
        <button className="flex items-center gap-x-2 font-semibold text-gray-950 hover:text-gray-800 transition-all">
          <p className="w-28 h-2 bg-gray-300 rounded-md"></p>
        </button>
      </div>
    </>
  );
};
