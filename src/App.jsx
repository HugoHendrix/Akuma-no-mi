import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/Intro'; 
import CharacterList from './components/CharacterList';




class HomePage extends Component {
  render() {
      return (
        <>
          <Intro />
          <CharacterList />
        </>
         
      );
  }
}


export default HomePage;

