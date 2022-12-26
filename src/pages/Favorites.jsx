import React from 'react';
import HeaderFavoritos from '../components/HeaderFavoritos';
import trabalhando from '../image/trabalhando.gif'

import '../css/Login.css'
import Footer from '../components/Footer';

class Favorites extends React.Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <HeaderFavoritos />
        <h1> Favoritos </h1>
        <h2>Pagina em construção</h2>
        <img className='trabalhando' src={trabalhando} alt='trabalhando' />
        <Footer />
      </div>
    );
  }
}

export default Favorites;
