import { configureStore } from '@reduxjs/toolkit';
import auth from '~/store/auth/index.js';
import modal from '~/store/modal/index.js';
import appearance from '~/store/appearance/index.js';

const store = configureStore({
  reducer: {
    auth,
    modal,
    appearance,
  },
});

export default store;
