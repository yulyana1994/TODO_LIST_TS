import React, { useState } from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Header from './components/Header/header';
import Panel from './components/Panel/panel';
import TodoList from './components/TodoList/todoList';



export type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
}

function App() {
  const [editTodoId, setEditTodoId] = useState<number| null>(null)
  const [todoList, setTodoList] = useState([
    {id:1, name:"Task 1", description:"Do sport", checked: false},
    {id:2, name:"Task 2", description:"Check mail", checked: false},
    {id:3, name:"Task 3", description:"Eat banana", checked: true},
])

const onDeleteTodo = (id: Todo["id"])=>{
  setTodoList(todoList.filter(todo => todo.id !== id))
}

const onEdit = (id: Todo["id"])=>{
  setEditTodoId(id)
}

const onCheckTodo = (id: Todo["id"])=>{
  setTodoList(todoList.map((todo) =>{
    if(todo.id === id){
      return {...todo, checked: !todo.checked}
    }
    return todo
  }))
}

const onAddTodo = ({name, description}: Omit<Todo, "id" | "checked">)=>{
  setTodoList([...todoList, {id: todoList[todoList.length-1].id+1,name, description, checked:false}])
}

const onChangeTodo = ({name, description}: Omit<Todo, "id" | "checked">)=>{
  setTodoList(
    todoList.map((todo) =>{
    if(todo.id === editTodoId){
      return {...todo, name, description}
    }
    return todo
  }))
  setEditTodoId(null)
}

  return (
    <div className="App">
      <Box display="flex" flexDirection="column" width="500px">
        <Header/>
        <Panel onAddTodo = {onAddTodo}/>
        <TodoList 
          todoList ={todoList} 
          editTodoId={editTodoId} 
          onDeleteTodo ={onDeleteTodo} 
          onCheckTodo = {onCheckTodo} 
          onEdit={onEdit} 
          onChangeTodo = {onChangeTodo}/>
      </Box>
    </div>
  );
}

export default App;
