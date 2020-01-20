import React, { Component } from 'react';

import './style.css';

class Post extends Component {

  render(){
  return (
  <li>
    <div className="post-card">
      <div className="user-card">
        <img className="imgPerfil" src={this.props.data.author.avatar}/>
        <div className="author-card">
          <p className="author-text">{this.props.data.author.name}</p>
          <p className="author-data-publicacao">{this.props.data.date}</p>
        </div>
      </div>
      <p className="post-text">{this.props.data.contents}</p>
      <hr/>
      {this.props.data.comments.map( coment => 
        <div className="coment-card">
          <img className="imgPerfil" src={coment.author.avatar}/>
          <p className="coment">
            <strong>{coment.author.name}   </strong>{coment.content}
          </p>
        </div>
      )}  
    </div>  
  </li>);
  }


}

export default Post;