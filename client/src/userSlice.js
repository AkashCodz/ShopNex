import { createSlice } from '@reduxjs/toolkit';

const getUsernameFromLocalStorage = () => {
  const username = localStorage.getItem('username');
  return username ? JSON.parse(username) : null;
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: getUsernameFromLocalStorage(),
  },
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload;
      localStorage.setItem('username', JSON.stringify(action.payload));
    },
    clearUser: (state) => {
      state.username = null;
      localStorage.removeItem('username');
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const selectUser = (state) => state.user.username;

export default userSlice.reducer;
