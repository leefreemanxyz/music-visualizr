import React, {PureComponent} from 'react'
import { BarChart, Bar, Tooltip, XAxis, YAxis, Cell} from 'recharts'
import {palette} from '../palette'
import TextField from 'material-ui/TextField'
const styles = {
  graph: {
    padding:"10px",
    boxShadow: "0 1px 1px rgba(0,0,0,0.15)"
  },
  tooltip:{
    display:"flex",
    flexDirection:"column",
    padding:"10px",
    boxShadow: "0 1px 1px rgba(0,0,0,0.15)",
    backgroundColor:"#ffffff"
  }
}

export default class AlbumGraph extends PureComponent {
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
  changeSpotifyPlayer(album){
    this.props.onAlbumClick(album, "album")
  }

  renderTooltip(event){
    if(event.payload.length > 0){
    const name = event.payload[0].payload.album.name
    const image = event.payload[0].payload.album.album_image
    const count = event.payload[0].payload.count
    return <div style={styles.tooltip}><span>{name}</span><img src={image} alt={name} width={100}/><span>Play count:{count}</span></div>
  }
    return null
  }
  render(){
    const { data } = this.props
    let albums = data.map((datum)=>{
      let album = datum.song.album
      return {album, count: 0}
    })
    albums.forEach((album)=>{
      let y = albums.find((x)=>{
        return x.album.name === album.album.name
      })
      y.count += 1
    })
    albums = albums.filter((album)=>{
      return album.count > 0
    })
    albums.sort((a,b)=>{
      return b.count - a.count
    })
    albums = albums.slice(0,this.state.limit)
    return (
      <div style={styles.graph}>
        <TextField floatingLabelText="Album Limit" defaultValue="25 "type="number" onChange={(event,value)=> this.updateLimit(event,value)}/>
         <BarChart data={albums} width={300} height={300}>
          <XAxis dataKey="album.name" hide={true}/>
          <YAxis />
          <Tooltip content={this.renderTooltip.bind(this)}/>
          <Bar dataKey="count">
            {
              albums.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={palette[index % palette.length]} onClick={()=>this.changeSpotifyPlayer(entry)}/>
              ))
            }
          </Bar>
        </BarChart>
        <span>Albums</span>
      </div>
    )
  }
}
