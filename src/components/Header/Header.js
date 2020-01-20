import React, { Component} from 'react';
import './style.css';
import LogoFacebook from '../../assets/facebook-logo.png';
import IconPerfil from '../../assets/perfil_icon.png';


class Header extends Component {

  render(){
    return(
    <div className="container-menu">
      <img src={LogoFacebook} className="img"/>
      <div className="menu">
        <a href="#" className="menu-button">Meu perfil</a>
        <img src={IconPerfil} className="icon"/>
      </div>
    </div>);
  }


}

export default Header;