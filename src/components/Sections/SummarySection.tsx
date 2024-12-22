import data from '../../data/data.json';
const SummarySection = () => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4'>
			{/* Period */}
			<div className='bg-white shadow rounded p-4'>
				<h2 className='text-xl font-bold'>Period</h2>
				<p className='text-gray-600 text-2xl'>2023-12-01</p>
			</div>
			{/* Clicks */}
			<div className='bg-white shadow rounded p-4'>
				<h2 className='text-xl font-bold'>Total Clicks</h2>
				<p className='text-blue-600 text-2xl'>680</p>
			</div>
			{/* Revenue */}
			<div className='bg-white shadow rounded p-4'>
				<h2 className='text-xl font-bold'>Total Revenue</h2>
				<p className='text-green-600 text-2xl'>$1,200</p>
			</div>
			{/* Conversion Rate */}
			<div className='bg-white shadow rounded p-4'>
				<h2 className='text-xl font-bold'>Conversion Rate</h2>
				<p className='text-yellow-600 text-2xl'>5%</p>
			</div>
		</div>
	);
};

export default SummarySection;
