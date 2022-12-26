import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import Footer from '../components/Footer';

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
    };
  }

  render() {
    const { id } = this.state;
    return (
      <div data-testid='page-album'>
        <h2>Album</h2>
        <Header />
        <MusicCard buscarID={id} />
        <Footer />
      </div>
    );
  }
}
Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,

};

export default Album;

// Linha 13 conteudo da aula, 12.2 ao vivo, tempo aproximado 1h16min.
