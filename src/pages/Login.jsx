import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import MsgLoading from '../components/MsgLoading';

import '../css/Login.css';

import spongefy from '../image/spongefy.png';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      loading: false,
      next: false,
    };
  }

  botaoParaSalvar = async () => {
    const { name } = this.state;
    this.setState({ loading: true });
    await createUser({ name }).then((event) => {
      if (event) {
        this.setState({ next: true });
      }
    });
  };

  aprovado = () => {
    const { name } = this.state;

    const minLength = 3;
    const outrInfo = name.length >= minLength;

    return !(outrInfo);
  };

  trocarInput = ({ target }) => {
    const { value } = target;
    this.setState({
      name: value,
    });
  };

  render() {
    const { name, loading, next } = this.state;
    return (
      <div className="divbody">
        <div className="logo">
          <div className="divname">
            <p className="namesponge">Sponge</p>
            <p className="namefy">Fy</p>
          </div>
          <img className="sponge" src={ spongefy } alt="spongefylogo" />
        </div>
        <div data-testid="page-login">
          {loading && <MsgLoading />}
          {next && <Redirect to="/search" />}
          <form className="pagelogin" action="">
            <label htmlFor="name">
              <input
                data-testid="login-name-input"
                type="text"
                name="name"
                id="name"
                className="name"
                value={ name }
                onChange={ this.trocarInput }
                placeholder="Nome"
              />
            </label>
            <button
              type="button"
              className="button"
              onClick={ this.botaoParaSalvar }
              data-testid="login-submit-button"
              disabled={ this.aprovado() }
            >
              <span className="entrar">Entrar</span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

// https://www.horadecodar.com.br/2020/04/20/html-como-limitar-caracteres-do-input/ usado para o Minimo de caracteres
