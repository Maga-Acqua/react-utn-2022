import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import BiografiaPage from './pages/BiografiaPage';
import DiseniosPage from './pages/DiseniosPage';
import ProductosPage from './pages/ProductosPage';

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='home' element={<HomePage />}></Route>
          <Route path='biografia' element={<BiografiaPage />}></Route>
          <Route path='disenios' element={<DiseniosPage />}></Route>
          <Route path='productos' element={<ProductosPage />}></Route>
          <Route path='contacto' element={<ContactoPage />}></Route>
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
