import React from 'react';
import HeaderPerfil from '../components/HeaderPerfil';
import trabalhando from '../image/trabalhando.gif';

import '../css/Login.css';
import Footer from '../components/Footer';

class Favorites extends React.Component {
  render() {
    return (
      <div data-testid='page-favorites'>
        <HeaderPerfil />
        <h1> Profile </h1>
        <h2>Pagina em construção</h2>
        <img className='trabalhando' src={trabalhando} alt='trabalhando' />
        <Footer />
      </div>
    );
  }
}

export default Favorites;
