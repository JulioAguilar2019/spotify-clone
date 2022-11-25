import { createSlice } from '@reduxjs/toolkit';

export interface User {
  display_name: string;
  email: string;
  id: string;
}

interface authState {
  token: string | null;
}

const initialState: authState = {
  token: null,
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
  },
});

export const { login, setToken } = authSlice.actions;
