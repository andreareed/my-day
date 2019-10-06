import { connect } from 'react-redux';

import PrimaryLayout from './PrimaryLayout';

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(PrimaryLayout);
