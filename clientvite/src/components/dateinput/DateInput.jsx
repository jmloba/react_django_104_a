import React from "react";
class DateInput extends React.Component{
  constructor(){
    super()
    this.state={
      date1: new Date().toISOString().slice(0,10)
    }
  }
  selectedDate = (e)=>{
    this.setState({date1:e.target.value})


  }
  render(){

    return (
      <>
      <h4>Set default date</h4>
      <input type="date" 
      value={this.state.date1}
      onChange={this.selectedDate}
       />
      <hr />
      <h4>{this.state.date1}</h4>
      


      </>

    )
  }

}

export default DateInput