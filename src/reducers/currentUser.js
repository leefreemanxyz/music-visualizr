import { USER_AUTHENTICATED } from '../actions/users/storeJWT'
import jwt_decode from 'jwt-decode'
const USER_STORAGE_KEY = 'codaisseurify'
const TOKEN_STORAGE_KEY = 'codaisseurify-token'

const currentUser = JSON.parse(window.localStorage.getItem(USER_STORAGE_KEY)) || 'null'

export default function(state: null, { type, payload }) {
  switch (type) {
    case USER_AUTHENTICATED :
      localStorage.setItem(TOKEN_STORAGE_KEY, payload)
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(jwt_decode(payload)))
      return Object.assign({}, jwt_decode(payload))

    default :
      return currentUser
  }
}
