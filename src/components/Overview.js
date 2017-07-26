import React, {PureComponent} from 'react'
import { gql, graphql } from 'react-apollo';


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
    query PlaybacksQuery($start_date: Date!, $end_date: Date!) {
      playbacks(start_date: $start_date, end_date: $end_date) {
        created_at
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
      end_date: props.endDate
    }})
  })(OverviewListens);

export default class Overview extends PureComponent {
  render(){
    return (
      <div style={styles.overview}>
        <OverviewListensData startDate={this.props.startDate} endDate={this.props.endDate} />
      </div>
    )
  }
}
