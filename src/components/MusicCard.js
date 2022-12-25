import PropTypes from 'prop-types';
import React from 'react';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import getMusics from '../services/musicsAPI';
import MsgLoading from './MsgLoading';

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

      <div>

        <p data-testid="album-name">{ cantor.collectionName }</p>
        <p data-testid="artist-name">{ cantor.artistName }</p>

        {
          musicas.length >= 1 && musicas.map((musica, indice) => (
            indice !== 0 && (

              <div key={ musica.collectionId }>

                <p>{musica.trackName}</p>

                <audio
                  data-testid="audio-component"
                  src={ musica.previewUrl }
                  controls
                >
                  <track kind="captions" />
                  O seu navegador não suporta o elemento
                  {' '}
                  {' '}
                  <code>audio</code>
                </audio>

                <label htmlFor="boxzinho">
                  Curtidas
                  <input
                    type="checkbox"
                    name={ musica.trackId }
                    checked={ this.curtidinhas(musica.trackId) }
                    id={ musica.trackId }
                    data-testid={ `checkbox-music-${musica.trackId}` }
                    onChange={ (evento) => this.addCurtidinhas(evento, musica) }
                  />
                </label>
              </div>)
          ))
        }
      </div>
    );
  }
}

MusicCard.propTypes = {
  buscarID: PropTypes.string.isRequired,
};

export default MusicCard;

// Linha 7 definição do this.state, basiquinho como todos feits até aqui

// Linha 11 esta buscando (ou linkando(não sei qual palavra é melhor para usar)) as props do buscaid

// Linha 19 componentdidmounth eu tinha tentado fazer algo parecido em outra pagina ( Header.jsx (linha 117 explico melhor))
// Linha 20 Desestruturação do { id }
// Linha 21 chamada da função getFavoriteSongs dentro da constante Item que foi chamada mais na frente

// Linha 26 vai buscar o array dentro do parametro que foi definido a cima em .then() -> ele retorna uma promisse.

// Linha 32 função para adcionar aos favortiso, coloquei curtidas pq é o que eu uso no proprio spotify
// Linha 33 definindo o caminho do checked, o botão que é definido mais a baixo
// Linha 35 defino o estado
// Linha 37 loading como true, para mais em abaixo entrar a chamada que vai mostrar a msg na tela
// Linha 40 ainda dentro do setstate coloco uma arrowfunction async, nela entraremos com o IF
// Linha 41 se o checked for marcado ele adiciona musica no favoritos
// Linha 43 se o checked for desmarcado ele remove a musica do favoritor
// Coloquei 'musicax' como parametro na linha 32 pq fiquei com medo de me confundir, deixei bem definido onde ela esta

// Linha 55 pegando o id da Favoritas (Curtididas) para não favoritar muitas, apenas a selecionada (id)

// Linha 60 Inicio do render

// Linha 61 desestruturação
// Linhas 63 e 64 Condição para carregar o component MsgLoading

// Linha 69 Div pegando todo o return

// Linha 73 joga na tela o nome do album
// Linha 72 joga na tela o nome do cantor

// Linha 75 Caso passe no requisito (>2) faz um .map das musicas
// Linha 78 definição da key pelo collectionID (todo id é unico)

// Linha 80 Nome da musica em tela

// Linha 82 requisito 7 ja veio pronto

// Linha 94 imput do checkbox das favoritas

// Linha 98 a 101 vai fazer o mapeamento pelo trackID
