import React from 'react';
import HeaderFavoritos from '../components/HeaderFavoritos';

class Favorites extends React.Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <HeaderFavoritos />
        <h1> Favoritos </h1>
      </div>
    );
  }
}

export default Favorites;
