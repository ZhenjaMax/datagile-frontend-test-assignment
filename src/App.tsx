import React from 'react';
import './App.css';
import { Button, FormControlLabel, RadioGroup, Radio, FormControl, MenuItem, Select, Typography } from '@mui/material';
import { addTask, toggleTask, deleteTask, setFilter, setSortBy, Task } from './tasksSlice';
import { RootState } from './store';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add'
import IsolatedTextField from './IsolatedTextField';
import TaskComponent from './TaskComponent';

function App() {
	const dispatch = useDispatch();
  	const { tasks, filter, sortBy } = useSelector((state: RootState) => state.tasks);
  	const [inputText, setInputText] = React.useState<string>('');

	const filteredTasks: Task[] = tasks.filter((task: Task) => {
		if (filter === 'all') return true;
		if (filter === 'completed') return task.isCompleted;
		if (filter === 'uncompleted') return !task.isCompleted;
		return true;
	});
	const sortedTasks: Task[] = filteredTasks.sort((a: Task, b: Task) => {
		if (sortBy === 'name') {
			return a.name.localeCompare(b.name);
		} else if (sortBy === 'status') {
			return Number(a.isCompleted) - Number(b.isCompleted);
		} else {
			return a.id - b.id;
		}
	});

	const handleAddTask = () => {
		if(inputText.trim() === '')
			return;
		dispatch(addTask(inputText));
		setInputText('');
	};

  	return (<>
		<div style={{display: 'flex', alignItems: 'center', borderBottom: '2px solid #E9E9E9', margin: "20px 0 0", padding: "0 20px 20px"}}>
			<Typography style={{color: '#888', paddingRight: '60px', margin: '0', flexShrink: 0, fontSize: 16}}>Новая задача</Typography>
			<IsolatedTextField onAddTask={(text) => dispatch(addTask(text))} />
			<Button
				disableRipple
				variant="contained"
				startIcon={<AddIcon />} 
				sx={{textTransform: 'none', fontWeight: 500, padding: '7px', marginLeft: "20px", backgroundColor: "#315BFF", flexShrink: 0, 
					'&:hover': {
						backgroundColor: '#466CFF',
						transition: '0.1s'
					},
					'&:active': {
						backgroundColor: '#0035A0',
						transition: '0.1s'
					}
				}}
				onClick={handleAddTask}
			>Добавить</Button>
		</div>
		<div style={{padding: '25px 20px'}}>
			<Typography style={{fontSize: 22, margin: '0'}}>Список задач</Typography>
			<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', border: '2px solid #D7D7D7', borderRadius: '5px', margin: '20px 0'}}>
				<div style={{padding: '15px', borderRight: '2px solid #D7D7D7', height: '300px', overflowY: 'auto'}}>
					{sortedTasks.map((task: Task) => <TaskComponent
						key={task.id}
						id={task.id}
						name={task.name}
						isCompleted={task.isCompleted}
						onToggle={(id: number) => dispatch(toggleTask(id))}
						onDelete={(id: number) => dispatch(deleteTask(id))}
					></TaskComponent>)}
				</div>
				<div style={{padding: '15px', height: '300px'}}>
					<div style={{display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: "16px", rowGap: "10px", alignSelf: 'start'}}>
						<Typography style={{color: 'grey', alignSelf: 'center'}}>Статус</Typography>
						<FormControl>
							<RadioGroup
								aria-labelledby="label-radiio-buttons-group"
								name="radiio-buttons-group"
								value={filter}
								row
								onChange={(e) => dispatch(setFilter(e.target.value as 'all' | 'completed' | 'uncompleted'))}
							>
								<FormControlLabel value="all" control={<Radio />} label="Все" />
								<FormControlLabel value="uncompleted" control={<Radio />} label="Активные" />
								<FormControlLabel value="completed" control={<Radio />} label="Завершённые" />
							</RadioGroup>
						</FormControl>
						<Typography style={{color: 'grey', alignSelf: 'center'}}>Сортировка</Typography>
						<FormControl fullWidth>
						<Select
							labelId="label-select-group"
							id="select-group"
							value={sortBy}
							onChange={(e) => dispatch(setSortBy(e.target.value as 'name' | 'status'))}
						>
							<MenuItem value={"name"}>Наименование</MenuItem>
							<MenuItem value={"status"}>Статус</MenuItem>
						</Select>
						</FormControl>
					</div>
				</div>
			</div>
		</div>
	</>);
}

export default App;
