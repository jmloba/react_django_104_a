import React from 'react'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const RestrictDefinedDates = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const handleDateChange =(date)=>{
    setSelectedDate(date)

  }
  const disableDateRange=[
    {start:new Date('08-24-2025'), end: new Date('09-5-2025')}
  ]

  return (
    <>
    <h4>Restricted defined dates ( 08-24-2025 to 09-5-2025)</h4>
    <DatePicker
      // inline
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="dd/MM/yyyy"
      excludeDateIntervals={disableDateRange}
    />
    


    </>

  )

}

export default RestrictDefinedDates
