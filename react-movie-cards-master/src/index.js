import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import './styles/app.css';

ReactDOM.render(
<App />
, document.getElementById('app'));
