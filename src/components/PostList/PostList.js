import React, { Component } from 'react';
import Post from './Post';

import './style.css';

import iagoProfile from '../../assets/profile.JPG';
import rosiProfile from '../../assets/rosilda-profile.jpg';
import carolProfile from '../../assets/carol-profile.jpg'

class PostList extends Component {

  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Iago dos Santos',
          avatar: iagoProfile,
        },
        date: '19 Jan 2020',
        contents: "Pessoal, quem vai ao jogo na Argentina?",
        comments: [
          {
            id: 1,
            author: {
              name: "Carol Gomes",
              avatar: rosiProfile,
            },
            content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          },
          {
            id: 2,
            author: {
              name: "Iago dos Santos",
              avatar: iagoProfile,
            },
            content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          },
        ]
      },
      {
        id: 2,
        author: {
          name: 'Rosilda Vieira',
          avatar: rosiProfile,
        },
        date: '19 Jan 2020',
        contents: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        comments: [
          {
            id: 2,
            author: {
              name: "Carol Gomes",
              avatar: carolProfile,
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Carol Gomes',
          avatar: carolProfile,
        },
        date: '19 Jan 2020',
        contents: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        comments: [
          {
            id: 3,
            author: {
              name: "Rosilda Vieira",
              avatar: rosiProfile,
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
    ]
  }

  render(){
    return(
      <div className="container">
        <ul>
            {this.state.posts.map( post => <Post key={post.id} data={post}/>)}
        </ul>
      </div>
    )}

}

export default PostList;