import React from 'react';
import { Route } from 'react-router-dom';
import { Auth } from '../../component/App';

/**
 * 権限付きルーティング
 * @param       {Object} component 描画するコンポーネント
 * @param       {Object} props     その他の属性値
 * @constructor
 */
export function RouteWithAuth({
  component,
  ...props
}) {
  return (
    <Route
      {...props}
      component={() => (
        <Auth>
          {component}
        </Auth>
      )}
    />
  );
}
