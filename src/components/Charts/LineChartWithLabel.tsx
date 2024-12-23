'use client';

import {TrendingUp} from 'lucide-react';
import {CartesianGrid, Line, LineChart, XAxis} from 'recharts';

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/ui/card';
import {ChartContainer, ChartTooltip, ChartTooltipContent} from '@/ui/chart';
import data from '../../data/data.json';
import {chartConfig} from './chartConfig';
const chartData = data;

export function LineChartWithLabel() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Line Chart</CardTitle>
				<CardDescription></CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<LineChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}>
						<CartesianGrid vertical={false} />
						<XAxis dataKey='date' tickLine={false} axisLine={false} tickMargin={8} tickFormatter={value => value.slice(0, 3)} />
						<ChartTooltip cursor={false} content={<ChartTooltipContent />} />
						<Line dataKey='clicks' type='step' stroke='var(--color-clicks)' strokeWidth={2} dot={false} />
						<Line dataKey='revenue' type='step' stroke='var(--color-revenue)' strokeWidth={2} dot={false} />
						<Line dataKey='conversionRate' type='step' stroke='var(--color-conversion)' strokeWidth={2} dot={false} />
					</LineChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className='flex-col items-start gap-2 text-sm'>
				<div className='flex gap-2 font-medium leading-none'>
					Trending up by 5.2% this month <TrendingUp className='w-4 h-4' />
				</div>
				<div className='leading-none text-muted-foreground'>Showing total visitors for the last 6 months</div>
			</CardFooter>
		</Card>
	);
}
