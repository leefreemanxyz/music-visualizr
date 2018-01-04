import React, {PureComponent} from 'react'
import {Table,TableHeader,TableHeaderColumn,TableRow,TableBody} from '../styled-components/Table'
import PlaybackRow from './PlaybackRow'

export default class PlaybacksTable extends PureComponent {
  render(){
    if(!this.props.data.playbacks) return null
    return(
      <div>
        <h3>Your recent music</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Song</TableHeaderColumn>
            <TableHeaderColumn>Artist</TableHeaderColumn>
            {/* <TableHeaderColumn>Album</TableHeaderColumn> */}
            <TableHeaderColumn>Played at</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.props.data.playbacks.map((playback,index)=>{
            return <PlaybackRow key={index} playback={playback}/>
          })}
        </TableBody>
      </Table>
    </div>
    )
  }
}
