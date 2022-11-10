import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  isLoading: boolean;
  isAuth: boolean;
  userData: any;
}

const initialState: UserState = {
  isLoading: false,
  isAuth: false,
  userData: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, payload) => {
      state.userData = payload;
      state.isAuth = true;
      state.isLoading = false;
    },
  },
});

export const { getUser, getUserSuccess } = userSlice.actions;
