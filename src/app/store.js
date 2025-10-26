import { configureStore } from "@reduxjs/toolkit";
import TasksReducer from '../slices/tasksSlice';


export const store = configureStore({
  reducer: {
    tasks: TasksReducer,
  }
});