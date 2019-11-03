import { connect } from 'react-redux';
import { postEvent, getTodaysEvents } from '../../views/MyDay/redux/actions';
import eventConstants from '../../lib/eventConstants';
import { currentEventSelector } from '../../views/MyDay/redux/selectors';

import PrimaryLayout from './PrimaryLayout';

const mapStateToProps = state => ({
  user: state.user,
  currentEvent: currentEventSelector(state),
  loaded: state.events.today.get('loaded'),
});

const mapDispatchToProps = dispatch => ({
  startDay: () => dispatch(postEvent({ type: eventConstants.START_DAY })),
  getTodaysEvents: () => dispatch(getTodaysEvents()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrimaryLayout);
