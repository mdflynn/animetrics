import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App/App';

const router = <BrowserRouter><App /></BrowserRouter>

ReactDOM.render(
  router,
  document.getElementById('root')
);

