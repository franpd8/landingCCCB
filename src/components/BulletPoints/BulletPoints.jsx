import React from 'react'
import {FaSquareFull} from "react-icons/fa"
const BulletPoints = ({title,subtitle}) => {
  return (
    <div className="bullet-containxr">
    <div className="bullet">
    <FaSquareFull size={16} className="pink bullet-icon"/>
    </div>
    <div className="bullet-text">
        <span className="pink bold">{title}</span><br/>
         {subtitle}
    </div>
  </div>
  )
}

export default BulletPoints