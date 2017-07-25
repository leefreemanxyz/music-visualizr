import React, {PureComponent} from 'react'

const styles = {
  header: {
    backgroundColor: "#009688",
    width: "100hw",
    height: "50px"
  }
}

export default class Header extends PureComponent {
  render(){
    return (
      <nav style={styles.header}></nav>
    )
  }
}
