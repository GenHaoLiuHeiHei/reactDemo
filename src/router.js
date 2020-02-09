import React from 'react';
import { HashRouter } from 'react-router-dom';
import App from './App';
import AuthRouter from './AuthRouter';
export default class IRouter extends React.Component {
    render () {
        return (
          <HashRouter>
            <App>
                <AuthRouter/>
            </App>
          </HashRouter>
        )
    }
}