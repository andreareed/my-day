import { connect } from 'react-redux';
import Login from './Login';

import { login } from '../../redux/actions';

const mapStateToProps = state => ({
  error: state.user.get('error'),
});

const mapDispatchToProps = dispatch => ({
  login: values => dispatch(login(values)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
