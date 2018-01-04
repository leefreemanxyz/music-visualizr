import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import storeJWT from '../actions/users/storeJWT'

class SignIn extends PureComponent {
  componentDidMount(){
    const {token} = this.props.match.params
    if(token){
      this.props.storeJWT(token)
    }
  }
  render(){
    return(
      <div></div>
    )
  }
}

export default connect(null, {storeJWT})(SignIn)
