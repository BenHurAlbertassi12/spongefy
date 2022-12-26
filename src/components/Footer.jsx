import React from 'react';
import '../css/Footer.css';
import linkedin from '../image/linkedin.png';
import github from '../image/github.png';


class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p className='rodaPe'>
          Portifólio de BenHur Albertassi todos os direitos reservados©
          {/* <div> */}
            <a
              href='https://github.com/BenHurAlbertassi12'
              target='_blank'
              rel='noreferrer'>
              <img className='git' src={github} alt='GitHub' />
            </a>
            <a
              href='https://www.linkedin.com/in/benhuralbertassi/'
              target='_blank'
              rel='noreferrer'>
              <img className='linke' src={linkedin} alt='Linkedin' />
            </a>
          {/* </div> */}
        </p>
      </footer>
    );
  }
}
export default Footer;
