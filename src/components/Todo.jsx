import { useState } from "react";
import "./Todo.css";
import TodoList from "./TodoList";

export default function Todo() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const handleOnChange = (e)=> {
        setTodo(e.target.value);
    }

    const handleOnSubmit = (e)=>{
        e.preventDefault();
        if (todo.trim() !== '') {
            setTodos([...todos, todo]);
            setTodo(''); 
        }
    }
    
    return(
        <div className="todo-app">
            <header className="todo-header">
                <h1>My Todo List</h1>
            </header>

            <div className="todo-container">
                <form className="todo-form" onSubmit={handleOnSubmit}>
                    <input 
                        type="text" 
                        name="todo" 
                        id="todo" 
                        className="todo-input"
                        placeholder="Add a new task..."
                        onChange={handleOnChange} 
                        value={todo} 
                    />
                    <button type="submit" className="todo-button">
                        Add Todo
                    </button>
                </form>
                <div className="todo-list">
                    {todos.map((todo)=>(
                        <TodoList key={todo} todo={todo}/>
                    ))}
                </div>
            </div>

            <footer className="todo-footer">
                <p>&copy; 2024 Todo App</p>
            </footer>
        </div>
    )
}