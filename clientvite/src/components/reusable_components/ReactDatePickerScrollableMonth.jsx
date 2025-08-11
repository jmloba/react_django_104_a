import React from 'react'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const ReactDatePickerScrollableMonth = () => {
  const [selectedDate, setSelectedDate] = useState(null) 
  const handleDateChange =(date)=>{
    setSelectedDate(date)
  }

  return (
    <>
    <h4>for scrollable month  date picker</h4>
    <DatePicker 
      selected={selectedDate} 
      onChange={handleDateChange}
      dateFormat='MM/dd/yyyy'
      showWeekNumbers
      showMonthDropdown
      showYearDropdown
      scrollableYearDropdown
      scrollableMonthYearDropdown
      yearDropdownItemNumber={80}
    />
    </>
  )
}

export default ReactDatePickerScrollableMonth