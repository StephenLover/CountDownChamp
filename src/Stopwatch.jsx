import React, { Component } from 'react';
import './App.css';


class StopWatch extends Component{
  constructor(props){
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
      counter : 0
  }
}

componentWillMount(){
  this.getTimeNow(this.props.time);
}

componentDidMount(){
  setInterval(() => this.getTimeNow(this.props.time), 1000)
}

leading0(num){
  return num < 10 ? '0' + num : num;
}

getTimeNow(time){
  if (time >= 60) {
    const minutes = parseInt(time / 60);
    const seconds = time % 60
    this.setState({minutes,seconds,counter++})
  }else {
    const seconds = time % 60
    this.setState({minutes:0, second,counter++})
  }


}
  render(){
    return(
      <div>
        <div className="StopWatch-minutes">{this.leading0(this.state.minutes)} min</div>
        <div className="StopWatch-seconds">{this.leading0(this.state.seconds)} sec</div>
      </div>
    )
  }
}

export default StopWatch;
