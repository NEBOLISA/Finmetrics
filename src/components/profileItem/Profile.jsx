import React from 'react'
import './Profile.css'
const Profile = ({side,header}) => {
  return (
    <div className={`${side  ? "show profile-date-wrapper":"" } ${header ? "remove profile-date-wrapper": "profile-date-wrapper"}`}>
          <div className='img-wrapper'></div>
          <p className='name-greeting'>Hello Smith</p>
        </div>
  )
}

export default Profile
