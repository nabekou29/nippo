import React from 'react';

import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
} from 'react-bootstrap';

/**
 * 入力フォームを生成します
 * @param  {string}   id      ID
 * @param  {string}   label   ラベル
 * @param  {string}   help    ヘルプ
 * @param  {Object}   props   その他の属性値
 * @return {Object}           入力フォーム
 */
export function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl id={id} {...props}/>
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
