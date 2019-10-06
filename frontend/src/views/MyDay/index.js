import { connect } from 'react-redux';
import MyDay from './MyDay';

import {} from './redux/actions';

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyDay);
