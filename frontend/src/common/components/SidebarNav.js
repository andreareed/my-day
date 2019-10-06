import React from 'react';
import Icon from './Icon';

const SidebarNav = props => {
  return (
    <div className="sidebar">
      <div className="sidebar--icons">
        <Icon icon="Calendar" />
        <Icon icon="History" />
        <Icon icon="Chart" />
        <Icon icon="Cog" />
        <Icon icon="SignOut" />
      </div>
    </div>
  );
};

export default SidebarNav;
