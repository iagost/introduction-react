import React from 'react';
import './App.css';
import profile from './assets/profile.JPG';

import TechList from './components/TechList';
import Header from './components/Header/Header';
import PostList from './components/PostList/PostList';

function App(){
  return (
  <>
    <Header />
    <PostList />
  </>)
}

export default App;