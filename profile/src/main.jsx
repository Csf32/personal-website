import React from 'react'
import ReactDOM from 'react-dom/client'

//Vira o name exported, pois a função foi exportado diretamnte no app
import { App } from './App'

//importar o css do global
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
