import { Box, FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, Select, Typography } from "@mui/material";
import { TaskFilter, TaskSortBy } from "../../types";
import './index.css';

interface TaskManagerProps {
    filter: TaskFilter;
    sortBy: TaskSortBy;
    onFilterChange: (value: TaskFilter) => void;
    onSortChange: (value: TaskSortBy) => void;
}

const tasksFilterLabels: Record<TaskFilter, string> = {
    all: 'Все',
    uncompleted: 'Активные',
    completed: 'Завершённые'
};

const tasksSortByLabels: Record<TaskSortBy, string> = {
    name: 'Наименование',
    status: 'Статус'
};

export default function TaskManager({
    filter,
    sortBy,
    onFilterChange,
    onSortChange
}: TaskManagerProps) {
    return <Box className="task-manager-outer">
        <Box className="task-manager-inner-grid">
            <Typography className="task-manager-label">Статус</Typography>
            <FormControl>
                <RadioGroup
                    value={filter}
                    row
                    onChange={(e) => onFilterChange(e.target.value as TaskFilter)}
                >
                    {Object.entries(tasksFilterLabels).map(([value, label]) => (
                        <FormControlLabel key={value} value={value} control={<Radio />} label={label} />
                    ))}
                </RadioGroup>
            </FormControl>
            <Typography className="task-manager-label">Сортировка</Typography>
            <FormControl fullWidth>
            <Select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value as TaskSortBy)}
            >
                {Object.entries(tasksSortByLabels).map(([value, label]) => (
                    <MenuItem key={value} value={value}>{label}</MenuItem>
                ))}
            </Select>
            </FormControl>
        </Box>
    </Box>;
}
