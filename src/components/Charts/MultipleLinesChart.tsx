import {TrendingUp} from 'lucide-react';
import {CartesianGrid, Line, LineChart, XAxis} from 'recharts';

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/ui/card';

import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from '@/ui/chart';
import {useAppContext} from '@/providers/AppContext';

const MultipleLinesChart = () => {
	const {summaryData} = useAppContext();
	const data = summaryData.performanceDataInRange;
	const chartData = data;

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

	return (
		<Card>
			<CardHeader>
				<CardTitle>Line Chart</CardTitle>
				<CardDescription>January - June 2024</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<LineChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 34,
							right: 12,
						}}>
						<CartesianGrid vertical={false} />
						<XAxis dataKey='date' axisLine={false} tickMargin={0} tickFormatter={value => value} />
						<ChartTooltip cursor={false} content={<ChartTooltipContent />} />
						<Line dataKey='clicks' type='monotone' stroke='var(--color-clicks)' strokeWidth={2} dot={true} />
						<Line dataKey='revenue' type='monotone' stroke='var(--color-revenue)' strokeWidth={2} dot={true} />
						<Line dataKey='conversionRate' type='monotone' stroke='var(--color-conversion)' strokeWidth={2} dot={true} />
					</LineChart>
				</ChartContainer>
			</CardContent>
			<CardFooter></CardFooter>
		</Card>
	);
};

export default MultipleLinesChart;
