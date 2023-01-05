import React, { useState } from 'react'
import './style.css'

export const Settings = ({data, updateSettingHandler}) => {
    
  return (
    <div className="settings-container">
        <div className="form-control line-bottom">
            <label htmlFor="" className="form__label">
                Deslocamento Horizontal:
            </label>
            <input className='form__range' type="range" id="horizontal" name="horizontal" min="-100" max="100" onChange={(e)=>updateSettingHandler("horizontal", e.target.value)} value={data.horizontal}/>
            <span className="form__range-value">{data.horizontal} px</span>
        </div>
        <div className="form-control line-bottom">
            <label htmlFor="" className="form__label">
                Deslocamento vertical:
            </label>
            <input className='form__range' type="range" id="vertical" name="vertical" min="0" max="100" onChange={(e)=>updateSettingHandler("vertical", e.target.value)} value={data.vertical}/>
            <span className="form__range-value">{data.vertical} px</span>
        </div>
        <div className="form-control line-bottom">
            <label htmlFor="" className="form__label">
                Intensidade do Borrão (Blur):
            </label>
            <input className='form__range' type="range" id="blur" name="blur" min="0" max="100" onChange={(e)=>updateSettingHandler("blur", e.target.value)} value={data.blur}/>
            <span className="form__range-value">{data.blur} px</span>
        </div>
        <div className="form-control line-bottom">
            <label htmlFor="" className="form__label">
                Intensidade do espalhamento (Spread):
            </label>
            <input className='form__range' type="range" id="spread" name="spread" min="0" max="100" onChange={(e)=>updateSettingHandler("spread", e.target.value)} value={data.spread}/>
            <span className="form__range-value">{data.spread} px</span>
        </div>
        <div className="form-control line-bottom">
            <label htmlFor="" className="form__label">
                Selecione a Cor da sombra:
            </label>
            <input type="color" id="boxColor" name="boxColor" min="0" max="100" onChange={(e)=>updateSettingHandler("boxColor", e.target.value)} value={data.boxColor}/>
            <span className="form__range-value">{data.boxColor}</span>
        </div>
    </div>
  )
}
