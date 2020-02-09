import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
import IRouter from './router';
import { Provider } from 'react-redux';
import configStore from './redux/store/configStore'
import * as serviceWorker from './serviceWorker';
const store = configStore();
ReactDOM.render(
<Provider store={store}>
    <IRouter />
</Provider>
, document.getElementById('root'));

serviceWorker.unregister();
