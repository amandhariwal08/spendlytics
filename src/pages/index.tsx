import { BarChart } from "@/components/BarChart";
import PageTitle from "@/components/PageTitle";
import Card, { CardContent, CardProps } from "@/components/card";
// import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import { ModeToggle } from "@/components/ToggleMode";

interface CashflowChartDataItem {
  month: string;
  money_in: number;
  money_out: number;
}

interface RevenueAndExpensesChatDataItem {
  month: string;
  revenue: number;
  expenses: number;
}

interface ChartConfig {
  [key: string]: {
    label: string;
    color: string;
  };
}

const chartData: CashflowChartDataItem[] = [
  { month: "January", money_in: 186, money_out: 80 },
  { month: "February", money_in: 305, money_out: 200 },
  { month: "March", money_in: 237, money_out: 120 },
  { month: "April", money_in: 73, money_out: 190 },
  { month: "May", money_in: 209, money_out: 130 },
  { month: "June", money_in: 214, money_out: 140 },
];

const revenueAndExpensesChartData: RevenueAndExpensesChatDataItem[] = [
  { month: "January", revenue: 186, expenses: 80 },
  { month: "February", revenue: 305, expenses: 200 },
  { month: "March", revenue: 237, expenses: 120 },
  { month: "April", revenue: 73, expenses: 190 },
  { month: "May", revenue: 209, expenses: 130 },
  { month: "June", revenue: 214, expenses: 140 },
];

const chartConfig: ChartConfig = {
  money_in: {
    label: "Money In",
    color: "#81da7f",
  },
  money_out: {
    label: "Money Out",
    color: "#db6667",
  },
};

const revenueAndExpensesChartConfig: ChartConfig = {
  revenue: {
    label: "Revenue",
    color: "#81da7f",
  },
  expenses: {
    label: "Expenses",
    color: "#db6667",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <ModeToggle />
      <PageTitle title="Welcome, Karbon" />

      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Cashflow</p>
          <BarChart data={chartData} config={chartConfig} />
        </CardContent>

        <CardContent className="flex justify-between gap-4">
          <section>
            <p className="p-4">Revenue and Expenses</p>
            <BarChart data={chartData} config={chartConfig} />
          </section>
        </CardContent>
      </section>

      {/* <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((data, index) => (
          <Card
            key={index}
            amount={data.amount}
            discription={data.discription}
            icon={data.icon}
            label={data.label}
          />
        ))}
      </section> */}
    </div>
  );
}
