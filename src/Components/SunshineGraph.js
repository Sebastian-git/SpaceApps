import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid } from "recharts";

import { format, parseISO, subDays } from "date-fns";

import HoverInfo from "./HoverInfo"
  
  const data = [];
  for (let num = 30; num >= 0; num--) {
    data.push({
      date: subDays(new Date(), num).toISOString().substr(0, 20),
      value: Math.random() +1,
    });
  }
  
  export default function Graph() {
    return (
      <ResponsiveContainer width={1000} height={500}>
        <AreaChart data={data}>

          <defs>
            <linearGradient id="gradientColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
              <stop offset="90%" stopColor="#2451B7" stopOpacity={0.05} />
            </linearGradient>
          </defs>
  
          <Area dataKey="value" stroke="#2451B7" fill="url(#gradientColor)" />

          <XAxis
            dataKey="date"
            axisLine={true}
            tickLine={false}
            tickFormatter={(str) => {
              const date = parseISO(str);
              if (date.getDate() % 7 === 0) {
                return format(date, "MMM, d");
              }
              return "";
            }}
          />

          <YAxis
            datakey="value"
            axisLine={false}
            tickLine={false}
            tickCount={0}
            tickFormatter={(number) => `${number.toFixed(2)}`}
          />
  
          <Tooltip content={<HoverInfo />} />

          <CartesianGrid opacity={0.2} vertical={false} />
          
        </AreaChart>
      </ResponsiveContainer>
    );
  }