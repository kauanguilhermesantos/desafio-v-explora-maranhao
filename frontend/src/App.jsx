import React from 'react';
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";

function App() {
  return (
    <>
      <Header />
      <Banner mensagem = "Encontre aqui o destino da sua próxima aventura!"/>
    </>
  );
}

export default App;
