import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';

const formatAlternateTimezones = (timezones, currentTime) => {
  if (!timezones) {
    return null;
  }

  const altTimezones = timezones.map(tz => moment.tz(currentTime, tz).format('h:mm A z'));

  return `(${altTimezones.join(', ')})`;
};

class Header extends Component {
  static propTypes = {
    timezones: PropTypes.array,
  };

  state = {
    currentTime: moment(),
  };

  componentDidMount() {
    this.clockInterval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  tick = () => this.setState({ currentTime: moment() });

  render() {
    const { timezones } = this.props;
    const { currentTime } = this.state;

    return (
      <div>
        <div className="current-date">
          <h1>{moment().format('dddd, MMMM Do')}</h1>
          {currentTime.format('h:mm:ss A')} {formatAlternateTimezones(timezones, currentTime)}
        </div>
      </div>
    );
  }
}

export default Header;
