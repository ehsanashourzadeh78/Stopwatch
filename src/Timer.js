import React from "react";
import "./style.css";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      isRunning: false,
    };
    this.interval = null;
  }

  startTimer = () => {
    if (!this.state.isRunning) {
      this.setState({ isRunning: true });
      this.interval = setInterval(() => {
        this.setState((prevState) => {
          let { seconds, minutes, hours } = prevState;

          seconds += 1;

          if (seconds === 60) {
            seconds = 0;
            minutes += 1;
          }

          if (minutes === 60) {
            minutes = 0;
            hours += 1;
          }

          return { seconds, minutes, hours };
        });
      }, 1000);
    }
  };

  stopTimer = () => {
    clearInterval(this.interval);
    this.setState({ isRunning: false });
  };

  resetTimer = () => {
    this.stopTimer();
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  formatTime = (value) => {
    return value.toString().padStart(2, '0');
  }

  render() {
    const { hours, minutes, seconds } = this.state;
    return (
      <>
        <h2 className="Timer">
          {`${this.formatTime(hours)}:${this.formatTime(minutes)}:${this.formatTime(seconds)}`}
        </h2>
        <div className="button_box">
          <span className="action_button start_button" onClick={this.startTimer}>start</span>
          <span className="action_button stop_button" onClick={this.stopTimer}>stop</span>
          <span className="action_button reset_button" onClick={this.resetTimer}>reset</span>
        </div>
      </>
    );
  }
}

export default Timer;
