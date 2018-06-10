import React from 'react';

import {
    Grid,
    Row,
    Col,
    Panel,
    Button,
    Glyphicon
} from 'react-bootstrap';

import {AppBar, FieldGroup} from '../common';

export default class Component extends React.Component {
    render() {
        return (<div>
            <AppBar Home="Home"/>
            <Grid>
                <Row>
                    <Col mdOffset={4} md={4} xsOffset={2} xs={8}>
                        <Panel bsStyle="info">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">LOGIN</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <form>
                                    <FieldGroup type="text" label="ID" placeholder="input your ID"/>
                                    <FieldGroup type="password" label="Password" placeholder="input your password"/>
                                    <Col mdOffset={8} md={4} xsOffset={6} xs={4}>
                                        <LoginButton />
                                    </Col>
                                </form>
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        </div>);
    }
}

// ログインボタン
const LoginButton = ({...props}) => (
    <Button type="button" bsStyle="info" {...props}>
        <Glyphicon glyph="log-in"/> Login
    </Button>
);
