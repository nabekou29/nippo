import React from 'react';

import {
  Glyphicon,
  Navbar,
} from 'react-bootstrap';

/**
 * ナビゲーションバーを生成
 * @param  {boolean} Home ホームアイコンを表示するか
 * @return {Object}       ナビゲーションバー
 */
export function AppBar({ Home }) {
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
