import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../common/components/Header';

import SidebarNav from '../../common/components/SidebarNav';

class PrimaryLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  componentDidMount() {
    this.props.getTodaysEvents();
  }

  render() {
    const { children, startDay, currentEvent, loaded } = this.props;

    if (!loaded) {
      return 'Loading';
    }

    return (
      <div>
        <div className="header container">
          {currentEvent ? (
            <div>currentEvent</div>
          ) : (
            <button className="button button--primary" onClick={startDay}>
              Start Day
            </button>
          )}
          <Header timezones={['America/Phoenix']} />
        </div>
        <div>
          <SidebarNav />
          <div className="container">{children}</div>
        </div>
      </div>
    );
  }
}

export default PrimaryLayout;
