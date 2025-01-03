import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const fakeData = [
  {
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    uv: 100,
    pv: 2400,
    amt: 2400,
  },
  {
    uv: 2500,
    pv: 9800,
    amt: 2290,
  },
  {
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function TotalSellChartLoader({ animate }) {
  return (
    <>
      <h4 className="text-xl font-bold my-2">Total Sell's Chart</h4>
      <ResponsiveContainer
        width="100%"
        height="85%"
        className={`${animate && "animate-pulse"}`}
      >
        <AreaChart
          data={fakeData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#6b7280"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6b7280" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#6b7280" stopOpacity={0} />
            </linearGradient>
          </defs>
          <YAxis />
          <XAxis dataKey="date" />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}

export default TotalSellChartLoader;
