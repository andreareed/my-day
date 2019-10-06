import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions';
import Icon from './Icon';

const SidebarNav = ({ logout }) => {
  return (
    <div className="sidebar">
      <div className="sidebar--icons">
        <Link to="/">
          <Icon icon="Calendar" />
        </Link>
        <Link to="/history">
          <Icon icon="History" />
        </Link>
        <Link to="/stats">
          <Icon icon="Chart" />
        </Link>
        <Link to="/settings">
          <Icon icon="Cog" />
        </Link>
        <a onClick={logout}>
          <Icon icon="SignOut" />
        </a>
      </div>
    </div>
  );
};

export default connect(
  null,
  dispatch => ({ logout: values => dispatch(logout()) })
)(SidebarNav);
