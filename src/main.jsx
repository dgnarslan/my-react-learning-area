import React from 'react';
import ReactDOM from 'react-dom/client';
import routes from './routes/index.jsx';
import { RouterProvider } from 'react-router-dom';
import '~/assets/css/tailwind.css';
import { Provider } from 'react-redux';
import store from '~/store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>,
);
