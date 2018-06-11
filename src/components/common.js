import React from 'react';

import {
  FormGroup,
  ControlLabel,
  FormControl,
  Glyphicon,
  Navbar,
  HelpBlock,
} from 'react-bootstrap';

// ナビゲーションバー
export function AppBar({Home, collapse, ...props}) {
  return (
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
}

// 入力フォーム
export function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl id={id} {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
