import React from 'react';
import Footer from '../components/Footer';
import HeaderPerfil from '../components/HeaderPerfil';

class ProfileEdit extends React.Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <HeaderPerfil />
        <h1> ProfileEdit </h1>
        <Footer />
      </div>
    );
  }
}

export default ProfileEdit;
