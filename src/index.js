import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { MemoryRouter } from 'react-router-dom';
import App from './Components/App/App';

const router = <MemoryRouter><App /></MemoryRouter>

ReactDOM.render(
  router,
  document.getElementById('root')
);

