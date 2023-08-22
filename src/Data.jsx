import React from 'react'
import { useParams } from 'react-router-dom'

const Data = () => {
    let data=useParams()
  return (
    <div>
        <h1>Data</h1>
    </div>
  )
}

export default Data