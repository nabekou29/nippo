import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Component from './Login';
import * as Actions from './../../actions/login';

const mapStateToProps = (state) => (state.Login);

const mapDispatchToProps = (dispatch) => (bindActionCreators(Actions, dispatch));

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
