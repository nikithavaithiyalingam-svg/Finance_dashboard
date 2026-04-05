import { configureStore } from '@reduxjs/toolkit';
import transactionsSlice from './transactionsSlice';
import roleSlice from './roleSlice';
import themeSlice from './themeSlice';
import uiSlice from './uiSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionsSlice,
    role: roleSlice,
    theme: themeSlice,
    ui: uiSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;