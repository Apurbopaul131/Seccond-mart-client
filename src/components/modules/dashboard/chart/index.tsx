"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", soldProduct: 186, purchaseProduct: 80 },
  { month: "February", soldProduct: 305, purchaseProduct: 200 },
  { month: "March", soldProduct: 237, purchaseProduct: 120 },
  { month: "April", soldProduct: 73, purchaseProduct: 190 },
  { month: "May", soldProduct: 209, purchaseProduct: 130 },
  { month: "June", soldProduct: 214, purchaseProduct: 140 },
];

const chartConfig = {
  soldProduct: {
    label: "soldProduct",
    color: "#517bdb",
  },
  purchaseProduct: {
    label: "purchaseProduct",
    color: "#facc15",
  },
} satisfies ChartConfig;

export function Chart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="soldProduct" fill="var(--color-soldProduct)" radius={4} />
        <Bar
          dataKey="purchaseProduct"
          fill="var(--color-purchaseProduct)"
          radius={4}
        />
      </BarChart>
    </ChartContainer>
  );
}
