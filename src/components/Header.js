import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {NavBar, SiteTitle} from '../styled-components/NavBar'

const styles = {
  link:{
    color:"white",
    textDecoration: "none",
    paddingLeft:"5px",
    textTransform:"uppercase"
  }
}
class Header extends PureComponent {
  render(){
    const {currentUser} = this.props
    return (
      <NavBar>
        <SiteTitle>Music Visualizr</SiteTitle>
        <span>
        <Link style={styles.link} to="/">Home</Link>
        {currentUser && <Link style={styles.link} to={`/user/${currentUser.user}`}>Dashboard</Link>}
        </span>
      </NavBar>
    )
  }
}

const mapStateToProps = ({currentUser})=>({
  currentUser
})

export default withRouter(connect(mapStateToProps,{})(Header))
