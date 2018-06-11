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

export default class Component extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      user: {
        id: '',
        password: ''
      }
    };
    this.onLogin = this.onLogin.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onLogin(history) {
    const { user } = this.state;
    this.props.login(user, history);
  }

  onChange(e) {
    const { value, name } = e.target;
    const { user } = this.state;
    user[name] = value;
    this.setState({ user });
  }

  render() {
    // ログインボタン
    const LoginButton = withRouter(({ history }) => (
      <Button type="button" bsStyle="info" onClick={() => this.onLogin(history)}>
        <Glyphicon glyph="log-in"/> ログイン
      </Button>
    ));

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
                    <FieldGroup type="text" id="id" name="id" label="ID" placeholder="input your ID" onChange={this.onChange} />
                    <FieldGroup type="password" id="pass" name="password" label="Password" placeholder="input your password" onChange={this.onChange}/>
                    <Col mdOffset={7} md={4}>
                      <LoginButton />
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
