import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  isLoading: boolean;
  token: string | null;
} 

const initialState: LoginState = {
  isLoading: false,
  token: null
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
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    clearToken(state) {
      state.token = null;
    },
  },
});

export const { sendRequest, requestSuccess, setToken, clearToken } = loginSlice.actions;
export default loginSlice.reducer;
