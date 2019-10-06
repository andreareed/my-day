import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PrimaryLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <div>{children}</div>
      </div>
    );
  }
}

export default PrimaryLayout;
