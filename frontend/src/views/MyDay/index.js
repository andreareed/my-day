import { connect } from 'react-redux';
import MyDay from './MyDay';

import { fetchEvents } from './redux/actions';

const mapStateToProps = state => {
  return {
    user: state.user,
    events: state.events.eventList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: queryObj => dispatch(fetchEvents(queryObj)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyDay);
