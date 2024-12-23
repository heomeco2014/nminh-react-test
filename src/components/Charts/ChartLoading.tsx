import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/ui/card';
import {Skeleton} from '@/ui/skeleton';

export function ChartLoading() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>
					<Skeleton className='w-32 h-6' />
				</CardTitle>
				<Skeleton className='w-48 h-4 mt-2' />
			</CardHeader>
			<CardContent className='flex flex-col gap-20'>
				<div className='w-full bg-gray-100 rounded-lg h-[1px]'>
					<Skeleton className='w-full h-full' />
				</div>
				<div className='w-full bg-gray-100 rounded-lg h-[1px]'>
					<Skeleton className='w-full h-full' />
				</div>
				<div className='w-full bg-gray-100 rounded-lg h-[1px]'>
					<Skeleton className='w-full h-full' />
				</div>
				<div className='w-full bg-gray-100 rounded-lg h-[1px]'>
					<Skeleton className='w-full h-full' />
				</div>
				<div className='w-full bg-gray-100 rounded-lg h-[1px]'>
					<Skeleton className='w-full h-full' />
				</div>
			</CardContent>
			<CardFooter className='flex items-start gap-2 text-sm'>
				<div className='flex gap-2 font-medium leading-none'>
					<Skeleton className='h-5 w-36' />
				</div>
				<div className='flex gap-2 font-medium leading-none'>
					<Skeleton className='h-5 w-36' />
				</div>
				<div className='flex gap-2 font-medium leading-none'>
					<Skeleton className='h-5 w-36' />
				</div>
				<div className='flex gap-2 font-medium leading-none'>
					<Skeleton className='h-5 w-36' />
				</div>
			</CardFooter>
		</Card>
	);
}
