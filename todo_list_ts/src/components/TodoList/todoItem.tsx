import React from 'react';
import {Paper,Box,Typography,IconButton, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import type { Todo } from '../../App';


interface TodoItemProps {
    todo: Todo,
    onDeleteTodo : (id: Todo["id"])=> void,
    onCheckTodo : (id: Todo["id"])=> void,
    onEdit : (id: Todo["id"])=> void,
}

const TodoItem: React.FC<TodoItemProps> = ({todo, onDeleteTodo, onCheckTodo, onEdit}) => {
    return (
         <Paper sx={{marginTop:"15px", width:"100%", padding: "5px 20px", borderRadius: 2, display:"flex",justifyContent:"space-between",alignItems:"center",gap:2, opacity: todo.checked? 0.5 : 1 }}>
            <Box textAlign="left">
                <Typography 
                onClick={()=>onCheckTodo(todo.id)}
                sx={{cursor:"pointer", textDecoration: todo.checked? "line-through": "none"}} variant="h5" component="h5" gutterBottom>
                    {todo.name}
                </Typography>
                <Typography variant="subtitle1" component="div" gutterBottom>
                    {todo.description}
                </Typography>
            </Box>
            <Stack direction="row" spacing={1}>
                <IconButton onClick={()=>onEdit(todo.id)} color="primary" aria-label="edit">
                    <EditIcon />
                </IconButton>
                <IconButton onClick={()=> onDeleteTodo(todo.id)} color="error" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </Stack>
        </Paper> );
}
 
export default TodoItem;