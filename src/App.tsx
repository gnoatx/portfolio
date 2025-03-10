import './App.css'
import Header from './components/Header'
import Bio from './components/Bio'
import list from '../public/assets/works.json'
import Card from './components/Card'

function App() {
  const works = list.works

  return (
    <>
      <main id='container'>
        <Header />
        <Bio />
        <h1 className='works-title'>Meus Trabalhos</h1>
        {works.map((item) => <Card work={item} />)}
      </main>
      <a href="https://github.com/gnoatx">
        <footer className='credit'>Victor Gnoato @ 2025</footer>
      </a>
    </>
  ) 
}

export default App
