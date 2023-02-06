import React from 'react';
import {Box } from '@mui/material';
import TodoItem from './todoItem';
import type { Todo } from '../../App';
import EditTodoItem from './editTodoItem';

interface TodoListProps {
    todoList: Todo[],
    editTodoId: Todo["id"] | null,
    onDeleteTodo : (id: Todo["id"])=> void,
    onCheckTodo : (id: Todo["id"])=> void,
    onEdit:(id: Todo["id"])=> void,
    onChangeTodo:({name, description}: Omit<Todo, "id" | "checked">)=> void
}


const TodoList: React.FC <TodoListProps> = ({todoList, onDeleteTodo, onCheckTodo, onEdit, editTodoId,onChangeTodo}) => {
    return ( 
        <Box>
            {todoList.map((todo)=>{
                if(todo.id === editTodoId)
                return (
                    <EditTodoItem todo={todo} key={todo.id} onChangeTodo={onChangeTodo} />
                    );
            return (
                <TodoItem 
                    todo={todo} 
                    key={todo.id} 
                    onDeleteTodo={onDeleteTodo} 
                    onCheckTodo={onCheckTodo} 
                    onEdit={onEdit} />
            )
                })}
        </Box>
     );
}
 
export default TodoList;