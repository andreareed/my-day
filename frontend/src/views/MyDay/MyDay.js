import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import moment from 'moment';

class MyDay extends Component {
  static propTypes = {
    user: PropTypes.instanceOf(Map),
  };

  componentDidMount() {
    this.props.fetchEvents({ dates: [moment().format('YYYY-MM-DD')] });
  }

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
        <div className="my-day--greeting">
          <h1>{this.getPersonalizedGreeting()}</h1>
          <div>Are you ready to start your day?</div>
        </div>
      </div>
    );
  }
}

export default MyDay;
