import React from 'react'
import { Link } from 'react-router-dom'

const Men = () => {
  return (
    <div >
        <h1>Men</h1>
        <div>
          <Link to={`/data/1`}><h1>Click Me</h1></Link>
        </div>
    </div>
  )
}

export default Men