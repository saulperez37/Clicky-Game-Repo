import React, { Component } from 'react';
import './App.css';
import ImageContainer from './components/imagecontainer/ImageContainer';
import Wrapper from './components/wrapper/Wrapper';
import Header from './components/header/Header';
import matches from './carbrandlogos.json';

let correctGuess = 0;
let topScore = 0;
let clickMessage = "Click a logo to gain points! Click it twice and you lose!";

class App extends Component {
  state = {
    matches,
    correctGuess,
    topScore,
    clickMessage,
  };

  setClicked = id => {
    let matches = this.state.matches;
    let clickedMatch = matches.filter(match => match.id === id);
    

    if (clickedMatch[0].clicked) {
      
      correctGuess = 0;
      clickMessage = "Sorry! You already clicked this one";

      for (let i = 0; i < matches.length; i++) {
        matches[i].clicked = false;
  
      }

      this.setState({ clickMessage });
      this.setState({ correctGuess });
      this.setState({ matches });

    } else if (correctGuess < 11) {
      clickedMatch[0].clicked = true;

      correctGuess ++;

      clickMessage = "Good job! Keep going!";

      if (correctGuess > topScore) {
        topScore = correctGuess;
        this.setState({ topScore });
      }

      matches.sort(function(a, b){return 0.5 - Math.random()});

      this.setState({ matches });
      this.setState({ correctGuess });
      this.setState({ clickMessage });
    } else {

      clickedMatch[0].clicked = true;

      correctGuess = 0;

      clickedMatch = "Amazing! You got them all!";
      topScore = 12;
      this.setState({ topScore });

      for (let i = 0; i < matches.length; i++) {
        matches[i].clicked = false;
      }

      matches.sort(function(a, b){return 0.5 - Math.random()});

      this.setState({ matches });
      this.setState({ correctGuess });
      this.setState({ clickMessage });
    }
  };

  render() {
    return (
      <Wrapper>
        <Header>Clicky Car Brand Game</Header>
        <h2 className="score">
          {this.state.clickMessage}
        </h2>
        <h3 className="score card-header">
          Correct Guesses: {this.state.correctGuess}
          <br />
          Top Score: {this.state.topScore}
        </h3>
        <div className="container">
        <div className="row">
          {this.state.matches.map(match => (
            <ImageContainer 
            setClicked={this.setClicked}
            id={match.id}
            key={match.id}
            image={match.image}/>
          ))}
        </div>
        </div>
      </Wrapper>
    );
  };
};

export default App;
