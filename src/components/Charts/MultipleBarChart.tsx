import {Bar, BarChart, CartesianGrid, XAxis} from 'recharts';

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/ui/card';
import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from '@/ui/chart';
import {useAppContext} from '@/providers/AppContext';

const chartConfig = {
	clicks: {
		label: 'Clicks',
		color: 'hsl(var(--chart-1))',
	},
	revenue: {
		label: 'Revenue',
		color: 'hsl(var(--chart-2))',
	},
	conversion: {
		label: 'Conversion',
		color: 'hsl(var(--chart-3))',
	},
} satisfies ChartConfig;

export function MultipleBarChart() {
	const {summaryData} = useAppContext();
	const data = summaryData.performanceDataInRange;
	const chartData = data;
	return (
		<Card>
			<CardHeader>
				<CardTitle>Bar Chart</CardTitle>
				<CardDescription>January</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart accessibilityLayer data={chartData}>
						<CartesianGrid vertical={false} />
						<XAxis dataKey='date' tickLine={false} tickMargin={10} axisLine={false} tickFormatter={value => value} />
						<ChartTooltip cursor={false} content={<ChartTooltipContent indicator='dashed' />} />
						<Bar dataKey='clicks' fill='var(--color-clicks)' />
						<Bar dataKey='revenue' fill='var(--color-revenue)' />
						<Bar dataKey='conversionRate' fill='var(--color-conversion)' />
					</BarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className='flex-col items-start gap-2 text-sm'></CardFooter>
		</Card>
	);
}
