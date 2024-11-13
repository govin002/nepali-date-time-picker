import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { convertToNepaliDate } from '../core'; // Import core logic
import 'react-datepicker/dist/react-datepicker.css';

const NepaliDateTimePicker = ({ onDateChange, value, showTimeSelect = true, timeFormat = "HH:mm", dateFormat = "yyyy-MM-dd HH:mm" }) => {
  const handleDateChange = (date) => {
    if (onDateChange) {
      onDateChange(date);
    }
  };

  return (
    <div>
      <DatePicker
        selected={value}
        onChange={handleDateChange}
        showTimeSelect={showTimeSelect}
        timeFormat={timeFormat}
        dateFormat={dateFormat}
        timeIntervals={15}
        timeCaption="Time"
        className="date-picker"
      />
      {value && (
        <div>
          <h3>Selected Date in Nepali Format:</h3>
          <p>{convertToNepaliDate(value)}</p>
        </div>
      )}
    </div>
  );
};

export default NepaliDateTimePicker;
