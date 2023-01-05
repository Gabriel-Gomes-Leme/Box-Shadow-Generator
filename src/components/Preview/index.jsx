import React, { useState } from 'react'
import './style.css'

export const Preview = ({data}) => {
  const [color, setColor] = useState('#c4c4c4')
  const boxShadow = `${data.horizontal}px ${data.vertical}px ${data.blur}px ${data.spread}px ${data.boxColor}`
  return (
    <div className='preview'>
        <h2>Preview do Efeito:</h2>
        <div className="form-control">
          <input type="color" name="color" id="color" value={color} onChange={(e)=>setColor(e.target.value)}/>
        </div>
        <div className="box-effect" style={{background:color, boxShadow:boxShadow}}></div>
        <div className="rules">
          <h3>Copie o código abaixo e cole no seu arquivo CSS:</h3>
          <div className="rule">
            <p><span className="primary-color">box-shadow:</span> {boxShadow}</p>
          </div>
        </div>
    </div>
  )
}
