import React, { Component } from 'react';

import Overview from './components/Overview'
import Header from './components/Header'

const styles = {
  app: {
    fontFamily: "Roboto",
    backgroundColor:"#80cbc4"
  },
  dates: {
    width: "980px",
    margin: "0 auto",
    justifyContent:"space-around",
    alignItems:"flex-end",
    display: "flex",
    padding: "10px",
    textAlign:"center",
    span: {
      paddingRight:"10px"
    },
    div: {
      display: "flex"
    }
  },
  datesDiv: {
    display:"flex",

  }
}

class App extends Component {
  constructor(props){
    super(props)
    let startDate = new Date(Date.now() - (86400000 * 7))
    let endDate =  new Date(Date.now())
    this.state ={
      startDate: startDate,
      endDate: endDate
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
  this.setState({
    [event.target.id]: event.target.value
  })
  }
  render() {
    return (
      <div style={styles.app}>
        <Header />
        <div style={styles.dates}>
          <div style={styles.dates.div}>
          <span style={styles.dates.span}>Start</span>
        <input type="date" id="startDate" onChange={this.handleChange}/>
        </div>
        <div style={styles.dates.div}>
        <span style={styles.dates.span}>End</span>
        <input type="date" id="endDate" onChange={this.handleChange}/>
        </div>
        </div>
        <Overview startDate={this.state.startDate} endDate={this.state.endDate} />
      </div>
    );
  }
}

export default App;
