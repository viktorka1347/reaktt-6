import React from 'react';
import PropTypes from 'prop-types';
import ClockFace from './ClockFace';
import ClockNumbers from './ClockNumbers';
import { getTime, getAngles } from '../utils/utils';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.utcOffset = props.timezone * 60;
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    timezone: PropTypes.number.isRequired,
    onButtonClick: PropTypes.func.isRequired 
  }

  state = {
    time: getTime(this.props.timezone * 60)
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.timer(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  timer() {
    const time = getTime(this.utcOffset);
    if (time === this.state.time) {
      return;
    }

    this.setState({ time });
  }

  render() {
    const { name, onButtonClick } = this.props;
    const { hourAngle, minAngle, secAngle } = getAngles(this.state.time);

    return (
      <div className="Clock">  
        <p className="Clock-title">{name}</p>
        <ClockFace 
          hourAngle={hourAngle}
          minAngle={minAngle}
          secAngle={secAngle}
          onButtonClick={onButtonClick} 
        />
        <ClockNumbers time={this.state.time} />
      </div>
    );
  }
}

export default Clock;