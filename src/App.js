import React, {Component} from 'react'

import Overview from './components/Overview'
import Header from './components/Header'

const styles = {
  app: {
    fontFamily: "Roboto",
    backgroundColor: "#80cbc4"
  },
  dates: {
    width: "980px",
    margin: "0 auto",
    justifyContent: "space-around",
    alignItems: "flex-end",
    display: "flex",
    padding: "10px",
    textAlign: "center",
    span: {
      paddingRight: "10px"
    },
    div: {
      display: "flex"
    }
  },
  datesDiv: {
    display: "flex"
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    let startDate = new Date(Date.now() - (86400000 * 7))
    let endDate = new Date(Date.now())
    this.state = {
      startDate: startDate,
      endDate: endDate,
      defStartDate: startDate,
      defEndDate: endDate
    }
    this.handleChange = this.handleChange.bind(this)
    this.changeStartDate = this.changeStartDate.bind(this)
    this.changeEndDate = this.changeEndDate.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  changeStartDate(value) {
    console.log(value)
    this.setState({startDate: value.toDateString()})
  }
  changeEndDate(value) {
    this.setState({endDate: value.toDateString()})
  }
  render() {
    return (
      <div style={styles.app}>
        <Header defaultStartDate={this.state.defStartDate} defaultEndDate={this.state.defEndDate} onStartDateChange={this.changeStartDate} onEndDateChange={this.changeEndDate}/>

        <Overview startDate={this.state.startDate} endDate={this.state.endDate}/>
      </div>
    );
  }
}

export default App;
