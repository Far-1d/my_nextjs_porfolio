"use client"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import { chartData } from "@/data"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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

export function Component() {
  return (
    <Card className="bg-transparent border-0">
      {/* <CardHeader className="items-center pb-4 absolute 
      bottom-[2vw] lg:bottom-[-1vw] left-[-2%] sm:left-[10%] ">
        <CardTitle className="text-xl md:text-2xl">Grow Chart</CardTitle>
        <CardDescription className="text-xs md:text-sm">
          Showing major skills only
        </CardDescription>
      </CardHeader> */}
      <CardContent className="pb-0 absolute bottom-[2vw] lg:bottom-[-8vw]
        right-[-10vw] sm:right-[-32vw] md:right-[-40vw] lg:right-[5vw] 
        opacity-50 md:opacity-100 h-3/4 lg:h-[28vh] xl:h-[34vh]">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-full w-[120%]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis dataKey="skill"/>
            <PolarGrid radialLines={false} />
            <Radar
              dataKey="current"
              fill="var(--color-current)"
              fillOpacity={0}
              stroke="var(--color-current)"
              strokeWidth={2}
              className="bg-[#040719]"
            />
            <Radar
              dataKey="max"
              fill="var(--color-mobile)"
              fillOpacity={0}
              stroke="var(--color-mobile)"
              strokeWidth={2}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
