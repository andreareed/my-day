import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CurrentDate from '../../common/components/CurrentDate';

class MyDay extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="my-day">
        <div className="container">
          <div className="my-day--header">
            <button className="button button--primary">Start Day</button>
            <CurrentDate timezones={['America/Phoenix']} />
          </div>
        </div>
      </div>
    );
  }
}

export default MyDay;
