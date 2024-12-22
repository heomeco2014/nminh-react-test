import {createContext, ReactNode, useContext, useMemo, useState} from 'react';
import {DateRange} from 'react-day-picker';
import data from '../data/data.json';
interface PerformanceData {
	date: string;
	clicks: number;
	revenue: number;
	conversionRate: number;
}

const initialData: PerformanceData[] = data;

type AppContextType = {
	performanceData: PerformanceData[];
	setPerformanceData: (data: PerformanceData[]) => void;
	summaryData: {
		clicks: number;
		revenue: number;
		conversionRate: number;
		performanceDataInRange: PerformanceData[];
	};
	dateRange: DateRange | undefined;
	setDateRange: (dateRange: DateRange | undefined) => void;
};

const AppContext = createContext({} as AppContextType);

export const useAppContext = () => {
	return useContext(AppContext);
};

export const AppProvider = ({children}: {children: ReactNode}) => {
	const [performanceData, setPerformanceData] = useState<PerformanceData[]>(initialData);
	const [dateRange, setDateRange] = useState<DateRange | undefined>({
		from: new Date(performanceData[0].date),
		to: new Date(performanceData[performanceData.length - 1].date),
	});

	const summaryData = useMemo(() => {
		const performanceDataInRange = performanceData.filter(data => {
			if (!dateRange?.from) return true;

			const currentDate = new Date(data.date);
			// Set time to start of day for consistent comparison
			currentDate.setHours(0, 0, 0, 0);

			const from = new Date(dateRange.from);
			from.setHours(0, 0, 0, 0);

			const to = dateRange.to ? new Date(dateRange.to) : from;
			to.setHours(0, 0, 0, 0);

			// Compare dates without time
			return currentDate >= from && currentDate <= to;
		});
		console.log('♦️ | performanceDataInRange:', performanceDataInRange);

		const clicks = performanceDataInRange.reduce((acc, data) => acc + data.clicks, 0);
		const revenue = performanceDataInRange.reduce((acc, data) => acc + data.revenue, 0);
		const conversionRate = performanceDataInRange.length > 0 ? (clicks / performanceDataInRange.length) * 100 : 0;

		return {
			clicks,
			revenue,
			conversionRate,
			performanceDataInRange,
		};
	}, [dateRange, performanceData]);

	const memoizedValue = useMemo(
		() => ({
			performanceData,
			setPerformanceData,
			summaryData,
			dateRange,
			setDateRange,
		}),
		[performanceData, summaryData, dateRange]
	);

	return <AppContext.Provider value={memoizedValue}>{children}</AppContext.Provider>;
};
