import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNum: 0,
      secondNum: 0,
      result: 0
    }
  }

  handleChange(e) {
    const {name, value} = e.target
    this.setState({
      [name] : value
    })

  }

  handleSum() {
    const {firstNum, secondNum} = this.state
    const sum = parseInt(firstNum) + parseInt(secondNum)
    this.setState({
      result: sum
    })
  }


  render() {
    const { result } = this.state
    return (
      <React.Fragment>
        <input type='text' name='firstNum' onChange={(e)=> this.handleChange(e)} />
        <input type='text' name='secondNum' onChange={(e)=> this.handleChange(e)} />
        <button onClick={() => this.handleSum()}> Sum up!</button>
        <div>
        <p>Result: {result}</p>
        </div>
      
      </React.Fragment >

    );
  }

}

export default App;
