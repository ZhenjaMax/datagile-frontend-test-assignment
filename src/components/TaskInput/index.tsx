import React from "react";
import { Button, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add'
import './index.css';

interface TaskInputProps {
    onAddTask: (text: string) => void;
}

export default function TaskInput({
    onAddTask
}: TaskInputProps) {
    const [inputText, setInputText] = React.useState('');

    const handleSubmit = () => {
        if (inputText.trim()) { 
            onAddTask(inputText);
            setInputText('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return <>
        <TextField
            fullWidth
            size="small"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
        />
        <Button
            disableRipple
            variant="contained"
            className="task-input-button"
            startIcon={<AddIcon />} 
            onClick={handleSubmit}
        >Добавить</Button>
    </>;
}
