import SummarySection from '@/components/Sections/SummarySection';
import DetailsMetrics from './components/Sections/DetailsMetrics';
import MultipleLinesChart from './components/Charts/MultipleLinesChart';
import {LineChartWithLabel} from './components/Charts/LineChartWithLabel';
import {MultipleBarChart} from './components/Charts/MultipleBarChart';
import {DatePickerWithRange} from './components/DatePicker/DatePickerWithRange';

function App() {
	return (
		<div>
			<div className='p-6 space-y-6'>
				<div>
					<h1 className='text-3xl font-bold'>Daily Performance Metrics</h1>
					<p className='text-gray-500'>Tracking clicks, revenue, and conversion rates over time.</p>
				</div>

				<SummarySection />
				<div className='grid grid-cols-2 gap-4'>
					<div className='bg-white shadow rounded p-4'>
						<h3 className='font-bold'>Trend Line</h3>
						<canvas id='lineChart'></canvas>
					</div>
					<div className='bg-white shadow rounded p-4'>
						<h3 className='font-bold'>Revenue Bar Chart</h3>
						<canvas id='barChart'></canvas>
					</div>
				</div>

				<DetailsMetrics />
				<DatePickerWithRange />
				<div className='flex gap-4'>
					<div className='w-[50vw]'>
						<MultipleLinesChart />
					</div>
					<div className='w-[50vw]'>
						<MultipleBarChart />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
