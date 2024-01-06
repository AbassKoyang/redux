import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from '../redux/store.js';
import {Provider} from 'react-redux'
import { fetchUser } from '../features/users/usersSlice.js';

store.dispatch(fetchUser());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
