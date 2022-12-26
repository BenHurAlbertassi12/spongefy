import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import MsgLoading from './MsgLoading';

import '../css/Header.css';
import spongefy from '../image/spongefy.png';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      nome: '',
    };
  }

  componentDidMount() {
    getUser().then((nick) => {
      if (nick.name) {
        this.setState({ loading: false });
      }
      this.setState({ nome: nick.name });
    });
  }

  render() {
    const { nome, loading } = this.state;
    return (
      <div>
        <div className="cabecalhonome">
          <img className="spongeheader" src={ spongefy } alt="logo" />
          <p className="header-user-name">
            {nome}
          </p>
        </div>

        <div className="cabecalho">
          <header className="cabecalho" data-testid="header-component">
            <div className="barraselectok">
              <Link
                className="linki"
                data-testid="link-to-search"
                to="/search"
              >
                {' '}
                Busca
                {' '}
              </Link>
            </div>

            <div className="barraheader ">
              <Link
                className="linki"
                data-testid="link-to-favorites"
                to="/favorites"
              >
                {' '}
                Favoritos
                {' '}
              </Link>
            </div>

            <div className="barraheader">
              <Link
                className="linki"
                data-testid="link-to-profile"
                to="/profile"
              >
                {' '}
                Profile
                {' '}
              </Link>
            </div>
          </header>
        </div>
        {loading && <MsgLoading />}
      </div>
    );
  }
}

export default Header;