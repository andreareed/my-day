import { connect } from 'react-redux';
import MyDay from './MyDay';

import { fetchEvents } from './redux/actions';

const stateProps = state => {
  return {
    user: state.user,
  };
};

const dispatchProps = dispatch => {
  return {
    fetchEvents: queryObj => dispatch(fetchEvents(queryObj)),
  };
};

function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, stateProps, dispatchProps, ownProps, {
    fetchEvents: queryObj => dispatchProps.fetchEvents({ ...queryObj, userIds: stateProps.user.getIn(['data', 'id']) }),
  });
}

export default connect(
  stateProps,
  dispatchProps,
  mergeProps
)(MyDay);
