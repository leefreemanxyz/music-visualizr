import React, {PureComponent} from 'react'
import {TableRow, TableRowColumn} from '../styled-components/Table'
import moment from 'moment'

export default class PlaybackRow extends PureComponent {
  render(){
    const playback = this.props.playback
    return(
      <TableRow>
        <TableRowColumn>{playback.song.name}</TableRowColumn>
        <TableRowColumn>{playback.song.artist.name}</TableRowColumn>
        {/* <TableRowColumn>{playback.song.album.name}</TableRowColumn> */}
        <TableRowColumn>{moment(playback.played_at, "YYYY-MM-DD hh:mm:ss").fromNow()}</TableRowColumn>
      </TableRow>
    )
  }
}
