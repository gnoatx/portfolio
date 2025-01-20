import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Bio from './components/Bio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main id='container'>
        <Header />
        <Bio />
      </main>
      https://gnoatx.github.io/javascript-lista/ // aFazer
      https://gnoatx.github.io/oracle-one-desafio-1/ // decodificador
      https://gnoatx.github.io/frontend-basico/ // hdc host
      https://gnoatx.github.io/frontend-desafio-restaurante/ // restaurante
      https://github.com/gnoatx/react-native-calculator // calculadora
      https://react-desafio-notas.vercel.app/ // notas

    </>
  ) 
}

export default App
