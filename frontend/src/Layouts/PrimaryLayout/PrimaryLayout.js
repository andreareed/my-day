import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SidebarNav from '../../common/components/SidebarNav';

class PrimaryLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <SidebarNav />
        <div>{children}</div>
      </div>
    );
  }
}

export default PrimaryLayout;
