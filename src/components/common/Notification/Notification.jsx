import React from 'react'
import { Bell } from '../../icons'

const Notification = ({ ...props }) => {
  const { userNotificationCount, className } = props
  return (
    <div className={'flex items-center ' + className}>
      <Bell width="18" height="18" />
      {userNotificationCount && (
        <div className="rounded ml-1.5 mr-2 bg-red-200 px-1 text-xs text-white">
          {userNotificationCount}
        </div>
      )}
    </div>
  )
}

export default Notification
