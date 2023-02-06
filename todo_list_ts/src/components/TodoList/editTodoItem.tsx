import React, { useState } from 'react';
import {Paper,TextField,Button } from '@mui/material';
import type { Todo } from '../../App';


interface EditTodoItemProps {
    todo: Todo,
    onChangeTodo : ({name, description}: Omit<Todo, "id" | "checked">)=> void
}

const EditTodoItem: React.FC<EditTodoItemProps> = ({todo, onChangeTodo}) => {
    const [editTodo, setEditTodo] = useState({name: todo.name, description: todo.description})

    const onClick =()=>{
        onChangeTodo(editTodo)
    }
    
    const onChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const {value,name} = event.target;
        setEditTodo({...todo,[name]: value})
    }
    
    return (
         <Paper sx={{marginTop:"15px", width:"100%", padding: "5px 20px", borderRadius: 2, display:"flex",justifyContent:"space-between",alignItems:"center",gap:2}}>
            <TextField value={editTodo.name} onChange={onChange} name="name" label="name task" fullWidth/>
            <TextField value={editTodo.description} onChange={onChange} name="description" label="description" fullWidth/>
            <Button variant="outlined" onClick={onClick}>Edit</Button>
        </Paper> );
}
 
export default EditTodoItem;