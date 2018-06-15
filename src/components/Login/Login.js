import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Grid,
  Row,
  Col,
  Panel,
  Alert,
  Button,
  Glyphicon,
} from 'react-bootstrap';
import {AppBar, FieldGroup} from '../common';

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
   * レンダー
   * @return {Object} メイン画面
   */
  render() {
    return (
      <div>
        <AppBar Home="Home"/>
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
                    <FieldGroup type="text" name="userId" label="ID" placeholder="input your ID"
                      onChange={this.onSetState()}
                      onEnterKeyDown={this.onLogin()} />
                    <FieldGroup type="password" name="password" label="Password" placeholder="input your password"
                      onChange={this.onSetState()}
                      onEnterKeyDown={this.onLogin()} />
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

  /**
   * ステートをセットする関数を生成
   * @return {function} ステートセット関数
   */
  onSetState() {
    return (e) => {
      const { value, name } = e.target;
      let state = { ...this.state };
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
}

/**
 * ログインボタンを生成
 * @param  {function} onClick クリック時イベント
 * @param  {Object}   props   そのほかの属性値
 * @return {Object}           ログインボタン
 */
const LoginButton = ({ onClick, ...props }) => (
  <Button type="button" bsStyle="info" onClick={onClick} {...props}>
    <Glyphicon glyph="log-in"/> ログイン
  </Button>
);

export default withRouter(Component);
