import React from 'react'
import p1 from './1.gif'
import { useNavigate } from 'react-router-dom'
const Log = () => {
    const navigate=useNavigate();
  return (
    <div>
         <img src={p1}  onClick={()=>navigate('/Map/attraction')} style={{width:'100%'}} />
    </div>
  )
}

export default Log
