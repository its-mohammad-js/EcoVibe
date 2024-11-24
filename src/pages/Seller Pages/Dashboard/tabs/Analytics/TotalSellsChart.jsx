import Select from "react-select";
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
import { useDashboardData } from "../../DashboardContext";
import { useEffect, useState } from "react";
import { supportedCategories, timestampToDate } from "constants";
import TotalSellChartLoader from "UI/Loaders/TotalSellChartLoader";

const chartOptions = [
  { label: "By Order Date", value: 1 },
  { label: "By Categories", value: 0 },
];

function TotalSellsChart() {
  const [chartData, setChartdata] = useState([]);
  const [chartType, setType] = useState(1);
  // order's data
  const {
    orderList: { orders, loading, error },
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

const ProfitByDate = ({ chartData }) => {
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

const ProfitByCategory = ({ chartData }) => {
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
