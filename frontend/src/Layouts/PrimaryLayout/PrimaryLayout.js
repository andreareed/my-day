import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../common/components/Header';

import SidebarNav from '../../common/components/SidebarNav';

class PrimaryLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <div className="header container">
          <button className="button button--primary">Start Day</button>
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
