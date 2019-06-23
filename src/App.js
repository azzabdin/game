import React, { Component } from "react";
import Pics from "./components/pics";
import Wrapper from "./components/Wrapper";
import Pictures from "./pics.json";
class App extends Component {

  state = {
    Pictures,
    score: 0,
    highScore: 0,
    count: []
  };

  // add shuffle function

 shuffle=(array)=> {
  const newarray = array.sort(() => Math.random() - 0.5);
return newarray;
}

  handleClick = (id) => {
    if (this.state.count.includes(id)) {
      // you lose
      alert('you lose')
      this.setState({
        count:[],
        score:0,
        //highScore: topScore
      })
    } else {
     const ShuffeledArray= this.shuffle(this.state.Pictures)
      const newScore = this.state.score + 1;
      let topScore = this.state.highScore;
      if (newScore > topScore) {
        topScore = newScore

      }

      // keep going
      this.setState({
        count: [...this.state.count, id],
        score: newScore,
        highScore: topScore,
        Pictures:ShuffeledArray
      })
    }


  }

  render() {
    return (
      <>
        <div className="title">
          <h1>clicky game</h1>
          <h2>highScore, {this.state.highScore}</h2>
          <h2> score, {this.state.score}</h2>
        </div>

        <Wrapper>

          {this.state.Pictures.map(picture => (
            <Pics
              id={picture.id}
              key={picture.id}
              image={picture.image}
              handleClick={this.handleClick}

            />
          ))}
        </Wrapper>
      </>
    );
  }
}

export default App;


