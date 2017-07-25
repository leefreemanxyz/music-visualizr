import React, {PureComponent} from 'react'

const styles = {
  header: {
    backgroundColor: "#009688",
    width: "100hw",
    height: "50px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  siteTitle:{
    color:"white",
  }
}

export default class Header extends PureComponent {
  render(){
    return (
      <nav style={styles.header}>
        <h1 style={styles.siteTitle}>MusicVisualizr</h1>
      </nav>
    )
  }
}
