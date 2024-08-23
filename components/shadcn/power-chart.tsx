"use client"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"
import { chartData } from "@/data"

import {
  Card,
  CardContent,
} from "@/components/shadcn/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/shadcn/chart"


const chartConfig = {
    current: {
    label: "current",
    color: "hsl(var(--chart-1))",
  },
  max: {
    label: "max",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Component({desc, lang}:{desc:any; lang:any}) {
  return (
    <Card className="bg-transparent border-0 w-full ">
      <CardContent className="w-full h-full flex flex-col sm:flex-row justify-end">
        <div className={`mx-5 ${lang==='en'? '':'sm:hidden text-right'}`}>
          <p className="text-xs sm:text-sm w-full" dir={lang==='en'? 'ltr':'rtl'}>
            {desc}
          </p>
        </div>
        <div className="h-full">
          <ChartContainer
            config={chartConfig}
            className="h-28 sm:h-40 lg:h-72 w-full sm:w-72 lg:w-80"
          >
            <BarChart 
              accessibilityLayer
              data={chartData}
              margin={{
                top: 20,
              }}
            >
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="skill"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <Bar dataKey="current" fill="#e6e5e5" radius={8}>
                  <LabelList
                    position="top"
                    offset={8}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </Bar>
            </BarChart>
          </ChartContainer>
        </div>
        <div className={`mr-5 max-w-96 hidden ${lang==='en'? '':'sm:block'}`}>
          <p className="text-xs sm:text-sm" dir='rtl'>
            {desc}
          </p>
        </div>

      </CardContent>
    </Card>
  )
}
