import React, {PureComponent} from 'react'
import PlaybacksTable from './PlaybacksTable'
import SongPlaybacks from './SongPlaybacks'
import AlbumPlaybacks from './AlbumPlaybacks'
import ArtistPlaybacks from './ArtistPlaybacks'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Dropdown from 'react-dropdown'
import {UserContainer} from '../styled-components/UserContainer'
import {TimeSelecter} from '../styled-components/TimeSelecter'

const PagedPlaybacks = gql`
    query PlaybacksQuery($user_id: ID!, $offset: Int!) {
      playbacks(user_id: $user_id, offset: $offset ) {
        played_at
        song{
          name,
          song_uri,
          artist{
            name,
            artist_image,
            artist_uri
          }
          album{
            name,
            album_image,
            album_uri
          }
        }
      }
    }
`

const TimePlaybackQuery = gql`
    query PlaybacksQuery($start_date: Date!, $end_date: Date!, $user_id: ID!) {
      playbacks(start_date: $start_date, end_date: $end_date, user_id: $user_id ) {
        played_at
        song{
          name,
          song_uri,
          
        }
        artist{
          name,
          artist_image,
          artist_uri
        }
        album{
          name,
          album_image,
          album_uri
        }


      }
    }
`
const SongPlaybackQuery = gql`
  query SongsPlaybackQuery($start_date: Date!, $end_date: Date!, $user_id: ID!){
    songPlaybacks(start_date: $start_date, end_date: $end_date, user_id: $user_id){
      song {
        name,
        id,
      }
      artist {
        name,
        id,
        artist_image
      }
      album {
        name,
        id,
        album_image
      }
    }
  }`

  const SongPlaybacksWithData = graphql(SongPlaybackQuery, {
    options: (props) =>({
      variables: {
        start_date: props.startDate,
        end_date: props.endDate,
        user_id: props.userId
      }
    })
  })(SongPlaybacks)
  const AlbumPlaybacksWithData = graphql(SongPlaybackQuery, {
    options: (props) =>({
      variables: {
        start_date: props.startDate,
        end_date: props.endDate,
        user_id: props.userId
      }
    })
  })(AlbumPlaybacks)
  const ArtistPlaybacksWithData = graphql(SongPlaybackQuery, {
    options: (props) =>({
      variables: {
        start_date: props.startDate,
        end_date: props.endDate,
        user_id: props.userId
      }
    })
  })(ArtistPlaybacks)

const PlaybacksTableWithData = graphql(PagedPlaybacks, {
  options: (props) => ({
    variables: {
      user_id: props.userId,
      offset: props.offset
    }})
  })(PlaybacksTable);

const options = [
  {value:"7", label:"Last Week"},
  {value:"30", label:"Last 30 Days"},
  {value:"180", label:"Last 6 Months"},
  {value:"365", label:"Last Year"},
  {value:"0", label:"All time"},
]
const defaultOption = options[0]
export default class PublicProfile extends PureComponent {
  constructor(props){
    super(props)
    let startDate = new Date(Date.now() - (86400000 * 7))
    let endDate = new Date(Date.now() + 86400000)
    this.state = {
      offset: 0,
      startDate,
      endDate,
      selected: 'Select a time period'
    }
  }
  previousPage = () => {
    this.setState({
      offset: this.state.offset + 20
    })
  }
  nextPage = () => {
    this.setState({
      offset: this.state.offset - 20
    })
  }
  setLastSevenDays = () =>{
    this.setState({
      startDate: new Date(Date.now() - (86400000 * 7))
    })
  }
  setLastThirtyDays = () => {
    this.setState({
      startDate: new Date(Date.now() - (86400000 * 30))
    })
  }
  setLastSixMonths = () => {
    this.setState({
      startDate: new Date(Date.now() - (86400000 * 180))
    })
  }
  setLastYear = () => {
    this.setState({
      startDate: new Date(Date.now() - (86400000 * 365))
    })
  }
  setAllTime = () => {
    this.setState({
      startDate: new Date(0)
    })
  }
  selectTimePeriod = (data) => {
    const allTime = (data.value == 0)
    this.setState({
      selected: data.label,
      startDate: allTime ? new Date(0) : new Date(Date.now() - (86400000 * data.value))
    })
  }
  render(){
    const {userId} = this.props.match.params

    return(
      <UserContainer>
        <div>
          <PlaybacksTableWithData userId={userId} offset={this.state.offset}/>
          <div>
            <button onClick={this.previousPage}>Prev</button>
            {this.state.offset <= 0 ? null : <button onClick={this.nextPage}>Next</button>}
          </div>
        </div>
        <TimeSelecter>
          <Dropdown options={options} onChange={this.selectTimePeriod} value={this.state.selected} placeholder="Select a time period" />
        </TimeSelecter>
        <SongPlaybacksWithData startDate={this.state.startDate} endDate={this.state.endDate} userId={userId}/>
        <AlbumPlaybacksWithData startDate={this.state.startDate} endDate={this.state.endDate} userId={userId}/>
        <ArtistPlaybacksWithData startDate={this.state.startDate} endDate={this.state.endDate} userId={userId}/>
      </UserContainer>

    )
  }

}
