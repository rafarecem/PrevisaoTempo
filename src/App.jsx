import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import InformacoesTempo from './components/InformacoesTempo/InformacoesTempo'

function App() {
  const [tempo, setTempo] = useState()
  const inputRef=useRef()

  async function buscarCidade(){
    const city= inputRef.current.value 
    const key= "687e79e554df1a312a3932ef7e0355ee"
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const dados = await axios.get(url)
    setTempo(dados.data)

    console.log(dados)

  }

  return (

      <div className='container'>
         <h1>previsao do tempo</h1>
         <input ref={inputRef} type="text" placeholder='digite o nome da cidade' />
         <button onClick={buscarCidade}>buscar</button>


          {tempo &&<InformacoesTempo tempo={tempo}/>}
      </div>
   
  )
}

export default App
