
import { configureStore } from '@reduxjs/toolkit';
import forgotPasswordReducer from '../slice/forgotPasswordSlice';
import loginReducer from '../slice/loginSlice';
import registerReducer from '../slice/registerSlice';

const store = configureStore({
  reducer: {
    forgotPassword: forgotPasswordReducer,
    login: loginReducer,
    register: registerReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
