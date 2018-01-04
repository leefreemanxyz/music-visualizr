import React, {
    PureComponent
} from 'react'
import { Table, TableBody,TableRow,TableRowColumn, TableHeader, TableHeaderColumn } from '../styled-components/Table';

export default class SongPlaybacks extends PureComponent {
        render() {
        const {
            songPlaybacks
        } = this.props.data
        if (!songPlaybacks) return null
        let songPlaybacksWithCount = songPlaybacks.reduce((result, playback) => {
            if (result && result.find(resultItem => resultItem.song.id === playback.song.id)) {
                return result
            } else {
                let count = songPlaybacks.filter(song => song.song.id === playback.song.id)
                result.push(Object.assign({}, playback, {
                    "count": count.length
                }))
                return result
            }
        }, [])

        songPlaybacksWithCount.sort((a, b) => {
            return b.count - a.count
        })
        return ( 
            <div>
                <h3>Songs</h3>
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHeaderColumn>
                        Song
                            </TableHeaderColumn>
                            <TableHeaderColumn>
Play count
</TableHeaderColumn>
                            </TableRow>
                    </TableHeader>
                    <TableBody>
                {songPlaybacksWithCount[0] && <TableRow>
                        <TableRowColumn>
                            {songPlaybacksWithCount[0].song.name} - {songPlaybacksWithCount[0].artist.name}
                        </TableRowColumn>
                        <TableRowColumn>
                            {songPlaybacksWithCount[0].count}
                        </TableRowColumn>
                    </TableRow>}
                    {songPlaybacksWithCount[1] && <TableRow>
                        <TableRowColumn>
                            {songPlaybacksWithCount[1].song.name}  - {songPlaybacksWithCount[1].artist.name}
                        </TableRowColumn>
                        <TableRowColumn>
                            {songPlaybacksWithCount[1].count}
                        </TableRowColumn>
                    </TableRow>}
                    {songPlaybacksWithCount[2] && <TableRow>
                        <TableRowColumn>
                            {songPlaybacksWithCount[2].song.name} - {songPlaybacksWithCount[2].artist.name}
                        </TableRowColumn>
                        <TableRowColumn>
                            {songPlaybacksWithCount[2].count}
                        </TableRowColumn>
                    </TableRow>}
                    {songPlaybacksWithCount[3] && <TableRow>
                        <TableRowColumn>
                            {songPlaybacksWithCount[3].song.name} - {songPlaybacksWithCount[3].artist.name}
                        </TableRowColumn>
                        <TableRowColumn>
                            {songPlaybacksWithCount[3].count}
                        </TableRowColumn>
                    </TableRow>}
                    {songPlaybacksWithCount[4] && <TableRow>
                        <TableRowColumn>
                            {songPlaybacksWithCount[4].song.name} - {songPlaybacksWithCount[4].artist.name}
                        </TableRowColumn>
                        <TableRowColumn>
                            {songPlaybacksWithCount[4].count}
                        </TableRowColumn>
                    </TableRow>}
                    </TableBody>
                </Table>
            </div>
        )
    }
}