import { connect } from 'react-redux';
import Register from './Register';

import { registerUser } from '../../redux/actions';

const mapStateToProps = state => ({
  error: state.user.get('error'),
});

const mapDispatchToProps = dispatch => ({
  registerUser: values => dispatch(registerUser(values)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
