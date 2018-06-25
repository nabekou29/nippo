import React from 'react';
import {
  Button,
  Glyphicon,
} from 'react-bootstrap';

/**
 * ログインボタンを生成
 * @param  {function} onClick クリック時イベント
 * @param  {Object}   props   そのほかの属性値
 * @return {Object}           ログインボタン
 */
export default function LoginButton({ onClick, ...props }) {
  return (
    <Button type="button" bsStyle="info" onClick={onClick} {...props}>
      <Glyphicon glyph="log-in" /> ログイン
    </Button>
  );
}
