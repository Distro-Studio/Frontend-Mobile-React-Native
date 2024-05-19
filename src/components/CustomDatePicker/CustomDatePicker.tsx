import React from 'react';
import DatePicker from 'react-native-modern-datepicker';
const CustomDatePicker = (props: any) => {
  const {modeCalendar, ...rest} = props;
  return <DatePicker mode={modeCalendar} {...rest} />;
};

export default CustomDatePicker;
