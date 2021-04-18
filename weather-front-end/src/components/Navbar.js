import React from 'react';
import mainLogo from '../static/images/logos/logo.png'

class NavBar extends React.Component {
    render() {
      return (
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#top">
            <img  src={mainLogo} alt="weatherLogo" width="30" height="30" className="d-inline-block align-top" />
            Weather portugal
          </a>
        </nav>
      );
    }
  }

  export default NavBar