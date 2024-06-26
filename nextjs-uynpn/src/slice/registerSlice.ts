import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegisterState {
  isLoading: boolean;
}

const initialState: RegisterState = {
  isLoading: false,
};

const registerSlice = createSlice({
  name: 'register',
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

export const { sendRequest, requestSuccess } = registerSlice.actions;
export default registerSlice.reducer;
