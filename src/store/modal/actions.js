import store from '~/store/index.js';
import { _removeModal, _setModal } from '~/store/modal/index.js';

export const setModal = (name, data = false) =>
  store.dispatch(_setModal({ name, data }));
export const removeModal = () => store.dispatch(_removeModal());
