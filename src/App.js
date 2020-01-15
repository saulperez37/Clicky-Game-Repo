import React, { Component } from 'react';
import './App.css';
import ImageContainer from './components/imagecontainer/ImageContainer';
import Wrapper from './components/wrapper/Wrapper';
import matches from "./carbrandlogos.json";


class App extends Component {
  state = {
    matches,
  }

  render() {
    return (
      <Wrapper>
        <p>Title Goes Here</p>
        <div>
          {this.state.matches.map(match => (
            <ImageContainer 
            id={match.id}
            key={match.id}
            image={match.image}/>
          ))}
        </div>
      </Wrapper>
    );
  };
};

export default App;
