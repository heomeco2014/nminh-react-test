import {useAppContext} from '@/providers/AppContext';
import {Skeleton} from '@/ui/skeleton';
import {MousePointer, DollarSign, Target} from 'lucide-react';

const SummarySection = () => {
	const {summaryData, isFakeLoading} = useAppContext();
	const {clicks, revenue, conversionRate} = summaryData;

	const summaryCards = [
		{
			title: 'Total Clicks',
			value: clicks.toLocaleString(),
			icon: <MousePointer className='w-8 h-8 text-blue-500 transition-transform transform group-hover:scale-110' />,
			bgGradient: 'from-blue-100 via-blue-50 to-blue-200',
			textColor: 'text-blue-700',
		},
		{
			title: 'Total Revenue',
			value: `$${revenue.toLocaleString()}`,
			icon: <DollarSign className='w-8 h-8 transition-transform transform text-emerald-500 group-hover:scale-110' />,
			bgGradient: 'from-emerald-100 via-emerald-50 to-emerald-200',
			textColor: 'text-emerald-700',
		},
		{
			title: 'Conversion Rate',
			value: `${conversionRate.toFixed(2)}%`,
			icon: <Target className='w-8 h-8 transition-transform transform text-violet-500 group-hover:scale-110' />,
			bgGradient: 'from-violet-100 via-violet-50 to-violet-200',
			textColor: 'text-violet-700',
		},
	];

	if (isFakeLoading) return <SummarySkeleton />;
	return (
		<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
			{summaryCards.map((card, index) => (
				<div
					key={index}
					className={`relative overflow-hidden p-8 rounded-2xl bg-gradient-to-br ${card.bgGradient}
            shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}>
					<div className='flex items-start justify-between mb-6'>
						<div className='p-3 rounded-lg shadow-md bg-white/70 backdrop-blur-md'>{card.icon}</div>
					</div>

					<div className='space-y-3'>
						<h2 className='text-lg font-semibold text-gray-700'>{card.title}</h2>
						<p className={`text-4xl font-extrabold ${card.textColor}`}>{card.value}</p>
					</div>

					{/* Decorative elements */}
					<div className='absolute rounded-full w-36 h-36 -right-12 -bottom-12 bg-white/10 blur-md' />
					<div className='absolute rounded-full w-28 h-28 -right-6 -bottom-6 bg-white/20 blur-sm' />
				</div>
			))}
		</div>
	);
};

export default SummarySection;

export const SummarySkeleton = () => {
	return (
		<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
			{Array.from({length: 3}).map((_, index) => (
				<div key={index} className='relative p-8 overflow-hidden shadow-lg rounded-2xl bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200'>
					{/* Icon Skeleton */}
					<div className='flex items-start justify-between mb-6'>
						<div className='p-3 rounded-lg shadow-md bg-white/70 backdrop-blur-md'>
							<Skeleton className='w-8 h-8' />
						</div>
					</div>

					{/* Text Skeleton */}
					<div className='space-y-3'>
						<Skeleton className='w-1/2 h-6' />
						<Skeleton className='w-3/4 h-12' />
					</div>

					{/* Decorative Elements */}
					<div className='absolute rounded-full w-36 h-36 -right-12 -bottom-12 bg-white/10 blur-md' />
					<div className='absolute rounded-full w-28 h-28 -right-6 -bottom-6 bg-white/20 blur-sm' />
				</div>
			))}
		</div>
	);
};
