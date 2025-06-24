import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import groupsReducer from './slices/groupsSlice';
import rehearsalsReducer from './slices/rehearsalsSlice';
import venuesReducer from './slices/venuesSlice';
import attendanceReducer from './slices/attendanceSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    groups: groupsReducer,
    rehearsals: rehearsalsReducer,
    venues: venuesReducer,
    attendance: attendanceReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types (for non-serializable data like Date objects)
        ignoredActions: ['rehearsals/setSelectedDate'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload.date', 'meta.arg.date'],
        // Ignore these paths in the state
        ignoredPaths: [
          'rehearsals.selectedDate',
          'rehearsals.events.startTime',
          'rehearsals.events.endTime',
        ],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;