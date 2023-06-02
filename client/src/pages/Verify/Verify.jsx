import React from 'react'
import { useParams } from 'react-router-dom'

const Verify = () => {

  const params =useParams()


console.log(params);
  return (
    <div>Verify</div>
  )
}

export default Verify