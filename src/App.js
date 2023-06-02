import { useEffect, useState } from 'react';
import './App.css';
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';

function App(props) {

  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  },[todos])

  const addTodo = function(title){
    setTodos(currentTodos => {
      return [...currentTodos, 
        {
          id : crypto.randomUUID(), 
          title, 
          completed : false
        }]
     })
  }
 
  const toggleTodo = function(id, completed){
    setTodos(currentTodos=>{
      return currentTodos.map(todo=>{
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  const deleteTodo = function(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  

  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className='header'>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
}

export default App;
