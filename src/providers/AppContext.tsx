import React from 'react';
import data from '../data/data.json';
import {PerformanceData} from '@/types/types';

type AppContextType = {
	performanceData: PerformanceData[];
	setPerformanceData: (data: PerformanceData[]) => void;
};

const initialData: PerformanceData[] = data;
const AppContext = React.createContext({} as AppContextType);

export const useAppContext = () => {
	return React.useContext(AppContext);
};

export const AppProvider = ({children}: {children: React.ReactNode}) => {
	const [performanceData, setPerformanceData] = React.useState<PerformanceData[]>(() => initialData);
	const memoizedValue = React.useMemo(
		() => ({
			performanceData,
			setPerformanceData,
		}),
		[]
	);
	return <AppContext.Provider value={memoizedValue}>{children}</AppContext.Provider>;
};
