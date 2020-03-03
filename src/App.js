import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topScore: 0
  };


  componentDidMount() {
    this.setState({ friends: this.shuffleData(this.state.friends) });

  }

  handleCorrectGuess = newData => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, topScore);

    this.setState({
      friends: this.shuffleData(newData),
      score: newScore,
      topSCore: newTopScore
    });
    console.log(newScore);
  };

  handleIncorrectguess = friends => {
    this.setState({
      friends: this.resetData(friends),
      score: 0
    });
  }

  resetData = friends => {
    const resetData = friends.map(item => ({ ...item, clicked: false }));
    return this.shuffleData(resetData);
  };

  shuffleData = friends => {
    let i = friends.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = friends[i];
      friends[i] = friends[j];
      friends[j] = temp;
      i--;

    }

    return friends;

  };

  handleItemClick = id => {
    let guessedCorrectly = false;
    const newData = this.state.friends.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;

        }
      }
      return newItem;
    });
    guessedCorrectly
      ? this.handleCorrectGuess(newData)
      : this.handleIncorrectguess(newData);

  };

  render() {
    return (
      <Wrapper>
        <Title >clicky game <br></br> Score: {this.state.score}</Title>
        {this.state.friends.map(friend => (
          <Card
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            handleClick={this.handleItemClick}

          />
        ))}
      </Wrapper>
    );
  }
}

export default App;