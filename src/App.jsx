import { useEffect, useState } from 'react'
import './App.css'
import { Settings } from './components/Settings'
import { Preview } from './components/Preview'

function App() {
    const setting={
      horizontal:10,
      vertical:10,
      blur:10,
      spread:10,
      boxColor:'#000'
    }
    const updateSettingHandler=(key, value)=>{
      setData((prev)=>{
        return{
          ...prev, [key]:value
        }
      })
    }
    const [data, setData]=useState(setting)

  return (
    <div className="App">
      <header>
        <h2 className="header__title">Bem vindo ao Gerador de box shadow</h2>
      </header>
      <div className="wrapper">
      <div className="grid-col-2">
      <Settings data={data} updateSettingHandler={updateSettingHandler}></Settings>
      <Preview data={data}></Preview>
      </div>
      </div>
    </div>
  )
}

export default App
