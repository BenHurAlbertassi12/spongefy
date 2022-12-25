import React from 'react';
import { Link } from 'react-router-dom';

import searchAlbumsAPI from '../services/searchAlbumsAPI';
import MsgLoading from '../components/MsgLoading';
import HeaderBusca from '../components/HeaderBusca';

import '../css/Busca.css'
import lupa from '../image/lupa.png'

class Search extends React.Component {
  constructor() {
    super();
    this.trocarInput = this.trocarInput.bind(this);
    this.botaoParaLocalizar = this.botaoParaLocalizar.bind(this);

    this.state = {
      busca: '',
      escolha: [],
      infoFrase: true,
      loading: false,
      mensagem: '',
      name: '',
    };
  }

  aprovado = () => {
    const { name } = this.state;

    const minLength = 2;
    const outraInfo = name.length >= minLength;

    return !outraInfo;
  };

  trocarInput(evento) {
    this.setState({ name: evento.target.value }, () => {
    });
  }

  async botaoParaLocalizar() {
    const { name } = this.state;
    this.setState(
      () => ({ loading: true }),
      async () => {
        await searchAlbumsAPI(name).then((event) => {
          if (event.length >= 2) {
            this.setState({
              busca: name,
              escolha: event,
              loading: false,
              name: '',
            });
          } else {
            this.setState({
              infoFrase: true,
              loading: false,
              mensagem: 'Nenhum álbum foi encontrado' });
          }
        });
      },
    );
  }

  render() {
    const { name, escolha, loading, mensagem, infoFrase, busca } = this.state;

    return (
      <div>
        <HeaderBusca />
        <div className='page-search'>
          <form>
            <label htmlFor='name'>
              <input
                className='search-artist-input'
                type='text'
                name='name'
                id='name'
                value={name}
                onChange={this.trocarInput}
              />
            </label>
            <div className='div-lupa'>

            <button
              className='search-artist-button'
              disabled={this.aprovado()}
              onClick={this.botaoParaLocalizar}
              type='button'>
              <img className='lupa' src={lupa} alt='lupa' />
            </button>
                </div>
          </form>
        </div>
        {infoFrase && mensagem}
        {loading && <MsgLoading />}
        {escolha.length >= 2 && <p>{`Resultado de álbuns de: ${busca}`}</p>}
        {escolha.length >= 2 &&
          escolha.map((evento, chave) => (
            <div className='artist-name' key={chave}>
              <p>{evento.artistName}</p>
              <p>{evento.collectionName}</p>
              <img alt={evento.collectionName} src={evento.artworkUrl100} />
              <Link
                className={`link-to-album-${evento.collectionId}`}
                to={`/album/${evento.collectionId}`}>
                Album
              </Link>
            </div>
          ))}
      </div>
    );
  }
}

export default Search;

// Linha 25 a 31, função "aprovado" para que a quantidade de caracteres seja maior que 2.

// Linha 34 e 36 é para trocar o state, definir o this.setState.

// Linha 39 Botão para localizer veio quando reassisti a ultima aula do bloco, a diferença é que ela utiliza o didmount, eu até tentei fazer igual mas por uma letra trocada refiz o codigo todo ai deixei o didmount pra la. o tempo do video aproximado é as 1h, quando chama o colega Ebrahim para participar.

// Linha 43 chama a API

// Linha 44 recebe um novo estado

// Linha 51 caso não recebe novo estado com a msng de que nada foi encontrado.

// Linha 64 Desestrutura.

// Linha 67 Div com o data-test que foi solicitado.

// Linha 70 Formulario basico, com input e button.

// Linha 91 Teste boleano caso verdadeiro vai fazer a chamada da frase (linha 55).

// Linha 92 Teste boleano da mensagem Carregando... o mesmo que fiz em requisitos anteriores.

// Linha 93 Se o que foi digitado no campo de busca é maior que 2 (linha 25 a 31 para validação do botão), recebe uma .frase "Resultado de álbuns de: <artista>"

// Linha 94 Se o que foi digitado passou no requisito >= 2 fara um map do que foi buscado.
// Linha 94 Map com dois parametros, evento e chave, escolhi o segundo para mante-lo como key, por este motivo o nome.

// Linhas 95, 96 e 97 o basico do map, pego o parametro desejado e "linko" ele com o que desejo na API.

// Linha 98 Link de redirecionamento.
