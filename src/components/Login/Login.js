import React from 'react';

import {
  Grid,
  Row,
  Col,
  Panel,
  Button,
  Glyphicon,
} from 'react-bootstrap';

import {
  AppBar,
  FieldGroup,
} from '../common';

export default class Component extends React.Component {
  render() {
    return (
      <div>
        <AppBar Home/>
        <Grid>
          <Row>
            <Col xsOffset={4} xs={4}>
              <Panel bsStyle="info">
                <Panel.Heading>
                  <Panel.Title componentClass="h3">LOGIN</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <form>
                    <FieldGroup type="text" label="ID" placeholder="input your ID"/>
                    <FieldGroup type="password" label="Password" placeholder="input your password" />
                    <Col xsOffset={8} xs={4}>
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

const LoginButton = ({...props}) => (
  <Button type="button" bsStyle="info" {...props}>
    <Glyphicon glyph="log-in"/> Login
  </Button>
);
