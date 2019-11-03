import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

import Issue from './Issue';

class Event extends Component {
  static propTypes = {
    event: PropTypes.instanceOf(Map),
  };

  render() {
    switch (this.props.event.get('type')) {
      case 'ISSUE':
        return <Issue {...this.props} />;
      default:
        return null;
    }
  }
}

export default Event;
