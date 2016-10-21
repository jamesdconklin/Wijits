import React from 'react';

class Clock extends React.Component{
  constructor(){
    super();
    this.state = {
      interval: undefined,
      time: Date.parse(new Date)
    };
    this.ticTock = this.ticTock.bind(this);
  }

  render(){
    let now = new Date(this.state.time);
    return(
      <div id="clock">
        <p id="time-row">
          <span>Time:</span>
          <span id="time">{now.toTimeString()}</span>

        </p>
        <p id="date-row">
          <span>Date:</span>
          <span id="date">{now.toDateString()}</span>

        </p>
      </div>
    );
  }

  ticTock(){
    let time = this.state.time + 1000;
    this.setState({time});
  }

  componentDidMount(){
    this.interval = setInterval(this.ticTock, 1000);

  }

}

export default Clock;
