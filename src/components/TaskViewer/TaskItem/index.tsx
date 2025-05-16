import { Box, Button, Checkbox, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import './index.css';

interface TaskItemProps {
    id: number;
    name: string;
    isCompleted: boolean;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function TaskItem({
    id,
    name,
    isCompleted,
    onToggle,
    onDelete
}: TaskItemProps) {
	return <Box className="task-item-flex-outer">
		<Box className="task-item-flex-inner">
			<Checkbox 
				checked={isCompleted}
				onChange={() => onToggle(id)}
			></Checkbox>
			<Typography className={`task-item-name ${isCompleted ? "task-item-completed" : "task-item-uncompleted"}`}>{name}</Typography>
		</Box>
		<Button
			className="task-item-button"
			onClick={() => onDelete(id)}
		><DeleteIcon className="task-item-icon" /></Button>
	</Box>;
}
