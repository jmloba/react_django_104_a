import React from 'react'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import {addDays, isWeekend} from "date-fns"
import { detectExtension } from 'nodemailer/lib/mime-funcs/mime-types'

const ReactDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const handleDateChange = (date)=>{
    setSelectedDate(date)
  };
  const min_date = new Date("8-1-2025")
  const max_date = new Date()

  const isWeekendDay =(date)=>{
    return isWeekend(date)
  }
  const filterWeekends =(date)=>{
    return !isWeekendDay(date)
  }
  const importantDates=['08-18-2025','08-23-2025'];
  const hightlightImportntDates = (date)=>{
    const formattedDate = date.toLocalDatetring("en-US");
    return  importantDates.includes(formattedDate)

  }
  return (
    <>
    <p>highlighted days(green) are special holidays</p>
    <DatePicker 
    // inline
    selected={selectedDate}
    onChange={handleDateChange}
    // dateFormat="dd/MM/yyyy; hh:mm"
    dateFormat="dd/MM/yyyy"
    
    // minDate={min_date}
    // maxDate={max_date}

    // filterDate={filterWeekends}

    // showTimeSelect
    // timeIntervals={30}
    // timeFormat='hh:mm'
    highlightDates={importantDates.map((dateString)=> new Date(dateString))}
    
    />
    
    </>
    
  )
}

export default ReactDatePicker