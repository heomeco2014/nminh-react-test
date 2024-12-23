import {ChartConfig} from '@/ui/chart';

export const chartConfig = {
	clicks: {
		label: 'Clicks',
		color: 'hsl(var(--chart-1))',
	},
	revenue: {
		label: 'Revenue',
		color: 'hsl(var(--chart-2))',
	},
	conversionRate: {
		label: 'Conversion Rate',
		color: 'hsl(var(--chart-3))',
	},
} satisfies ChartConfig;
