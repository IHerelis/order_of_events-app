import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';



const CalendarBlock = () => {
  const [value, setValue] = React.useState(dayjs());
  // const [value, setValue] = React.useState(dayjs(new Date));

  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="uk">
    //   <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
    // </LocalizationProvider>

    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="uk">
      <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} 
        sx={{
          height: '242px',
          width: '270px',
          pt: '2px',

          '& .MuiPickersCalendarHeader-root': {
            mt: '2px',
            mb: '2px',
            minHeight: '32px',
            maxHeight: '32px',
          },
          '& .MuiPickersCalendarHeader-root .MuiButtonBase-root': {
            p: '4px',
          },

          '& .MuiDayCalendar-header': {
            pl: '24px',
            pr: '22px',
          },
          '& .MuiDayCalendar-header .MuiDayCalendar-weekDayLabel': {
            height: '16px',
          },

          '& .MuiPickersSlideTransition-root': {
            minHeight: '182px',
          },

          '& .MuiDayCalendar-weekContainer .MuiPickersDay-root': {
            width: '28px',
            height: '28px',
          },

          '& .MuiDayCalendar-weekContainer .MuiPickersDay-root.Mui-selected': {
            backgroundColor: 'rgb(40, 141, 40)',
            fontSize: '14px',
          },

          '& .MuiYearCalendar-root': {
            width: '270px',
          },
        }}
      />
    </LocalizationProvider>

    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    //   <DateCalendar />
    // </LocalizationProvider>
  );
}

export default CalendarBlock;
