import React from 'react'
import { ChevronDown } from '../../icons'

const Avatar = ({ userImage, className }) => {
  return (
    <div className={'flex items-center ' + className}>
      <div className="border rounded-full w-8 h-8 border-blue-200 mr-2">
        {userImage && <img src={userImage} alt="user" />}
      </div>
      <ChevronDown width="10" height="10" />
    </div>
  )
}

export default Avatar
