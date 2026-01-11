import React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';



const CalendarBlock = () => {
  const [value, setValue] = React.useState(dayjs(new Date));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
    </LocalizationProvider>

    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    //   <DateCalendar />
    // </LocalizationProvider>
  );
}

export default CalendarBlock;
