import React from 'react';
import HeaderPerfil from '../components/HeaderPerfil';

class Profile extends React.Component {
  render() {
    return (
      <div data-testid="page-profile">
        <HeaderPerfil />
        <h1> Profile </h1>
      </div>
    );
  }
}

export default Profile;
