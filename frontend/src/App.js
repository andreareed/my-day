import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import store from 'store2';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import { verifyToken, logout } from './redux/actions';

import LoggedOutLayout from './Layouts/LoggedOutLayout';
import PrimaryLayout from './Layouts/PrimaryLayout';

import Register from './views/Register';
import Login from './views/Login';
import MyDay from './views/MyDay';
import History from './views/History';
import Stats from './views/Stats';
import Settings from './views/Settings';

class App extends Component {
  static propTypes = {
    user: PropTypes.instanceOf(Map),
    verifyToken: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { user, verifyToken } = this.props;
    if (!user) {
      const token = store.get('token');
      if (token) {
        verifyToken(token);
      }
    }
  }

  logout = () => {
    this.props.logout();
  };

  render() {
    const { user, loading } = this.props;

    if (loading) {
      return 'loading...';
    }

    if (!user) {
      return (
        <LoggedOutLayout>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Redirect to="/login" />
          </Switch>
        </LoggedOutLayout>
      );
    }

    return (
      <PrimaryLayout>
        <Switch>
          <Route exact path="/" component={MyDay} />
          <Route exact path="/history" component={History} />
          <Route exact path="/stats" component={Stats} />
          <Route exact path="/settings" component={Settings} />
          <Redirect to="/" />
        </Switch>
      </PrimaryLayout>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.get('data'),
    loading: state.user.get('loading'),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    verifyToken: token => dispatch(verifyToken(token)),
    logout: () => dispatch(logout()),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
