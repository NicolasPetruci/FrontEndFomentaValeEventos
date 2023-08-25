import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import CadastroDeEventos from './pages/cadastroDeEventos/CadastroDeEventos.tsx';
import ListaDePalestrante from './pages/listaDePalestrantes/ListaDePalestrante.tsx';
import CadastroDePalestrante from './pages/cadastroDePalestrante/CadastroDePalestrante.tsx';
import ListaDeEventos from './pages/listaDeEventos/ListaDeEventos.tsx';
import Footer from './components/Footer/Footer';

function App() {
  

  return (
    <BrowserRouter>
    <Navbar bgColor='cor.P1' />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cEventos' element={<CadastroDeEventos />} />
      <Route path='/cPalestrantes' element={<CadastroDePalestrante />} />
      <Route path='/lEventos' element={<ListaDeEventos />} />
      <Route path='/lPalestrantes' element={<ListaDePalestrante />} />
    </Routes>

  <Footer bgColor='cor.S1' />
    </BrowserRouter>
  )
}

export default App
