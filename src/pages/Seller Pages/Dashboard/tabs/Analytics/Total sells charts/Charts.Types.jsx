import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// profit by date chart
export const ProfitByDate = ({ chartData }) => {
  return (
    <ResponsiveContainer width="100%" height="85%">
      <AreaChart
        data={chartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <Area
          type="monotone"
          dataKey="price"
          stroke="#445bee"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <CartesianGrid strokeDasharray="3 3" />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#7384f2" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#445bee" stopOpacity={0} />
          </linearGradient>
        </defs>
        <YAxis />
        <XAxis dataKey="date" />
        <Tooltip
          formatter={(title) =>
            chartData.length >= 1 ? ["No orders yet..."] : title
          }
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

// profit by category chart
export const ProfitByCategory = ({ chartData }) => {
  return (
    <ResponsiveContainer width="100%" height="85%">
      <BarChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="title"
          className="text-xs xl:text-base [&>g]:hidden [&>g]:xl:inline"
        />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="profit"
          fill="#445bee"
          activeBar={<Rectangle fill="#7384f2" stroke="#445bee" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
