import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import sad from '../image/sad.gif'


class NotFound extends React.Component {
  render() {
    return (
      <div className='page-not-found'>
        <Header />
        <h1> Sinto muito, mas esta pagina não existe </h1>
        <img className='trabalhando' src={sad} alt='sad' />
        <Footer />
      </div>
    );
  }
}

export default NotFound;
