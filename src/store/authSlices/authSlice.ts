import { createSlice } from '@reduxjs/toolkit';

export interface User {
  display_name: string;
  email: string;
  id: string;
}

interface authState {
  token: string | null;

  userData: User | null;
}

const initialState: authState = {
  token: null,
  userData: null,
};

export const authSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
    },
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.token = null;

      state.userData = null;
    },

    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { login, logout, setUserData, setToken } = authSlice.actions;
