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
  renderTooltip(event){
    if(event.payload.length > 0){
    console.log(event.payload[0].payload.album.album_image)
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
    return (
      <div style={styles.graph}>
        <h3 style={styles.title}>Albums</h3>
         <BarChart data={albums} width={300} height={300}>
          <XAxis dataKey="album.name" hide={true} />
          <YAxis />
          <Tooltip content={this.renderTooltip.bind(this)}/>
          <Bar dataKey="count">
            {
              albums.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={palette[index % palette.length]}/>
              ))
            }
          </Bar>
        </BarChart>

      </div>
    )
  }
}
