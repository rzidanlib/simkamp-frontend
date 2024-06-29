import React from 'react';
import PropTypes from 'prop-types';
import { Input, Popover, PopoverHandler, PopoverContent } from '@material-tailwind/react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import { Label } from '.';

const InputDate = React.forwardRef(({ id, label, error, className, ...props }, ref) => {
  const [selectedDate, setSelectedDate] = React.useState(
    props.value ? new Date(props.value) : undefined
  );

  React.useEffect(() => {
    // Update local state if value changes externally
    if (props.value) {
      setSelectedDate(new Date(props.value));
    }
  }, [props.value]);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    // Call the onChange prop with the new date in the expected format for the form
    props.onChange(newDate ? format(newDate, 'yyyy-MM-dd') : '');
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {label && <Label label={label} htmlFor={id} />}
      <Popover placement="bottom">
        <PopoverHandler>
          <Input
            id={id}
            ref={ref}
            size="lg"
            className={`!border !border-gray-300 bg-white text-gray-900 shadow-md shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 cursor-pointer ${className}`}
            labelProps={{ className: 'hidden' }}
            onClick={() => null} // Assuming onClick opens the popover
            value={selectedDate ? format(selectedDate, 'PPP') : ''}
            {...props}
          />
        </PopoverHandler>
        <PopoverContent>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={handleDateChange}
            showOutsideDays
            className="border-0"
            classNames={{
              caption: 'flex justify-center py-2 mb-4 relative items-center',
              caption_label: 'text-sm font-medium text-gray-900',
              nav: 'flex items-center',
              nav_button:
                'h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300',
              nav_button_previous: 'absolute left-1.5',
              nav_button_next: 'absolute right-1.5',
              table: 'w-full border-collapse',
              head_row: 'flex font-medium text-gray-900',
              head_cell: 'm-0.5 w-9 font-normal text-sm',
              row: 'flex w-full mt-2',
              cell: 'text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
              day: 'h-9 w-9 p-0 font-normal',
              day_range_end: 'day-range-end',
              day_selected:
                'rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white',
              day_today: 'rounded-md bg-gray-200 text-gray-900',
              day_outside:
                'day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10',
              day_disabled: 'text-gray-500 opacity-50',
              day_hidden: 'invisible',
            }}
            components={{
              IconLeft: ({ ...props }) => (
                <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
              ),
              IconRight: ({ ...props }) => (
                <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
              ),
            }}
          />
        </PopoverContent>
      </Popover>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
});

InputDate.displayName = 'InputDate';

InputDate.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export { InputDate };
