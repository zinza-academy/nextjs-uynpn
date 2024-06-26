import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  isLoading: boolean;
}

const initialState: LoginState = {
  isLoading: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    sendRequest: (state) => {
      state.isLoading = true;
    },
    requestSuccess: (state) => {
      state.isLoading = false;
    }, 
  },
});

export const { sendRequest, requestSuccess } = loginSlice.actions;
export default loginSlice.reducer;
