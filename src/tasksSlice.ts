import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
    id: number;
    name: string;
    isCompleted: boolean;
}

interface TasksState {
    tasks: Task[];
    filter: 'all' | 'completed' | 'uncompleted';
    sortBy: 'name' | 'status';
}

const initialState: TasksState = {
    tasks: [
        {id: 1, name: "Проснуться", isCompleted: true},
        {id: 2, name: "Улыбнуться", isCompleted: true},
        {id: 3, name: "Позавтракать", isCompleted: false},
        {id: 4, name: "Съездить в университет", isCompleted: false}
    ],
    filter: 'all',
    sortBy: 'name'
};
        
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
        setFilter: (state, action: PayloadAction<'all' | 'completed' | 'uncompleted'>): void => {
            state.filter = action.payload;
        },
        setSortBy: (state, action: PayloadAction<'name' | 'status'>): void => {
            state.sortBy = action.payload;
        }
    },
});

export const { addTask, toggleTask, deleteTask, setFilter, setSortBy } = tasksSlice.actions;
export type { Task };
export default tasksSlice.reducer;
