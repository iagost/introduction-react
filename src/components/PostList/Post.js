import React, { Component } from 'react';
import Coment from '../PostList/Coment';
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
        <Coment key={coment.id} data={coment}/>
      )}  
    </div>  
  </li>);
  }


}

export default Post;