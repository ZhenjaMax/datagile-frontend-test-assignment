export type Task = {
    id: number;
    name: string;
    isCompleted: boolean;
};

export type TaskFilter = 'all' | 'completed' | 'uncompleted';
export type TaskSortBy = 'name' | 'status';

export type TasksState = {
    tasks: Task[];
    filter: TaskFilter;
    sortBy: TaskSortBy;
}
