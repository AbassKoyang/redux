import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from '../redux/store.js';
import {Provider} from 'react-redux'
import { fetchUser } from '../features/users/usersSlice.js';
import { fetchPost } from '../features/post/postSlice.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

store.dispatch(fetchPost());
store.dispatch(fetchUser());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/*' element={<App />}></Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
)
