"use client";

import {
  Bar,
  BarChart as BarGraph,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface ChartDataItem {
  month: string;
  money_in: number;
  money_out: number;
}

interface ChartConfig {
  [key: string]: {
    label: string;
    color: string;
  };
}

interface BarChartProps {
  data: ChartDataItem[];
  config: ChartConfig;
}

export function BarChart({ data, config }: BarChartProps) {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <ChartContainer config={config} className="min-h-[200px] w-full">
        <BarGraph data={data}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            stroke="#888888"
            fontSize={12}
            tickFormatter={(value) => `$${value}`}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          {Object.keys(config).map((key) => (
            <Bar
              key={key}
              dataKey={key}
              fill={config[key].color}
              name={config[key].label}
              radius={4}
            />
          ))}
        </BarGraph>
      </ChartContainer>
    </ResponsiveContainer>
  );
}
