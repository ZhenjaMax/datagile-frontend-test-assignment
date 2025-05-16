import { TasksState } from "../types";

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

export default initialState;
