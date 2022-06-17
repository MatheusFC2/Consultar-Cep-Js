import React from 'react'
import { useForm } from 'react-hook-form'
import './App.css'


function App() {

  return (
    <form>
      <label>
        CEP:
        <input type="text" />
      </label>
      <label>
        Rua:
        <input type="text" />
      </label>
      <label>
        Numero:
        <input type="text" />
      </label>
      <label>
        Bairro:
        <input type="text" />
      </label>
      <label>
        Cidade:
        <input type="text" />
      </label>
      <label>
        Estado:
        <input type="text" />
      </label>
      <button>Enviar</button>
    </form>
  )
}

export default App
