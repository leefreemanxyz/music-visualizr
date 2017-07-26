import React, {PureComponent} from 'react'
import { BarChart, Bar, Tooltip, XAxis, YAxis, Cell} from 'recharts'
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

    this.changeSpotifyPlayer = this.changeSpotifyPlayer.bind(this)
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
    return (
      <div style={styles.graph}>
        <h3 style={styles.title}>Songs</h3>
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
      </div>
    )
  }


}
