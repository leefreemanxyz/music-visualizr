import React, {PureComponent} from 'react'
import {SignInBanner, SignInButton} from '../styled-components/Home'
export default class Home extends PureComponent {
  render(){
    return(
      <div>
        <SignInBanner>
          <a href="http://localhost:3001/users/auth/spotify"><SignInButton>Sign in with Spotify</SignInButton></a>
        </SignInBanner>
      </div>
    )
  }
}
