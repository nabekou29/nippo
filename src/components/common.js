import React from 'react';

import {
  FormGroup,
  ControlLabel,
  FormControl,
  Glyphicon,
  Navbar,
  HelpBlock,
} from 'react-bootstrap';

/**
 * ナビゲーションバーを生成
 * @param  {boolean} Home ホームアイコンを表示するか
 * @return {Object}       ナビゲーションバー
 */
export function AppBar({Home}) {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          {Home && <a href="/"><Glyphicon glyph="home"/> Home</a>}
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>
  );
}

/**
 * 入力フォームを生成します
 * @param  {string}   id             ID
 * @param  {string}   label          ラベル
 * @param  {string}   help           ヘルプ
 * @param  {function} onEnterKeyDown エンターキー押下時イベント
 * @param  {Object}   props          その他の属性値
 * @return {Object}                  入力フォーム
 */
export function FieldGroup({ id, label, help, onEnterKeyDown, ...props }) {
  let innerEnterKeyDown = (e) => {
    if (e.keyCode === 13) {
      onEnterKeyDown && onEnterKeyDown();
    }
  };

  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl id={id} {...props} onKeyDown={innerEnterKeyDown} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
