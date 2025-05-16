import { Typography, Box } from '@mui/material';
import { addTask, toggleTask, deleteTask, setFilter, setSortBy } from './store/tasksSlice';
import { RootState } from './store/store';
import { useDispatch, useSelector } from 'react-redux';
import TaskInput from './components/TaskInput';
import TaskViewer from './components/TaskViewer';
import TaskManager from './components/TaskManager';
import { Task, TaskFilter, TaskSortBy } from './types';
import './App.css';

function App() {
	const dispatch = useDispatch();
  	const { tasks, filter, sortBy } = useSelector((state: RootState) => state.tasks);

	const filteredTasks: Task[] = tasks.filter((task: Task) => {
		switch(filter) {
			case 'completed':
				return task.isCompleted;
			case 'uncompleted':
				return !task.isCompleted;
			default:
				return true;
		}
	});

	const sortedTasks: Task[] = filteredTasks.sort((a: Task, b: Task) => {
		switch(sortBy) {
			case 'name':
				return a.name.localeCompare(b.name);
			case 'status':
				return Number(a.isCompleted) - Number(b.isCompleted);
			default:
				return a.id - b.id;
		}
	});

  	return <>
		<Box className="app-input-outer-box">
			<Typography className="app-input-label">Новая задача</Typography>
			<TaskInput onAddTask={text => dispatch(addTask(text))}></TaskInput>
		</Box>
		<Box className="app-tasks-outer-box">
			<Typography className='app-tasks-header'>Список задач</Typography>
			<Box className="app-tasks-inner-box">
				<TaskViewer
					tasks={sortedTasks}
					onToggle={(id: number) => dispatch(toggleTask(id))}
					onDelete={(id: number) => dispatch(deleteTask(id))}
				></TaskViewer>
				<TaskManager 
					filter={filter}
					sortBy={sortBy}
					onFilterChange={(value: TaskFilter) => dispatch(setFilter(value))}
					onSortChange={(value: TaskSortBy) => dispatch(setSortBy(value))}
				></TaskManager>
			</Box>
		</Box>
	</>;
}

export default App;
