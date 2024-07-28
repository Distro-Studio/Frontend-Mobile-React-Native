import React from 'react';
import {Calendar} from 'react-native-calendars';
import {APP} from '../../utils/CONSTANT';

function RangeDatePicker() {
  const [selectedRange, setSelectedRange] = React.useState({
    startDate: null,
    endDate: null,
  });
  const onDayPress = day => {
    if (
      !selectedRange.startDate ||
      (selectedRange.startDate && selectedRange.endDate)
    ) {
      // Resetting or starting a new range selection
      setSelectedRange({
        startDate: day.dateString,
        endDate: null,
      });
    } else {
      // Setting end date of the range
      setSelectedRange({
        ...selectedRange,
        endDate: day.dateString,
      });
    }
  };

  const getMarkedDates = () => {
    const markedDates = {};
    if (selectedRange.startDate) {
      markedDates[selectedRange.startDate] = {
        startingDay: true,
        color: APP.COLORS['primary-500'],
        textColor: 'white',
      };
    }
    if (selectedRange.endDate) {
      markedDates[selectedRange.endDate] = {
        endingDay: true,
        color: APP.COLORS['primary-500'],
        textColor: 'white',
      };
    }
    if (selectedRange.startDate && selectedRange.endDate) {
      let start = new Date(selectedRange.startDate);
      let end = new Date(selectedRange.endDate);
      while (start <= end) {
        const dateString = start.toISOString().split('T')[0];
        if (
          dateString !== selectedRange.startDate &&
          dateString !== selectedRange.endDate
        ) {
          markedDates[dateString] = {
            color: APP.COLORS['primary-200'],
            textColor: 'white',
          };
        }
        start.setDate(start.getDate() + 1);
      }
    }
    return markedDates;
  };
  return (
    <Calendar
      onDayPress={onDayPress}
      markedDates={getMarkedDates()}
      markingType={'period'}
    />
  );
}

export default RangeDatePicker;
