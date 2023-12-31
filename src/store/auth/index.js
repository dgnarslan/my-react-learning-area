import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentAccount: {
    id: 1,
    username: 'prototurkcom',
    fullName: './prototurk',
    avatar:
      'https://pbs.twimg.com/profile_images/1200814302820753410/AhAh3xlU_400x400.png',
  },
  accounts: [
    {
      id: 1,
      username: 'prototurkcom',
      fullName: './prototurk',
      avatar:
        'https://pbs.twimg.com/profile_images/1200814302820753410/AhAh3xlU_400x400.png',
    },
    {
      id: 2,
      username: 'tayfunerbilen',
      fullName: 'Tayfun Erbilen',
      avatar:
        'https://pbs.twimg.com/profile_images/1721055670932324352/MG7ym5tG_200x200.jpg',
    },
  ],
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    _addAccounts: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload,
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccounts, _setCurrentAccount, _removeAccount } =
  auth.actions;
export default auth.reducer;
