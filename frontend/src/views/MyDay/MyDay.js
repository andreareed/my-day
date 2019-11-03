import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import moment from 'moment';

import Event from './Event';

class MyDay extends Component {
  static propTypes = {
    user: PropTypes.instanceOf(Map),
    events: PropTypes.instanceOf(Map),
  };

  componentDidMount() {
    this.props.fetchEvents({
      start_time: moment()
        .startOf('day')
        .utc()
        .format(),
    });
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
    const { events } = this.props;

    if (events.get('loading')) {
      return 'Loading...';
    }

    if (!events.get('data') || !events.get('data').size) {
      return (
        <div className="my-day">
          <div className="my-day--greeting">
            <h1>{this.getPersonalizedGreeting()}</h1>
            <div>Are you ready to start your day?</div>
          </div>
        </div>
      );
    }

    return events.get('data').map(event => <Event event={event} key={event.get('id')} />);
  }
}

export default MyDay;
