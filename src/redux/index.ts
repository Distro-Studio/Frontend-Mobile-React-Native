import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from 'react-redux';
import {persistReducer} from 'redux-persist';
import {attendanceReducer} from './attendanceSlice';
import {authReducer} from './authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const attendancePersistConfig = {
  key: 'attendance',
  storage: AsyncStorage,
  whitelist: ['attendanceState'],
};

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['authState'],
};

const rootReducer = combineReducers({
  attendance: persistReducer(attendancePersistConfig, attendanceReducer),
  auth: persistReducer(authPersistConfig, authReducer),
});

export const reduxStore = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
