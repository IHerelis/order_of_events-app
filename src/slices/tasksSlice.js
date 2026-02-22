import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const upDateTaskGroupsList = (list) => {
  return [...new Set(list.map((task) => {return task.group}))]
};

const initialState = {
  taskList: JSON.parse(localStorage.getItem('TaskList')) || [],
  settingTaskList: JSON.parse(localStorage.getItem('SettingTaskList')) || {},
  taskGroupsList: [...new Set((JSON.parse(localStorage.getItem('TaskList'))).map((task) => {return task.group}))] || [''],
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

      state.taskGroupsList = upDateTaskGroupsList(state.taskList);
    },
    upDateTask: (state, action) => {
      state.taskList = state.taskList.map(task => {
        if (task.id === action.payload.id) 
          {return task = action.payload} else {return task}
        }
      );
      localStorage.setItem("TaskList", JSON.stringify(state.taskList));

      state.taskGroupsList = upDateTaskGroupsList(state.taskList);
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


    updateSettingTaskList: (state, action) => {
      state.settingTaskList = action.payload;
      localStorage.setItem("SettingTaskList", JSON.stringify(state.settingTaskList));
    },
    resetSettingTaskList: (state, action) => {
      state.settingTaskList = {};
      localStorage.setItem("SettingTaskList", JSON.stringify(state.settingTaskList));
    },


    addTaskGroup: (state, action) => {
      if (!state.taskGroupsList.includes(action.payload.group)) {
        state.taskGroupsList.push(action.payload.group);
      }
      localStorage.setItem("TaskGroupsList", JSON.stringify(state.taskGroupsList));
    },
  }
})


export const {addTask, removeTask, upDateTask, completeTask, progressTask, updateSettingTaskList, resetSettingTaskList, addTaskGroup} = TasksSlice.actions;
export default TasksSlice.reducer;