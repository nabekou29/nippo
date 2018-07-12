import React from 'react';
import { withRouter } from 'react-router-dom';
import { sessionService } from 'redux-react-session';
import {
  Grid,
  Row,
  Col,
  Panel,
  Alert,
} from 'react-bootstrap';
import {
  AppBar,
  FieldGroup,
} from '../../component/App';
import LoginButton from './LoginButton';

/**
 * ログイン画面コンポーネント
 * @extends React.Component
 */
class Component extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userId: '',
      password: '',
    };
  }

  /**
   * ステートをセットする関数を生成
   * @return {function} ステートセット関数
   */
  onSetState() {
    return (e) => {
      const { value, name } = e.target;
      const state = { ...this.state };
      state[name] = value;
      this.setState(state);
    };
  }

  /**
   * ログインする関数を生成
   * @return {function} ログイン関数
   */
  onLogin() {
    return () => {
      const { userId, password } = this.state;
      this.props.login(userId, password, this.props.history);
    };
  }

  /**
   * エンターキー押下時にログインする関数を生成
   * @return {function} ログイン関数
   */
  onLoginEnterKeyDown() {
    return (e) => {
      if (e.keyCode === 13) {
        this.onLogin()();
      }
    };
  }

  /**
   * レンダリング
   * @return {Object} メイン画面
   */
  render() {
    sessionService.deleteSession();
    return (
      <div>
        <AppBar Home />
        <Grid>
          <Row>
            <Col mdOffset={4} md={4}>
              <Panel bsStyle="info">
                <Panel.Heading>
                  <Panel.Title componentClass="h4"><b>ログイン</b></Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  {this.props.message && <Alert bsStyle="danger"><i>{this.props.message}</i></Alert>}
                  <form>
                    <FieldGroup
                      type="text"
                      name="userId"
                      label="ID"
                      placeholder="input your ID"
                      autoFocus
                      onChange={this.onSetState()}
                      onKeyDown={this.onLoginEnterKeyDown()}
                    />
                    <FieldGroup
                      type="password"
                      name="password"
                      label="Password"
                      placeholder="input your password"
                      onChange={this.onSetState()}
                      onKeyDown={this.onLoginEnterKeyDown()}
                    />
                    <Col mdOffset={7} md={4}>
                      <LoginButton onClick={this.onLogin()} />
                    </Col>
                  </form>
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withRouter(Component);
