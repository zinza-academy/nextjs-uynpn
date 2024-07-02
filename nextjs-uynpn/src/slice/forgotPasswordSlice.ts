
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ForgotPasswordState {
  isLoading: boolean;
}

const initialState: ForgotPasswordState = {
  isLoading: false,
};

const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState,
  reducers: {
    sendRequest(state) {
      state.isLoading = true;
    },
    requestSuccess(state) {
      state.isLoading = false;
    },
  },
});

export const { sendRequest, requestSuccess } = forgotPasswordSlice.actions;
export default forgotPasswordSlice.reducer;
