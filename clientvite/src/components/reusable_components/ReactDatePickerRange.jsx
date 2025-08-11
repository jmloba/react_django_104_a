import React, { useEffect } from 'react'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


const ReactDatePickerRange = () => {
    const [selectedDate, setSelectedDate] = useState(null) 
    const [dateRange, setDateRange] = useState("")
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(null)

    const handleDateChange =(date)=>{
     const [start, end] = date;
     setStartDate(start)
     setEndDate(end);

    }
    useEffect( () => {
      if (startDate && endDate){
          setDateRange(
            `Selected start date : ${startDate.toDateString()}-${endDate.toDateString()}`)
      } else if (startDate){
        setDateRange(`Selected start date: ${startDate.toDateString()}`)
      }else {
        setDateRange('')
      }
    
    },[startDate,endDate])

  return (
       <>
       <h4>for date  range</h4>
       <DatePicker 
         selected={startDate} 
         onChange={handleDateChange}
         dateFormat='MM/dd/yyyy'
         startDate={startDate}
         endDate={endDate}
         selectsRange
         inline
       />
       <p>Selected Range{dateRange}</p>
       </>
  )
}

export default ReactDatePickerRange