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
  },
  tooltip:{
    display:"flex",
    flexDirection:"column",
    padding:"10px",
    boxShadow: "0 1px 1px rgba(0,0,0,0.15)",
    backgroundColor:"#ffffff"
  }
}
export default class ArtistGraph extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      limit: 25
    }
    this.updateLimit = this.updateLimit.bind(this)
  }
  updateLimit(event, value){
    this.setState({
      limit: value
    })
  }
  changeSpotifyPlayer(artist){
    this.props.onArtistClick(artist, "artist")
  }
  renderTooltip(event){
    if(event.payload.length > 0){
    const name = event.payload[0].payload.artist.name
    const image = event.payload[0].payload.artist.artist_image
    const count = event.payload[0].payload.count
    return <div style={styles.tooltip}><span>{name}</span><img src={image} alt={name} width={100}/><span>Play count:{count}</span></div>
  }
    return null
  }
  render(){
    const { data } = this.props
    let artists = data.map((datum)=>{
      let artist = datum.song.artist
      return {artist, count: 0}
    })
    artists.forEach((artist)=>{
      let y = artists.find((x)=>{
        return x.artist.name === artist.artist.name
      })
      y.count += 1
    })
    artists = artists.filter((artist)=>{
      return artist.count > 0
    })
    artists.sort((a,b)=>{
      return b.count - a.count
    })
    artists = artists.slice(0,this.state.limit)

    return (
      <div style={styles.graph}>
          <TextField floatingLabelText="Artist Limit" defaultValue="25 "type="number" onChange={(event,value)=> this.updateLimit(event,value)}/>

         <BarChart data={artists} width={300} height={300}>
          <XAxis dataKey="artist.name" hide={true} />
          <YAxis />
          <Tooltip content={this.renderTooltip.bind(this)}/>
            <Bar dataKey="count">
              {
                artists.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={palette[index % palette.length]} onClick={()=>this.changeSpotifyPlayer(entry)}/>
                ))
              }
            </Bar>
        </BarChart>
        <span>Artists</span>
      </div>
    )
  }
}
