import React from 'react';
import {format} from 'date-fns';
import {Calendar} from '@/ui/calendar';
import {Popover, PopoverContent, PopoverTrigger} from '@/ui/popover';
import {Button} from '@/ui/button';
import {CalendarIcon} from 'lucide-react';
import {cn} from '@/lib/utils';
import {DateRange} from 'react-day-picker';

interface DatePickerWithRangeProps {
	date?: DateRange | undefined;
	onDateChange?: (date: DateRange | undefined) => void;
}

export function DatePickerWithRange({date: controlledDate, onDateChange}: DatePickerWithRangeProps) {
	const [internalDate, setInternalDate] = React.useState<DateRange | undefined>({
		from: new Date('2023-12-01'),
		to: new Date('2023-12-01'), // Initialize with same date for single-day selection
	});

	const isControlled = controlledDate !== undefined;
	const date = isControlled ? controlledDate : internalDate;

	const handleDateChange = (newDate: DateRange | undefined) => {
		// Handle single day selection
		if (newDate?.from && !newDate.to) {
			const singleDaySelection = {
				from: newDate.from,
				to: newDate.from,
			};
			if (!isControlled) {
				setInternalDate(singleDaySelection);
			}
			onDateChange?.(singleDaySelection);
			return;
		}

		// Handle range selection
		if (!isControlled) {
			setInternalDate(newDate);
		}
		onDateChange?.(newDate);
	};

	const getDisplayText = () => {
		if (!date?.from) return <span>Pick a date</span>;

		if (date.to) {
			// If it's the same day or a range
			return date.from.getTime() === date.to.getTime() ? (
				format(date.from, 'LLL dd, y')
			) : (
				<>
					{format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
				</>
			);
		}

		return format(date.from, 'LLL dd, y');
	};

	return (
		<div className='grid gap-2'>
			<Popover>
				<PopoverTrigger asChild>
					<Button id='date' variant='outline' className={cn('w-full justify-start text-left font-normal', !date && 'text-muted-foreground')}>
						<CalendarIcon className='w-4 h-4 mr-2' />
						{getDisplayText()}
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-auto p-0' align='start'>
					<div className='p-3 border-b'>
						<div className='text-sm text-muted-foreground'>Click once for single day, click and drag for range</div>
					</div>

					<Calendar initialFocus mode='range' defaultMonth={new Date('2023-12-01')} selected={date} onSelect={handleDateChange} numberOfMonths={2} fromDate={new Date('2023-12-01')} toDate={new Date('2023-12-05')} />
				</PopoverContent>
			</Popover>
		</div>
	);
}
