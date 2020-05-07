import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApiContext from './context/api'
import Api from "./api/api";

const api = new Api();

ReactDOM.render(
  <React.StrictMode>
      <ApiContext.Provider value={ api }>
          <App />
      </ApiContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
