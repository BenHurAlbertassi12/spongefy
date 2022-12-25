import PropTypes from 'prop-types';
import React from 'react';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import getMusics from '../services/musicsAPI';
import MsgLoading from './MsgLoading';

import '../css/Album.css'

class MusicCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.buscarID,
      musicas: [],
      loading: true,
      cantor: [],
      favoritas: [],
    };
  }

  async componentDidMount() {
    const { id } = this.state;
    const item = await getFavoriteSongs();
    await getMusics(id).then((elemento) => {
      this.setState({
        loading: false,
        musicas: elemento,
        cantor: elemento[0],
        favoritas: item,
      });
    });
  }

  async addCurtidinhas(evento, musicax) {
    const { checked } = evento.target;

    this.setState(
      {
        loading: true,
      },

      async () => {
        if (checked) {
          await addSong(musicax);
        } else {
          await removeSong(musicax);
        }
        const curtidas = await getFavoriteSongs();
        this.setState({
          loading: false,
          favoritas: curtidas,
        });
      },
    );
  }

  curtidinhas(id) {
    const { favoritas } = this.state;
    return favoritas.find((elemento) => elemento.trackId === id);
  }

  render() {
    const { musicas, loading, cantor } = this.state;

    if (loading) {
      return <MsgLoading />;
    }

    return (

      <div className='div-muisic-card'>
        <div className='info-album-card'>
          <p className="album-name-card">{ cantor.collectionName }</p>
          <p className="artist-name-card">{ cantor.artistName }</p>
        </div>
        <div className='musica-player'>
        {
          musicas.length >= 1 && musicas.map((musica, indice) => (
            indice !== 0 && (
              <div >

                <div className='div-musica' key={ musica.collectionId }>

                <p className='player-music'>{musica.trackName}</p>

                <audio
                    className="player-music"
                  src={ musica.previewUrl }
                  controls
                >
                  <track kind="captions" />
                  O seu navegador não suporta o elemento
                  {' '}
                  {' '}
                  <code>audio</code>
                </audio>

                  <label htmlFor={musica.trackId} className='boxzinho container'>
                    
                    <span className='checkmark'>Amei{'  '}</span>
                    <input
                    className='player-music'
                    // name='boxzinho'
                    type="checkbox"
                    name={ musica.trackId }
                    checked={ this.curtidinhas(musica.trackId) }
                    id={ musica.trackId }
                    onChange={ (evento) => this.addCurtidinhas(evento, musica) }
                  />
                </label>
              </div>
                <br className='risco' />
          </div>
            )
            ))
          }
          </div>
      </div>
    );
  }
}

MusicCard.propTypes = {
  buscarID: PropTypes.string.isRequired,
};

export default MusicCard;