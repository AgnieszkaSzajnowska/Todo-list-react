import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
  },

  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },

    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },

    toggleTaskDone: ({ tasks }, { payload }) => {
      const index = tasks.findIndex((task) => task.id === payload);
      tasks[index].done = !tasks[index].done;
    },

    removeTask: ({ tasks }, { payload }) => {
      const index = tasks.findIndex((task) => task.id === payload);
      tasks.splice(index, 1);
    },

    setAllDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
      }
    },

    fetchExampleTasks: (state) => {
      state.loading = true;
    },
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
      state.loading = false;
    },
    setError: (state) => {
      state.loading = false;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
  fetchExampleTasks,
  setTasks,
  setError,
} = tasksSlice.actions;


export const selectTasks = (state) => state.tasks.tasks;
export const selectHideDone = (state) => state.tasks.hideDone;
export const selectLoading = (state) => state.tasks.loading;

export const getTaskById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
  if (!query || query.trim() === "") {
    return state.tasks.tasks;
  }

  return state.tasks.tasks.filter(({ content }) =>
    content.toLowerCase().includes(query.trim().toLowerCase())
  );
};


export default tasksSlice.reducer;