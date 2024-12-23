import SummarySection from '@/components/Sections/SummarySection';
import MultipleLinesChart from '@/components/Charts/MultipleLinesChart';
import {MultipleBarChart} from '@/components/Charts/MultipleBarChart';
import {DatePickerWithRange} from '@/components/DatePicker/DatePickerWithRange';
import {useAppContext} from './providers/AppContext';
import {ChartLoading} from './components/Charts/ChartLoading';
import {useEffect} from 'react';

function App() {
	const {dateRange, setDateRange, isFakeLoading, setIsFakeLoading} = useAppContext();

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsFakeLoading(false);
		}, 2000);
		return () => clearTimeout(timer);
	}, []);

	const RenderCharts = () => {
		if (isFakeLoading)
			return (
				<>
					<ChartLoading />
					<ChartLoading />
				</>
			);
		return (
			<>
				<MultipleLinesChart />
				<MultipleBarChart />
			</>
		);
	};
	return (
		<div className='relative min-h-screen px-12 py-6 overflow-hidden bg-gradient-to-tr from-slate-100 to-white'>
			{/* Decorative Circles */}
			<div className='absolute w-[400px] h-[400px] bg-blue-100 rounded-full opacity-10 -top-20 -left-28 blur-3xl' />
			<div className='absolute w-[300px] h-[300px] bg-violet-100 rounded-full opacity-10 -bottom-24 -right-16 blur-3xl' />
			<div className='absolute w-[300px] h-[300px] bg-blue-100 rounded-full opacity-10 -top-24 -right-16 blur-3xl' />
			<div className='absolute w-[300px] h-[300px] bg-violet-100 rounded-full opacity-10 bottom-24 -right-16 blur-3xl' />

			{/* Content */}
			<div className='relative z-10 space-y-6'>
				<div>
					<h1 className='mb-2 text-4xl font-bold text-gray-800 '>Daily Performance Metrics</h1>
					<p className='text-gray-600'>Tracking clicks, revenue, and conversion rates over time.</p>
				</div>
				<div className='w-min'>
					<DatePickerWithRange date={dateRange} onDateChange={setDateRange} />
				</div>
				<SummarySection />
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
					<RenderCharts />
				</div>
			</div>
		</div>
	);
}

export default App;
