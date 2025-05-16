import { Box } from '@mui/material';
import { Task } from '../../types';
import TaskItem from './TaskItem';
import './index.css';

interface TaskViewerProps {
    tasks: Task[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function TaskViewer({
    tasks,
    onToggle,
    onDelete
}: TaskViewerProps) {
    return <Box className="task-viewer">
        {tasks.map((task: Task) => <TaskItem
            key={task.id}
            id={task.id}
            name={task.name}
            isCompleted={task.isCompleted}
            onToggle={onToggle}
            onDelete={onDelete}
        ></TaskItem>)}
    </Box>;
}
