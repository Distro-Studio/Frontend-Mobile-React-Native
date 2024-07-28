import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {APP} from '../../utils/CONSTANT';

function SingleDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  const onDayPress = day => {
    setSelectedDate(day.dateString);
  };

  return (
    <Calendar
      onDayPress={onDayPress}
      markedDates={{
        [selectedDate]: {
          selected: true,
          selectedColor: APP.COLORS['primary-500'],
        },
      }}
    />
  );
}

export default SingleDatePicker;
