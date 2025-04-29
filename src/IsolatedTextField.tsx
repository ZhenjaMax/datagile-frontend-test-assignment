import { TextField } from "@mui/material";
import React from "react";

export default function IsolatedTextField ({onAddTask}: { onAddTask: (text: string) => void }) {
    const [inputText, setInputText] = React.useState('');

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && inputText.trim()) {
            onAddTask(inputText);
            setInputText('');
        }
    };

    return (
        <TextField
            fullWidth
            size="small"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
        />
    );
};
