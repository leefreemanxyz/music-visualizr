import React, {PureComponent} from 'react'
import DailyPlaybackGraph from './DailyPlaybackGraph'
import ArtistGraph from './ArtistGraph'
import AlbumGraph from './AlbumGraph'
import SongGraph from './SongGraph'

const styles = {
  graphsContainer:{
    margin: "0 auto",
    textAlign:"center",
    backgroundColor:"#ffffff"
  },
  playbackGraph:{
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
    boxShadow: "0 1px 1px rgba(0,0,0,0.15)",
},
breakdownGraphs:{
  display: "flex",
  flexDirection:"row",
  justifyContent:"space-between",
  margin:"10px"
}
}

export default class OverviewListens extends PureComponent {
  render() {
    return (
      <div style={styles.graphsContainer}>
        {this.props.data.playbacks &&
          <div>
          <div>
            <p>Total playbacks: {this.props.data.playbacks.length}</p>
          </div>
          <div style={styles.playbackGraph}>
            <div style={styles.breakdownGraphs}>
            <DailyPlaybackGraph data={this.props.data.playbacks}/>
            </div>
            <div style={styles.breakdownGraphs}>
              <ArtistGraph data={this.props.data.playbacks}/>

            <AlbumGraph data={this.props.data.playbacks}/>
            <SongGraph data={this.props.data.playbacks}/>
            </div>
          </div>
        </div>}
      </div>
    )
  }
}
