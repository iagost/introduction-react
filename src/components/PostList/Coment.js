import React, { Component } from 'react';

import './style.css';

class Coment extends Component {

  render(){
  return (
    <div className="coment-card">
      <img className="imgPerfil" src={this.props.data.author.avatar}/>
      <p className="coment">
        <strong>{this.props.data.author.name}</strong>
        {this.props.data.content}
      </p>
    </div>
  );}


}

export default Coment;