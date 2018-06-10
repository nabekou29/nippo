import React from 'react';

import {
    FormGroup,
    ControlLabel,
    FormControl,
    Glyphicon,
    Navbar,
    HelpBlock,
} from 'react-bootstrap';

// 共通のナビゲーションバー
export const AppBar = ({Home, collapse, ...props}) => (
    <Navbar {...props}>
        <Navbar.Header>
            <Navbar.Brand>
                {Home && <a href="/"><Glyphicon glyph="home"/> Home</a>}
            </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
            {collapse}
        </Navbar.Collapse>
    </Navbar>
);

// 入力フォーム
export const FieldGroup = ({ id, label, help, ...props }) => (
    <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
);
