import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button} from 'react-bootstrap';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline : 'December 25, 2018',
      newDeadline: '',
      StopWatchDeadline: 100,
      newStopWatchDeadline: ''
    }
  }

  changeDeadline() {
    //display the input in inspect
    //console.log('state', this.state);
    this.setState({deadline: this.state.newDeadline});
  }

  changeStopWatchDeadline(){
    this.setState({StopWatchDeadline: this.state.newStopWatchDeadline})
  }

  render() {
    return(
      <div className="App">
        <div className="App-title">
          Countdown to {this.state.deadline}
        </div>
        <div>
          <Clock
            deadline = {this.state.deadline}
            />
        </div>
        <Form inline>
          <FormControl
            className="Deadline-input"
            placeholder='new date'
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
          <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
        </div>

    )
  }
}


export default App;
