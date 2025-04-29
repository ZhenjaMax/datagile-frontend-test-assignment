import { Button, Checkbox, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskComponent(
	{id, name, isCompleted, onToggle, onDelete}: 
	{id: number, name: string, isCompleted: boolean, 
		onToggle: (id: number) => void, onDelete: (id: number) => void
	}
) {
	return <div style={{display: 'flex', padding: "3px"}}>
		<div style={{display: 'flex', alignItems: 'center', flex: '1 1 auto'}}>
			<Checkbox 
				checked={isCompleted}
				onChange={() => onToggle(id)}
			></Checkbox>
			<Typography style={{
				margin: '0', fontSize: 16, 
				textDecoration: isCompleted ? "line-through": "auto"
			}}>{name}</Typography>
		</div>
		<Button
			onClick={() => onDelete(id)}
			sx={{
				bgcolor: 'white',
				boxShadow: '0px 5px 5px rgba(0,0,0,0.1)',
				minWidth: '24px',
				width: '42px',
				minHeight: '42px',
				padding: '0',
				borderRadius: '7px',
			}
		}><DeleteIcon sx={{ color: 'grey.600' }} /></Button>
	</div>
}
