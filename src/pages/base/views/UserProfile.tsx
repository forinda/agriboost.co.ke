import useAuth from '@shared-hooks/useAuth'
import React from 'react'

const UserProfile = () => {
  const {auth:{user}}= useAuth()
  return (
    <div>
      <h1>User Profile</h1>
      <p>{user?.email}</p>
      
    </div>
  )
}

export default UserProfile