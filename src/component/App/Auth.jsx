import React from 'react';
import { withRouter } from 'react-router-dom';
import { sessionService } from 'redux-react-session';

/**
 * 権限管理用コンポーネント
 * 権限がある場合、子要素を描画する
 * @extends React
 */
class Component extends React.Component {
  /**
   * レンダリング前処理
   */
  componentWillMount() {
    sessionService.loadSession()
      .then((currentSession) => {
        if (!currentSession.token) {
          this.props.history.push('/login');
        }
      }).catch(() => {
        this.props.history.push('/login');
      });
  }

  /**
   * レンダリング
   * @return {Object} 子要素
   */
  render() {
    return <span>{this.props.children}</span>;
  }
}

export const Auth = withRouter(Component);
