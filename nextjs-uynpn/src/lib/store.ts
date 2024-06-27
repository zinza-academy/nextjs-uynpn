
import { configureStore } from '@reduxjs/toolkit';
import forgotPasswordReducer from '../slice/forgotPasswordSlice';
import loginReducer from '../slice/loginSlice';
import registerReducer from '../slice/registerSlice';
import userReducer from '@/slice/userSlice';

const store = configureStore({
  reducer: {
    forgotPassword: forgotPasswordReducer,
    login: loginReducer,
    register: registerReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
