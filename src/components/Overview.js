import React, {PureComponent} from 'react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


import OverviewListens from './OverviewListens'

const styles = {
  overview: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  }
}

const MyQuery = gql`
    query PlaybacksQuery($start_date: Date!, $end_date: Date!, $user_id: ID!) {
      playbacks(start_date: $start_date, end_date: $end_date, user_id: $user_id ) {
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
const OverviewListensData = graphql(MyQuery, {
  options: (props) => ({
    variables: {
      start_date: props.startDate,
      end_date: props.endDate,
      user_id: props.userId
    }})
  })(OverviewListens);

export default class Overview extends PureComponent {
  constructor(props) {
    super(props)
    let startDate = new Date(Date.now() - (86400000 * 7))
    let endDate = new Date(Date.now() + 86400000)
    this.state = {
      startDate: startDate,
      endDate: endDate,
      defStartDate: startDate,
      defEndDate: endDate
    }
  }
  render(){
    return (
      <div style={styles.overview}>
        <OverviewListensData startDate={this.state.startDate} endDate={this.state.endDate} userId={1} />
      </div>
    )
  }
}
