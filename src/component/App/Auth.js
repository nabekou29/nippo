import React from 'react';
import { withRouter } from 'react-router-dom';
import { sessionService } from 'redux-react-session';

/**
 * 権限管理用コンポーネント
 * 権限がある場合、子要素を描画する
 * @extends React
 */
class Component extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shouldRender: false,
    };
  }

  /**
   * レンダリング前処理
   */
  componentWillMount() {
    this.checkAuth();
  }

  /**
   * 権限のチェック<br>
   * 権限が無い場合ログイン画面に移動する
   */
  async checkAuth() {
    await sessionService.loadSession()
      .then((currentSession) => {
        if (!currentSession.token) {
          this.props.history.push('/login');
        }
        this.setState({
          ...this.state,
          shouldRender: true,
        });
      }).catch(() => {
        this.props.history.push('/login');
      });
  }

  /**
   * レンダリング
   * @return {Object} 子要素
   */
  render() {
    return <span>{this.state.shouldRender ? this.props.children : null}</span>;
  }
}

export const Auth = withRouter(Component);
