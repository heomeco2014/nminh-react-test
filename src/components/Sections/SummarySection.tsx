import React from 'react';
import {useAppContext} from '@/providers/AppContext';
import {MousePointer, DollarSign, Target} from 'lucide-react';

const SummarySection = () => {
	const {summaryData} = useAppContext();
	const {clicks, revenue, conversionRate} = summaryData;

	const summaryCards = [
		{
			title: 'Total Clicks',
			value: clicks.toLocaleString(),
			icon: <MousePointer className='w-6 h-6 text-blue-500' />,
			bgGradient: 'from-blue-50 to-blue-100',
			textColor: 'text-blue-700',
		},
		{
			title: 'Total Revenue',
			value: `$${revenue.toLocaleString()}`,
			icon: <DollarSign className='w-6 h-6 text-emerald-500' />,
			bgGradient: 'from-emerald-50 to-emerald-100',
			textColor: 'text-emerald-700',
		},
		{
			title: 'Conversion Rate',
			value: `${conversionRate.toFixed(2)}%`,
			icon: <Target className='w-6 h-6 text-violet-500' />,
			bgGradient: 'from-violet-50 to-violet-100',
			textColor: 'text-violet-700',
		},
	];

	return (
		<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
			{summaryCards.map((card, index) => (
				<div
					key={index}
					className={`relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br ${card.bgGradient}
            shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
					<div className='flex items-start justify-between mb-4'>
						<div className='p-2 rounded-lg shadow-sm bg-white/80 backdrop-blur-sm'>{card.icon}</div>
					</div>

					<div className='space-y-2'>
						<h2 className='text-sm font-medium text-gray-600'>{card.title}</h2>
						<p className={`text-3xl font-bold ${card.textColor}`}>{card.value}</p>
					</div>

					{/* Decorative elements */}
					<div className='absolute w-32 h-32 rounded-full -right-8 -bottom-8 bg-white/10' />
					<div className='absolute w-24 h-24 rounded-full -right-4 -bottom-4 bg-white/20' />
				</div>
			))}
		</div>
	);
};

export default SummarySection;
