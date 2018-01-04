import {history} from '../../store'
import jwt_decode from 'jwt-decode'

export const USER_AUTHENTICATED = 'USER_AUTHENTICATED'

export default (token) => {
  return (dispatch)=>{
    const jwt = jwt_decode(token)
    dispatch({
    type:USER_AUTHENTICATED,
    payload:token
  })
  history.push(`/user/${jwt.user}`)
}

}
