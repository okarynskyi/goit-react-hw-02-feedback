import { Component } from 'react';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleIncrement = (e) => {
    const { name } = e.currentTarget;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }))
  }
  
  render() {
    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral', 'bad'];
    const buttons = options.map(option => {
      return <button key={option} name={option} onClick={this.handleIncrement}>{option}</button>
    });

    return (
      <>
        <div>
          <h1>Please leave feedback</h1>
          {buttons}
        </div>
        <div>
          <h1>Statistics</h1>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
          </ul>
        </div>
      </>
    )
  }
};
