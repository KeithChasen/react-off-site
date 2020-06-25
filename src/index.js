import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from "./store/store";
import './index.css';
import App from './App';
import ApiContext from './context/api'
import Api from "./api/api";

const api = new Api();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <ApiContext.Provider value={ api }>
          <App />
      </ApiContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
