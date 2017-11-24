// @flow

import { connect } from 'react-redux';
import Login from './components/Login';
import { login, logout } from 'app/state/auth';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  login,
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
