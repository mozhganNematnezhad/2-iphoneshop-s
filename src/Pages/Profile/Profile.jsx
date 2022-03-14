import React from 'react'
import { ConsumeAuthState } from '../../Context/AuthContext/AuthState'

const Profile = () => {
   const {Auth} = ConsumeAuthState()
//    console.log("profile" ,myObject)
  return (
    <div>
        <p>{Auth.name}</p>
        <p>{Auth.email}</p>

    </div>
  )
}

export default Profile