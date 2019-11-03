import { connect } from 'react-redux';
import MyDay from './MyDay';

const mapStateToProps = state => {
  return {
    user: state.user,
    events: state.events.today,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyDay);
