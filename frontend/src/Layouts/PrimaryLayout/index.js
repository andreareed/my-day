import { connect } from 'react-redux';
import { postEvent } from '../../views/MyDay/redux/actions';
import eventConstants from '../../lib/eventConstants';

import PrimaryLayout from './PrimaryLayout';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  startDay: () => dispatch(postEvent({ type: eventConstants.START_DAY })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrimaryLayout);
