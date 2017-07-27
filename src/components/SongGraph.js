import React, {PureComponent} from 'react'
import { BarChart, Bar, Tooltip, XAxis, YAxis, Cell} from 'recharts'
import TextField from 'material-ui/TextField'

import {palette} from '../palette'
const styles = {
  graph: {
    padding:"10px",
    boxShadow: "0 1px 1px rgba(0,0,0,0.15)"
  },
  title: {
    textAlign: "center"
  }


}

export default class SongGraph extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      limit: 25
    }
    this.updateLimit = this.updateLimit.bind(this)
  }
  componentDidMount(){
    let randSong = this.props.data[Math.floor(Math.random() * this.props.data.length)]
    this.changeSpotifyPlayer(randSong)
  }
  updateLimit(event, value){
    this.setState({
      limit: value
    })
  }
  changeSpotifyPlayer(song){
    this.props.onSongClick(song, "song")
  }
  render(){
    const { data } = this.props
    let songs = data.map((datum)=>{
      return {...datum, count: 0}
    })
    songs.forEach((song)=>{
      let y = songs.find((x)=>{
        return x.song.name === song.song.name
      })
      y.count += 1
    })
    songs = songs.filter((song)=>{
      return song.count > 0
    })
    songs.sort((a,b)=>{
      return b.count - a.count
    })
    songs = songs.slice(0,this.state.limit)

    return (
      <div style={styles.graph}>
          <TextField floatingLabelText="Song Limit" defaultValue="25 "type="number" onChange={(event,value)=> this.updateLimit(event,value)}/>

        <BarChart data={songs} width={300} height={300}>
          <XAxis dataKey="song.name" hide={true} />
          <YAxis />
          <Tooltip />
            <Bar dataKey="count">
              {
                songs.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={palette[index % palette.length]} onClick={()=>this.changeSpotifyPlayer(entry)}/>
                ))
              }
            </Bar>
        </BarChart>
        <span>Songs</span>
      </div>
    )
  }


}
