import store from '~/store/index.js';
import {
  _setBackgroundColor,
  _setColor,
  _setFontSize,
} from '~/store/appearance/index.js';
export const setBackgroundColor = (data) =>
  store.dispatch(_setBackgroundColor(data));
export const setColor = (data) => store.dispatch(_setColor(data));
export const setFontSize = (data) => store.dispatch(_setFontSize(data));
