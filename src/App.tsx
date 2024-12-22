import SummarySection from '@/components/Sections/SummarySection';
import MultipleLinesChart from '@/components/Charts/MultipleLinesChart';
import {MultipleBarChart} from '@/components/Charts/MultipleBarChart';
import {DatePickerWithRange} from '@/components/DatePicker/DatePickerWithRange';
import {useAppContext} from './providers/AppContext';

function App() {
	const {dateRange, setDateRange} = useAppContext();
	return (
		<>
			<div className='w-full h-full px-12 space-y-6'>
				<div>
					<h1 className='text-4xl font-bold'>Daily Performance Metrics</h1>
					<p className='text-gray-500'>Tracking clicks, revenue, and conversion rates over time.</p>
				</div>
				<div className='w-min'>
					<DatePickerWithRange date={dateRange} onDateChange={setDateRange} />
				</div>
				<SummarySection />
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
					<MultipleLinesChart />
					<MultipleBarChart />
				</div>
			</div>
		</>
	);
}

export default App;
