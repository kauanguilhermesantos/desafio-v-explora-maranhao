import React from 'react';
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Banner mensagem = "Encontre aqui o destino da sua próxima aventura!"/>
      <Footer />
    </>
  );
}

export default App;
