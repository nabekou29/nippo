class Auth extends Component {
  static PropTypes = {
    user: PropTypes.string
  }

  componentWillMount() {
    this.userWillTransfer(this.props);
  }

  componentWillUpdate(nextProps) {
    this.userWillTransfer(this.props);
  }

  userWillTransfer(props) {
    if (!localStorage.getItem('sessionId')) {
      this.setState({ isAuthenticated: false });
    } else {
      this.setState({ isAuthenticated: true });
    }
  }

  render() {
    return (
      this.state.isAuthenticated? (
        <Route children={this.props.children} />
      ) : (
        <Redirect to={'/login'} />
      )
    )
  }
}

const mapStateToProps = state => ({
  sessionId: state.sessionId
});

export default withRouter(connect(mapStateToProps)(Auth));
