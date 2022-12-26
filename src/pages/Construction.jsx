import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

class NotFound extends React.Component {
  render() {
    return (
      <div data-testid='page-not-found'>
        <BrowserRouter>
          <Route exact path='' component={Header} />
        </BrowserRouter>
        <h1> Page Not Found </h1>
        <Footer />
      </div>
    );
  }
}

export default NotFound;
