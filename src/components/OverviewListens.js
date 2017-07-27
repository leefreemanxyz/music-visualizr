import React, {PureComponent} from 'react'
import SpotifyPlayer  from 'react-spotify-player'
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

const size = {
  width: '100%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'white'; // or 'white'


export default class OverviewListens extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      spotify: ""
    }
    this.setSpotifyEmbed = this.setSpotifyEmbed.bind(this)
  }
  setSpotifyEmbed(event, type){
    let value = ''
    if(type==='song'){
      value=event.song.song_uri
    }
    if(type==='album'){
      console.log(event)
      value = event.album.album_uri
    }
    if(type==='artist'){
      value = event.artist.artist_uri
    }
    this.setState({
      spotify: value
    })
  }
  render() {
    const { playbacks } = this.props.data
    return (
      <div style={styles.graphsContainer}>
        {playbacks &&
          <div>
          <div>
            <p>Total playbacks: {playbacks.length}</p>
          </div>
          <div style={styles.playbackGraph}>
            <div style={styles.breakdownGraphs}>
            <DailyPlaybackGraph data={playbacks}/>
            <SpotifyPlayer
              uri={this.state.spotify}
              size={size}
              view={view}
              theme={theme}
            />
            </div>
            <div style={styles.breakdownGraphs}>
              <ArtistGraph data={playbacks} onArtistClick={this.setSpotifyEmbed}/>
              <AlbumGraph data={playbacks} onAlbumClick={this.setSpotifyEmbed}/>
              <SongGraph data={playbacks} onSongClick={this.setSpotifyEmbed}/>
            </div>
          </div>
        </div>}
      </div>
    )
  }
}
