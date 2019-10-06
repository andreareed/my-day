import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import moment from 'moment';
import CurrentDate from '../../common/components/CurrentDate';

class MyDay extends Component {
  static propTypes = {
    user: PropTypes.instanceOf(Map),
  };

  getPersonalizedGreeting = () => {
    const { user } = this.props;
    const currentHour = parseFloat(moment().format('HH'));
    let timeOfDay = 'morning';

    if (currentHour >= 12 && currentHour <= 17) {
      timeOfDay = 'afternoon';
    } else if (currentHour >= 17) {
      timeOfDay = 'evening';
    }

    return `Good ${timeOfDay}, ${user.getIn(['data', 'first_name'])}.`;
  };

  render() {
    return (
      <div className="my-day">
        <div className="container">
          <div className="my-day--header">
            <button className="button button--primary">Start Day</button>
            <CurrentDate timezones={['America/Phoenix']} />
          </div>
          <div className="my-day--greeting">
            <h1>{this.getPersonalizedGreeting()}</h1>
            <div>Are you ready to start your day?</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyDay;