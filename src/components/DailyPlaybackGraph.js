import React, {PureComponent} from 'react'
import {BarChart, Bar, XAxis, YAxis, Tooltip, Cell} from 'recharts'
import {palette} from '../palette'

const styles = {
  graph: {
    margin: "auto",
    padding:"10px",
    boxShadow: "0 1px 1px rgba(0,0,0,0.15)"
  }
}


export default class DailyPlaybackGraph extends PureComponent {
  render() {
    const daysOfWeek = [
      {day: "Sunday", count:0},
      {day: "Monday", count:0},
      {day: "Tuesday", count:0},
      {day: "Wednesday", count:0},
      {day: "Thursday", count:0},
      {day: "Friday", count:0},
      {day: "Saturday", count:0}
    ]    
    this.props.data.forEach((v, i) => {
      let day = (new Date(v.created_at)).getDay()
      daysOfWeek[day].count += 1
    })
    return (
      <div style={styles.graph}>
        <BarChart data={daysOfWeek} width={600} height={300}>
          <XAxis dataKey="day"/>
          <YAxis />
          <Tooltip  />
          <Bar dataKey="count">
            {
              daysOfWeek.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={palette[index % palette.length]}/>
              ))
            }
          </Bar>
        </BarChart>
      </div>
    )
  }
}
