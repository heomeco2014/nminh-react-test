const DetailsMetrics = () => {
	return (
		<div className='bg-white shadow rounded p-4'>
			<h3 className='font-bold'>Detailed Metrics</h3>
			<table className='min-w-full border-collapse border border-gray-200'>
				<thead className='bg-gray-50'>
					<tr>
						<th className='border border-gray-200 p-2 text-left'>Date</th>
						<th className='border border-gray-200 p-2 text-left'>Clicks</th>
						<th className='border border-gray-200 p-2 text-left'>Revenue</th>
						<th className='border border-gray-200 p-2 text-left'>Conversion Rate</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className='border border-gray-200 p-2'>2023-12-01</td>
						<td className='border border-gray-200 p-2'>120</td>
						<td className='border border-gray-200 p-2'>$300</td>
						<td className='border border-gray-200 p-2'>5%</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default DetailsMetrics;
