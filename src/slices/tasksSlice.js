import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  taskList: JSON.parse(localStorage.getItem('TaskList')) || [],
}


export const TasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      action.payload.id = nanoid();
      state.taskList.push(action.payload);
      localStorage.setItem("TaskList", JSON.stringify(state.taskList));
    },
    removeTask: (state, action) => {
      state.taskList = state.taskList.filter(task => task.id !== action.payload.id);
      localStorage.setItem("TaskList", JSON.stringify(state.taskList));
    },
    completeTask: (state, action) => {
      state.taskList.map((item) => {
        if (item.id === action.payload.id) {
          item.done = true;
          item.status = "done";
          localStorage.setItem("TaskList", JSON.stringify(state.taskList));
          return;
        }
      });
    },
    progressTask: (state, action) => {
      state.taskList.map((item) => {
        if (item.id === action.payload.id) {
          item.status = "progress";
          localStorage.setItem("TaskList", JSON.stringify(state.taskList));
          return;
        }
      });
    },
  }
})


export const {addTask, removeTask, completeTask, progressTask} = TasksSlice.actions;
export default TasksSlice.reducer;