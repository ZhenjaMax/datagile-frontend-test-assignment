import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TaskFilter, TaskSortBy } from '../types';
import initialState from './initialState';
        
const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>): void => {
            const newTask: Task = {
                id: Date.now(),
                name: action.payload,
                isCompleted: false,
            };
            state.tasks.push(newTask);
        },
        toggleTask: (state, action: PayloadAction<number>): void => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.isCompleted = !task.isCompleted;
            }
        },
        deleteTask: (state, action: PayloadAction<number>): void => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        setFilter: (state, action: PayloadAction<TaskFilter>): void => {
            state.filter = action.payload;
        },
        setSortBy: (state, action: PayloadAction<TaskSortBy>): void => {
            state.sortBy = action.payload;
        }
    },
});

export const { addTask, toggleTask, deleteTask, setFilter, setSortBy } = tasksSlice.actions;
export default tasksSlice.reducer;
