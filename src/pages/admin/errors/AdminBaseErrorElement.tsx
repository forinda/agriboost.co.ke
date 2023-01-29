import React from 'react'
import { useRouteError } from 'react-router-dom'

const AdminBaseErrorElement = () => {
  const error =useRouteError() as any
  return (
    <div>
      <h1>AdminBaseErrorElement</h1>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  )
}

export default AdminBaseErrorElement